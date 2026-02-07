# Phase 0 Research

## Decision 1: Card data source (JSON in repo)

**Decision**: Store the card catalog as a JSON file in the repository and load it at build time.

**Rationale**:
- The spec requires that card content is definable via JSON.
- A local JSON file keeps the site fully static and works with GitHub Pages.
- Simple for non-technical updates without adding runtime dependencies.

**Alternatives considered**:
- Inline TypeScript/JS objects in code (rejected: less friendly for content updates).
- External CMS or API (rejected: adds runtime dependency and hosting complexity).

## Decision 2: Preview image handling for cards

**Decision**: Use explicit `previewImageUrl` values provided in the JSON catalog and fall back to a placeholder when absent.

**Rationale**:
- Matches the requirement for a stable UI even when previews are unavailable.
- Avoids build-time scraping or runtime fetches that could fail or slow builds.

**Alternatives considered**:
- Build-time OGP fetching (rejected: brittle, external dependencies, more complex caching).
- Runtime OGP fetching (rejected: not compatible with static-only hosting).

## Decision 3: Runtime architecture and dependency scope

**Decision**: Keep the site fully static (Astro build output only). Use Astro 5 for UI and treat GitHub Copilot SDK as a development-time tool (no production/runtime dependency).

**Rationale**:
- GitHub Pages requires static output; the spec has no server-side behavior.
- Copilot SDK usage is aligned with development workflow without impacting production bundle size.

**Alternatives considered**:
- Introduce a server runtime for dynamic content (rejected: conflicts with GitHub Pages).
- Omit Copilot SDK entirely (rejected: user request explicitly mentions it).
