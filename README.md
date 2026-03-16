# AI Dev Template Configurator

Web configurator for generating `.ai-dev-template.config.json` for repositories based on [AI Dev Template](https://github.com/Vitykovskiy/AI-dev-template).

## Links

- Template repository: [Vitykovskiy/AI-dev-template](https://github.com/Vitykovskiy/AI-dev-template)
- Live configurator: [vitykovskiy.github.io/AI-dev-template-configurator](https://vitykovskiy.github.io/AI-dev-template-configurator/)

## What It Does

The configurator helps choose:

- repository language policy;
- agent execution mode and human checkpoints;
- task-scoped pull request and review policy;
- artifact persistence rules;
- RAG mode for the development workflow.

It then generates a ready `.ai-dev-template.config.json` file for the repository root.

## Local Development

Requirements:

- Node.js 22 or newer
- npm

Run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

GitHub Pages is deployed automatically from `main` through GitHub Actions.
