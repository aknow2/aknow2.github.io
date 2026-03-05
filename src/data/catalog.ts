import type { ReleaseCatalog, ReleaseItem, SocialLink } from "./types";
import releaseCatalog from "./release-catalog.json";
import socialLinks from "./social-links.json";

export const getReleaseItems = (): ReleaseItem[] => {
	const catalog = releaseCatalog as ReleaseCatalog;
	return catalog.items ?? [];
};

export const getSocialLinks = (): SocialLink[] => {
	const links = socialLinks as { items: SocialLink[] };
	return links.items ?? [];
};
