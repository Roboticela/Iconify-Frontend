<div align="center">

![App Logo](public/Favicon.svg)

# Roboticela Iconify

[![Proprietary](https://img.shields.io/badge/license-Proprietary-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-blue.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)

**Landing site and ICNS API for Roboticela Iconify** — the marketing website and server-side icon generation API used by the [Iconify desktop app](https://app.iconify.roboticela.com).

[Features](#-features) • [Installation](#-installation) • [API](#-api) • [Support](#-support)

</div>

---

## Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment variables](#environment-variables)
- [Running the Application](#-running-the-application)
- [Building for Production](#-building-for-production)
- [API](#-api)
- [Email templates](#email-templates)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)
- [About Roboticela](#-about-roboticela)

---

## About

This repository is the **web frontend and API** for **Roboticela Iconify**:

- **Landing page** — Marketing site with features, downloads, FAQ, and documentation.
- **Support page** — `/support` with a contact form (full name, email, message); submissions are sent to you via SMTP using a configurable HTML email template.
- **ICNS API** — `POST /api/generate-icns` for generating macOS `.icns` icons from PNG (used by the desktop app at [app.iconify.roboticela.com](https://app.iconify.roboticela.com)).
- **Contact API** — `POST /api/contact` for the support form; sends email via SMTP using the template in `EmailStructures/support-contact.html`.

The full **Iconify** product is a cross-platform desktop app (Tauri + React) for generating platform-specific icons (iOS, Android, Web, macOS, etc.) from a single image. This Next.js app serves the public website, support form, and the ICNS generation endpoint with CORS enabled for the app domain.

### Why This Project?

- **Proprietary** — © Roboticela. All rights reserved.
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
- **Support page** — `/support` contact form (full name, email, message) with success/error feedback
- **FAQ, stats, testimonials** — Trust and common questions
- **Responsive & themed** — Works on all devices with light/dark mode

### API

- **`POST /api/generate-icns`** — Accepts base64 PNG, returns `.icns` binary
- **`POST /api/contact`** — Accepts support form data; sends email via SMTP using the HTML template in `EmailStructures/support-contact.html`
- **CORS** — Allows `https://app.iconify.roboticela.com`, `http://app.iconify.roboticela.com`, and localhost
- **Validation** — PNG signature check (ICNS); required fields and SMTP config (contact)
- **Quality** — BICUBIC scaling, lossless output via png2icons + uzip-module; branded HTML emails via nodemailer

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
| **Contact / SMTP** | [nodemailer](https://nodemailer.com/) |

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

## Environment variables

For the **Support** contact form to send email, copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server host (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Port (e.g. `587`) |
| `SMTP_SECURE` | `true` for 465, `false` for 587 |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` or `SMTP_PASSWORD` | SMTP password |
| `SMTP_FROM` | Sender address (e.g. `Iconify Support <noreply@example.com>`) |
| `CONTACT_EMAIL` | Where support messages are delivered |

Without these, the Support page form will still render but `POST /api/contact` will return a configuration error.

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

### `POST /api/contact`

Sends a support/contact message via SMTP. Used by the [Support page](/support).

**Request**

- **Method:** `POST`
- **Content-Type:** `application/json`
- **Body:**

```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "message": "Your message here."
}
```

**Response**

- **Success (200):** `{ "success": true }`
- **Error (4xx/5xx):** JSON `{ "error": "...", "message": "..." }`

**CORS:** Same allowed origins as above. Email is sent using the HTML template in `EmailStructures/support-contact.html` (placeholders `{{fullName}}`, `{{email}}`, `{{message}}`).

---

## Email templates

Support form emails use HTML from the **EmailStructures** folder:

| File | Purpose |
|------|---------|
| `EmailStructures/support-contact.html` | Template for messages submitted via the Support page. Placeholders: `{{fullName}}`, `{{email}}`, `{{message}}`. |

Edit the HTML to change layout, branding, or copy. The API replaces the placeholders with escaped user input when sending.

---

## Project Structure

```
Iconify-Frontend/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts      # Support form → SMTP (uses EmailStructures)
│   │   └── generate-icns/
│   │       └── route.ts      # ICNS generation + CORS
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              # Imports from @/components
│   └── support/
│       ├── layout.tsx
│       └── page.tsx           # Support / contact form (imports @/components)
├── assets/                   # Static assets (e.g. CompanyLogo.png)
├── components/               # Page sections & UI (outside app; use @/components)
│   ├── About.tsx
│   ├── Comparison.tsx
│   ├── Demo.tsx
│   ├── Downloads.tsx
│   ├── FAQ.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Navbar.tsx
│   ├── Platforms.tsx
│   ├── Stats.tsx
│   ├── SystemRequirements.tsx
│   ├── TechnologyStack.tsx
│   ├── ThemeToggle.tsx
│   ├── UseCases.tsx
│   └── WhyChoose.tsx
├── EmailStructures/
│   └── support-contact.html  # HTML email template for support messages
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

- **Support form:** [/support](/support) — submit questions or feedback (requires SMTP env vars).
- **Issues:** [GitHub Issues](https://github.com/Roboticela/Iconify-Frontend/issues)
- **Iconify app:** [app.iconify.roboticela.com](https://app.iconify.roboticela.com)
- **Roboticela:** [github.com/Roboticela](https://github.com/Roboticela)

---

## License

This project is **proprietary** to **Roboticela**. All rights reserved.

- Unauthorized copying, modification, distribution, or use is prohibited.
- For licensing inquiries, contact [Roboticela](https://github.com/Roboticela).

See [LICENSE](LICENSE) for full terms.

---

## About Roboticela

<div align="center">

![Company Logo](assets/CompanyLogo.png)

**Roboticela** builds high-quality software for developers and designers.

</div>

- **GitHub:** [github.com/Roboticela](https://github.com/Roboticela)
- **Iconify:** [Roboticela Iconify](https://github.com/Roboticela/iconify) (desktop app)
- **This repo:** Web frontend and ICNS API for Iconify (proprietary)

---

**Built with ❤️ by [Roboticela](https://github.com/Roboticela)**

© Roboticela. All rights reserved.
