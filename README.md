# Roboticela Iconify

[![AGPL License](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-blue.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)

**Landing site and ICNS API for Roboticela Iconify** — the marketing website and server-side icon generation API used by the [Iconify desktop app](https://app.iconify.roboticela.com).

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api) • [Support](#-support)

---

## Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Application](#-running-the-application)
- [Building for Production](#-building-for-production)
- [API](#-api)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)
- [About Roboticela](#-about-roboticela)

---

## About

This repository is the **web frontend and API** for **Roboticela Iconify**:

- **Landing page** — Marketing site with features, downloads, FAQ, and documentation.
- **ICNS API** — `POST /api/generate-icns` for generating macOS `.icns` icons from PNG (used by the desktop app at [app.iconify.roboticela.com](https://app.iconify.roboticela.com)).

The full **Iconify** product is a cross-platform desktop app (Tauri + React) for generating platform-specific icons (iOS, Android, Web, macOS, etc.) from a single image. This Next.js app serves the public website and the ICNS generation endpoint with CORS enabled for the app domain.

### Why This Project?

- **Free and Open Source** — Licensed under AGPL-3.0
- **Next.js** — Fast, modern React framework with API routes
- **ICNS in the cloud** — Generate macOS icons via API for the desktop app
- **CORS-ready** — Configured for `app.iconify.roboticela.com` and localhost
- **Modern UI** — Tailwind CSS, Framer Motion, light/dark theme

---

## Features

### Website

- **Hero & value proposition** — Clear messaging and call-to-action
- **Features & comparison** — Iconify capabilities and platform support
- **Downloads & platforms** — Links to desktop app and platform info
- **FAQ, stats, testimonials** — Trust and common questions
- **Responsive & themed** — Works on all devices with light/dark mode

### API

- **`POST /api/generate-icns`** — Accepts base64 PNG, returns `.icns` binary
- **CORS** — Allows `https://app.iconify.roboticela.com`, `http://app.iconify.roboticela.com`, and localhost
- **Validation** — PNG signature check and error handling
- **Quality** — BICUBIC scaling, lossless output via png2icons + uzip-module

---

## Technology Stack

| Layer        | Tech |
|-------------|------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI**        | [React 19](https://reactjs.org/), [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons**     | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Language**  | [TypeScript 5](https://www.typescriptlang.org/) |
| **ICNS API**  | [png2icons](https://www.npmjs.com/package/png2icons), [uzip-module](https://www.npmjs.com/package/uzip-module) |

### Development

- **Linting** — ESLint + eslint-config-next
- **Package manager** — npm

---

## Prerequisites

- **Node.js** (v20 or higher) — [Download](https://nodejs.org/)
- **npm** — Comes with Node.js

No Rust or Tauri required; this repo is the Next.js web app only.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Roboticela/Iconify-Frontend.git
cd Iconify-Frontend
```

### 2. Install dependencies

```bash
npm install
```

---

## Running the Application

### Development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Production (local)

```bash
npm run build
npm run start
```

---

## Building for Production

```bash
npm run build
```

Output is in `.next/`. Deploy to Vercel, Node, or any Next.js-compatible host.

### Lint

```bash
npm run lint
```

---

## API

### `POST /api/generate-icns`

Generates a macOS `.icns` file from a PNG image.

**Request**

- **Method:** `POST`
- **Content-Type:** `application/json`
- **Body:**

```json
{
  "image": "<base64-encoded PNG or data URL>",
  "settings": {
    "backgroundColor": "#ffffff",
    "scale": 100,
    "positionX": 50,
    "positionY": 50,
    "borderRoundness": 0
  }
}
```

**Response**

- **Success (200):** Binary body, `Content-Type: image/icns`, `Content-Disposition: attachment; filename="icon.icns"`
- **Error (4xx/5xx):** JSON `{ "error": "...", "message": "..." }`

**CORS**

Allowed origins:

- `https://app.iconify.roboticela.com`
- `http://app.iconify.roboticela.com`
- `http://localhost:3000`
- `http://127.0.0.1:3000`

---

## Project Structure

```
Iconify-Frontend/
├── app/
│   ├── api/
│   │   └── generate-icns/
│   │       └── route.ts      # ICNS generation + CORS
│   ├── components/           # Page sections & UI
│   │   ├── About.tsx
│   │   ├── Comparison.tsx
│   │   ├── Demo.tsx
│   │   ├── Downloads.tsx
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Navbar.tsx
│   │   ├── Platforms.tsx
│   │   ├── Stats.tsx
│   │   ├── SystemRequirements.tsx
│   │   ├── TechnologyStack.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── UseCases.tsx
│   │   └── WhyChoose.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── Favicon.svg
│   ├── icon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── types/
│   └── uzip-module.d.ts      # Module declaration for uzip-module
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature` or `fix/your-fix`
3. Commit with clear messages (e.g. `Add: ...`, `Fix: ...`, `Docs: ...`)
4. Push and open a Pull Request

Please follow existing code style (TypeScript, Tailwind, React/Next.js conventions).

---

## Support

- **Issues:** [GitHub Issues](https://github.com/Roboticela/Iconify-Frontend/issues)
- **Iconify app:** [app.iconify.roboticela.com](https://app.iconify.roboticela.com)
- **Roboticela:** [github.com/Roboticela](https://github.com/Roboticela)

---

## License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

- You may use, modify, and distribute the software under the terms of the license.
- If you run a modified version over a network, you must provide the corresponding source to users.

See [LICENSE](LICENSE) for full terms.

---

## About Roboticela

**Roboticela** builds high-quality, open-source software for developers and designers.

- **GitHub:** [github.com/Roboticela](https://github.com/Roboticela)
- **Iconify:** [Roboticela Iconify](https://github.com/Roboticela/iconify) (desktop app)
- **This repo:** Web frontend and ICNS API for Iconify

If you find this useful, consider starring the repository.

---

**Built with ❤️ by [Roboticela](https://github.com/Roboticela)**
