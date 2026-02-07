# Quickstart

## Goal
Validate the Mostly Harmless Outputs page structure and card rendering from JSON.

## Prerequisites
- Node.js 18+
- npm

## Steps
1. Install dependencies: `npm install`.
2. Start dev server: `npm run dev`.
3. Open the site at `http://localhost:4321`.
4. Update the card catalog JSON (planned location: `src/data/release-catalog.json`).
5. Refresh the page and verify:
   - Hero shows `aKnow2` only.
   - Top links show **GitHub**, **X**, **Instagram** and open in a new tab.
   - Section heading reads **Mostly Harmless Outputs** with a hand-drawn wave divider.
   - Cards render in the JSON-defined order, and the card itself is not clickable.
   - Link icons appear under each card title and open in a new tab.
   - Cards show preview images or the `public/placeholder.svg` fallback.

## Expected Result
All visual and interaction requirements from the spec are satisfied in the running dev server.
