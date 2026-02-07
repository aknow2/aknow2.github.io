export type SocialLink = {
	id: string;
	label: string;
	url: string;
	icon: string;
};

export type ReleaseLink = {
	label: string;
	url: string;
	icon: "github" | "x" | "instagram";
};

export type ReleaseItem = {
	id: string;
	title: string;
	description: string;
	links: ReleaseLink[];
	previewImageUrl?: string;
	previewImageWebp?: string;
	previewAlt?: string;
};

export type ReleaseCatalog = {
	version?: string;
	items: ReleaseItem[];
};
