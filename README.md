# My Developer Blog

This project is a developer blog built with [Docusaurus](https://docusaurus.io/), a modern static site generator.

---

## Table of Contents
- [Repository Description](#repository-description)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Repository Structure](#repository-structure)
- [CI/CD](#cicd)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)
  - [NGINX Deployment](#nginx-deployment)

---

## Repository Description

This repository contains a developer portfolio and blog built with Docusaurus and React components.

It demonstrates:
- Static site generation
- Component-based frontend architecture
- Project showcase section with interactive UI
- CI/CD deployment via GitHub Actions
- Deployment to GitHub Pages and optionally NGINX

---



## Quickstart

### Requirements
* Node.js (>= 16)
* npm

### Install dependencies

```bash
npm install
```

### Start development server
```bash
npm run start
```

### The site will be available at:
```bash
http://localhost:3000
```

### Build project
```bash
npm run build
```
This generates a static production build in the /build folder.
---

## Usage

### Adding a new blog post

Create a new Markdown file inside `/blog`:

```md
---
title: My New Post
date: 2026-04-26
---
```

Your content here...

### Adding a new project
Edit:
src/components/myProjectHighlights/index.tsx

### Add a new object inside the projects array:

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

### Modifying UI components
All UI components are located in:
src/components/
Each component has:

* index.tsx → logic
* *.module.css → styling

### Repository Structure
* blog/ → blog posts (Markdown)
* docs/ → documentation pages
* src/ → React components (UI)
* static/ → static assets (images, icons)
* docusaurus.config.ts → main configuration
* sidebars.ts → sidebar structure
* build/ → production output (generated)

### CI/CD

This project uses GitHub Actions for automation:

* Build project on every push
* Run production build
* Deploy automatically to GitHub Pages

Workflow includes:

* dependency installation
* build step (npm run build)
* artifact upload
* deployment to GitHub Pages

### Deployment
GitHub Pages

To deploy manually:
```bash
npm run build
npm run deploy
```
Or via GitHub Actions (recommended), which automatically deploys on push to the main branch.

### NGINX Deployment


The project can also be deployed using Docker + NGINX.

Steps:
1. Build project:
```bash
npm run build
```

2. Copy /build folder to server
3. Configure NGINX:
```
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
## Notes
* Do NOT store secrets or tokens in the repository
* Use environment variables for sensitive data