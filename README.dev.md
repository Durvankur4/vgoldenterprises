# Development environment

This project can be run locally or inside a Docker container. Use one of the options below.

Local (recommended)

1. Install Node (use `nvm` with the pinned version):

```bash
nvm use 18 || nvm install 18
npm install
npm run dev
```

Open http://localhost:5173

Docker

Build and run the development container (exposes Vite on port 5173):

```bash
docker build -t vswebsite:dev .
docker run --rm -p 5173:5173 -v "$PWD":/app -v /app/node_modules vswebsite:dev
```

Notes

- The project uses Vite. Dev server host must be `0.0.0.0` for container access.
- Node version is pinned in `.nvmrc` (18).
