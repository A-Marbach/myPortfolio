# Create Your First Container Image

A Docker image is a blueprint for a container. This guide walks you through writing a `Dockerfile` and building your first image.

## Prerequisites

- Docker installed ([docs.docker.com](https://docs.docker.com/get-docker/))
- A simple application to containerize (we'll use a Node.js app as an example)

## Step 1: Write a Dockerfile

Create a file named `Dockerfile` in the root of your project:

```dockerfile title="Dockerfile"
# Use an official Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files first (for better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose the port the app listens on
EXPOSE 3000

# Command to run the app
CMD ["node", "index.js"]
```

## Step 2: Build the Image

Run the following command in the same directory as your `Dockerfile`:

```bash
docker build -t my-app:latest .
```

- `-t my-app:latest` — tags the image with a name and version
- `.` — tells Docker to use the current directory as build context

## Step 3: Run a Container from the Image

```bash
docker run -p 3000:3000 my-app:latest
```

- `-p 3000:3000` — maps port 3000 on your machine to port 3000 in the container
- Open `http://localhost:3000` in your browser

## Step 4: Useful Commands

```bash
# List all local images
docker images

# List running containers
docker ps

# Stop a container
docker stop <container-id>

# Remove an image
docker rmi my-app:latest
```

## Multi-Stage Builds

For production images, use multi-stage builds to keep the final image small:

```dockerfile title="Dockerfile"
# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm ci --omit=dev
CMD ["node", "dist/index.js"]
```

The `--from=build` instruction copies only the compiled output from the first stage, leaving out dev dependencies and source files.
