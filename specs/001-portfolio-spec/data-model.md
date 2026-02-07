# Data Model

## Entities

### Social Link
- **Purpose**: Top-of-page external links.
- **Fields**:
  - `id` (string, required): Stable identifier.
  - `label` (string, required): Display label (English UI).
  - `url` (string, required): External destination.
  - `icon` (string, required): Icon name or asset reference.
- **Validation**:
  - `url` must be a valid absolute URL.
  - `label` must be non-empty and English.

### Release Item
- **Purpose**: One card in “Mostly Harmless Outputs”.
- **Fields**:
  - `id` (string, required): Stable identifier.
  - `title` (string, required): Card title (English UI).
  - `description` (string, required): Short summary (English UI).
  - `links` (array of Release Link, required): External destinations for the card.
  - `previewImageUrl` (string, optional): Image URL for card previews.
  - `previewAlt` (string, optional): Alt text for preview image.
- **Validation**:
  - Each `links[].url` must be a valid absolute URL.
  - `title` and `description` must be non-empty and English.
  - When available, prefer providing `previewImageUrl`.

### Release Link
- **Purpose**: One external destination for a card.
- **Fields**:
  - `label` (string, required): Accessible name for the link.
  - `url` (string, required): External destination.
  - `icon` (string, required): Icon name/asset reference (e.g., `github`, `x`, `instagram`).
- **Validation**:
  - `url` must be a valid absolute URL.
  - `label` must be non-empty and English.

### Release Catalog (JSON)
- **Purpose**: JSON container holding the list of release items.
- **Fields**:
  - `version` (string, optional): Schema version label.
  - `items` (array of Release Item, required).
- **Validation**:
  - `items` order defines the display order in the UI.

### Preview Media
- **Purpose**: Optional media metadata for cards.
- **Fields**:
  - `url` (string, required): Image URL.
  - `alt` (string, required): Accessible description.
  - `available` (boolean, required): Whether image can be displayed.

## Relationships

- Release Catalog **contains many** Release Items.
- A Release Item **may include** Preview Media.
- Social Links are **independent** of Release Items.
