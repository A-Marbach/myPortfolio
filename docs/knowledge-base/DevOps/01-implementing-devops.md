# Implementing DevOps

Adopting DevOps is less about specific tools and more about changing how a team builds and ships software. This article outlines the key practices and how to put them into action.

## 1. Version Control Everything

The foundation of DevOps is having all code — including infrastructure config — in version control.

- Application code in Git
- Docker and deployment configs in the same repo
- No manual changes on production servers — everything goes through a PR

## 2. Set Up a CI Pipeline

A CI pipeline runs automatically on every push and ensures your code is always in a working state.

A basic GitHub Actions workflow:

```yaml title=".github/workflows/ci.yml"
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test
```

## 3. Containerize Your Application

Packaging your app in a Docker container ensures it runs the same way everywhere — on your machine, in CI, and in production.

```dockerfile title="Dockerfile"
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
```

## 4. Automate Deployments (CD)

After CI passes, your CD pipeline deploys the application automatically.

```yaml title=".github/workflows/deploy.yml"
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build and push Docker image
        run: |
          docker build -t myapp:${{ github.sha }} .
          docker push myregistry/myapp:${{ github.sha }}
      - name: Deploy to server
        run: ssh deploy@myserver "docker pull myregistry/myapp:${{ github.sha }} && docker restart myapp"
```

## 5. Monitor in Production

Deploying is not the end. Set up logging and monitoring so you know when something breaks.

- **Logs**: Collect logs centrally (e.g. with Loki or CloudWatch)
- **Metrics**: Track CPU, memory, response times (e.g. with Prometheus + Grafana)
- **Alerts**: Get notified when error rates or latency spike

## Key Takeaway

DevOps works best when it is incremental. Start with version control and a basic CI pipeline, then add containerization, CD, and monitoring step by step.
