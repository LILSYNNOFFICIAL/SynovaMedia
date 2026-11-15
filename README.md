# SynovaMedia

The parent-company website for the SynovaMedia technology and creative ecosystem.

## Stack

- React 19
- Vite 6
- Chakra UI 3 and Emotion
- Lucide React
- Custom responsive CSS

## Development

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx`: page composition, navigation, and interactive behavior
- `src/data/portfolio.js`: editable venture, project, and service content
- `src/styles.css`: visual system, responsive layouts, and motion
- `src/theme.js`: Chakra UI design tokens
- `img/`: existing repository image assets, preserved for future use

Portfolio content is separated from layout so project details, artwork, statuses, and destination links can be expanded independently. Entries without public destinations remain present without implying that a public website exists.

## Design direction

Obsidian Glass with restrained Liquid Future details: graphite surfaces, silver typography, cool blue highlights, layered glass, ambient lighting, and balanced motion. Reduced-motion preferences are respected.