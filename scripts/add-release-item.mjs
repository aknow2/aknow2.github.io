import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const CATALOG_PATH = path.join(ROOT, "src/data/release-catalog.json");
const CARDS_DIR = path.join(ROOT, "public/cards");
const ORG_IMG_DIR = path.join(ROOT, "org_img");

const toSlug = (value) =>
	value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 60) || `item-${Date.now()}`;

const toUrlPath = (fileName) => `/cards/${fileName}`;

const prompt = async (rl, text) => {
	const answer = (await rl.question(text)).trim();
	return answer;
};

const listImages = async () => {
	const entries = await readdir(ORG_IMG_DIR, { withFileTypes: true });
	return entries
		.filter((entry) => entry.isFile())
		.map((entry) => entry.name)
		.filter((name) => /\.(png|jpe?g|webp|gif)$/i.test(name));
};

const pickImage = async (rl, images) => {
	output.write("Available images in org_img:\n");
	images.forEach((name, index) => {
		output.write(`  [${index + 1}] ${name}\n`);
	});

	const answer = await prompt(rl, "Select image number: ");
	const index = Number.parseInt(answer, 10) - 1;
	if (Number.isNaN(index) || index < 0 || index >= images.length) {
		throw new Error("Invalid image selection.");
	}

	return path.join(ORG_IMG_DIR, images[index]);
};

const collectLinks = async (rl) => {
	const links = [];
	while (true) {
		const linkUrl = await prompt(rl, "Link URL (blank to finish): ");
		if (!linkUrl) {
			break;
		}
		const label = await prompt(rl, "Link label (e.g., GitHub): ");
		const icon = await prompt(rl, "Link icon (github/x/instagram): ");
		links.push({
			label: label || linkUrl,
			url: linkUrl,
			icon: icon || "github",
		});
	}

	if (links.length === 0) {
		throw new Error("At least one link is required.");
	}

	return links;
};

const main = async () => {
	const rl = createInterface({ input, output });

	try {
		const images = await listImages();
		if (images.length === 0) {
			throw new Error("No images found in org_img.");
		}
		const imagePath = await pickImage(rl, images);
		const title = await prompt(rl, "Title: ");
		const description = await prompt(rl, "Description: ");
		const links = await collectLinks(rl);

		const slug = toSlug(title || "item");
		const outputNameJpg = `${slug}.jpg`;
		const outputNameWebp = `${slug}.webp`;
		const outputPathJpg = path.join(CARDS_DIR, outputNameJpg);
		const outputPathWebp = path.join(CARDS_DIR, outputNameWebp);

		await mkdir(CARDS_DIR, { recursive: true });
		const pipeline = sharp(imagePath).resize({
			width: 1200,
			height: 800,
			fit: "inside",
			withoutEnlargement: true,
		});

		await pipeline
			.clone()
			.jpeg({ quality: 82 })
			.toFile(outputPathJpg);

		await pipeline
			.clone()
			.webp({ quality: 82 })
			.toFile(outputPathWebp);

		const rawCatalog = await readFile(CATALOG_PATH, "utf-8");
		const catalog = JSON.parse(rawCatalog);

		const newItem = {
			id: slug,
			title,
			description,
			links,
			previewImageUrl: toUrlPath(outputNameJpg),
			previewImageWebp: toUrlPath(outputNameWebp),
			previewAlt: `${title} preview`,
		};

		catalog.items = [newItem, ...(catalog.items || [])];

		await writeFile(CATALOG_PATH, JSON.stringify(catalog, null, 2) + "\n");

		output.write("\nAdded item to release-catalog.json and saved resized image.\n");
		output.write(`Image (jpg): ${toUrlPath(outputNameJpg)}\n`);
		output.write(`Image (webp): ${toUrlPath(outputNameWebp)}\n`);
	} finally {
		rl.close();
	}
};

main().catch((error) => {
	console.error("Failed to add release item:", error);
	process.exit(1);
});
