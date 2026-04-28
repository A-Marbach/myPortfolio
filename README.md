# DevSecOps Portfolio – Artur Marbach

A personal portfolio and documentation site built with [Docusaurus](https://docusaurus.io/) and React, showcasing DevSecOps projects, infrastructure work, and technical documentation.

**Live site:** [a-marbach.github.io/my-dso-blog](https://a-marbach.github.io/my-dso-blog/)

---

## Table of Contents
- [About](#about)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Repository Structure](#repository-structure)
- [CI/CD](#cicd)
- [Deployment](#deployment)

---

## About

This repository contains a DevSecOps portfolio built with Docusaurus and custom React components.

It demonstrates:
- Static site generation with Docusaurus v3
- Component-based frontend architecture with React + TypeScript
- Project showcase section with interactive UI
- CI/CD pipeline via GitHub Actions
- Deployment to GitHub Pages

---

## Quickstart

### Requirements
- Node.js >= 18
- npm

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run start
```

Site is available at `http://localhost:3000`

### Build for production
```bash
npm run build
```

Generates a static build in the `/build` folder.

---

## Usage

### Adding a new project

Edit [src/components/myProjectHighlights/index.tsx](src/components/myProjectHighlights/index.tsx) and add a new object to the `projects` array:

```ts
{
  img: "img/projects/example.png",
  title: "New Project",
  description: "Project description",
  techIcons: ["img/container.png"],
  github: "https://github.com/...",
  doc: "/docs/..."
}
```

### Adding a new documentation page

Create a Markdown file inside `/docs` and reference it in `sidebars.ts`.

### Adding a new blog post

Create a Markdown file inside `/blog`:

```md
---
title: My New Post
date: 2024-01-01
---

Your content here...
```

### Modifying UI components

All components are in `src/components/`. Each has:
- `index.tsx` — logic and markup
- `*.module.css` — scoped styles

---

## Repository Structure

```
blog/                  → blog posts (Markdown)
docs/                  → documentation pages
src/
  components/          → React UI components
  pages/               → custom pages (home, imprint)
  css/                 → global styles
static/                → images and icons
docusaurus.config.ts   → main configuration
sidebars.ts            → sidebar structure
.github/workflows/     → CI/CD pipelines
```

---

## CI/CD

GitHub Actions handles the full pipeline on every push to `feature`:

1. Install dependencies
2. Build the site (`npm run build`)
3. Upload build artifact
4. Deploy to GitHub Pages

Workflow files are in [.github/workflows/](.github/workflows/).

---

## Deployment

### GitHub Pages (automatic)

Push to the `feature` branch — GitHub Actions deploys automatically.

### GitHub Pages (manual)

```bash
npm run build
npm run deploy
```

### NGINX

1. Build the project:
```bash
npm run build
```

2. Copy the `/build` folder to your server and configure NGINX:

```nginx
server {
  listen 80;
  server_name your-domain.com;

  root /var/www/html/build;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}
```

---

## Notes

- Do not store secrets or tokens in the repository
- Use environment variables for sensitive configuration (see `example.env`)