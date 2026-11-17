# Carlton City Cleaning

Website for Carlton City Cleaning Inc.

Stack: Next.js 16.4.5 (App Router, TypeScript), Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Brand

Brand tokens live in `src/app/globals.css` (`@theme`) and are available as Tailwind utilities, e.g. `bg-navy`, `text-blue`, `bg-sunbeam`.

| Token     | Name        | Hex       | Use                  |
|-----------|-------------|-----------|----------------------|
| `navy`    | Harbor Navy | `#0E2A47` | Primary              |
| `blue`    | Clear Blue  | `#1E6FD9` | Secondary            |
| `sunbeam` | Sunbeam     | `#FFC233` | Accent (fill only)   |
| `sky`     | Sky Wash    | `#D9ECFF` | Tint (fill only)     |
| `ink`     | Ink Slate   | `#14202E` | Body text            |
| `steel`   | Steel       | `#5B6B7C` | Muted text           |
| `mist`    | Mist        | `#F3F6FA` | Light surface        |

Typeface: Montserrat (via `next/font/google`).

Logos (Ripple C) are in `public/brand/`: `logo-primary`, `logo-primary-reverse` (for dark backgrounds), `logo-legal-inc`, `logo-legal-inc-reverse`, `logo-stacked`, `mark`, `app-icon`, `app-icon-light`. The favicon is `src/app/icon.svg`.
