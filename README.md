# Mirza Aydemir - Portfolio

Personal portfolio website for Mirza Aydemir, MFin Candidate (Capital Markets). Showcasing experience in FP&A, financial modeling, and econometrics.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: TypeScript

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment (CI/CD)

This project uses a custom CI/CD pipeline for deployment:

1.  **Container Registry**: GitHub Container Registry (`ghcr.io`).
2.  **Hosting**: Self-hosted [Dokploy](https://dokploy.com/).
3.  **Workflow**:
    -   Pushes to `main` trigger a GitHub Action.
    -   The action lints, builds, and pushes a Docker image to `ghcr.io`.
    -   A webhook triggers Dokploy to pull the new image and redeploy.

## Features

- **Dynamic SEO**: Automatically generated Open Graph images.
- **Optimized Builds**: Dockerized with Next.js standalone output.
- **Markdown Content**: Case studies rendered from Markdown files.
