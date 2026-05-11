# Atharsh G Portfolio

Gamified personal portfolio for Atharsh G, a Java Full Stack Developer focused on Spring Boot, Kafka, React, Angular, microservices, DevOps, and distributed systems.

## Tech Stack

- React
- Vite
- Lucide React
- GitHub Pages deployment workflow

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deployment

This repository includes a GitHub Pages workflow at `.github/workflows/deploy.yml`.

When pushed to `main`, GitHub Actions builds the app and deploys the generated `dist` folder to GitHub Pages. The Vite base path is configured automatically from the GitHub repository name during Actions builds.
