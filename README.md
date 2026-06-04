# Sahihi Pools — Website

Marketing website for Sahihi Pools, a swimming pool construction and services company. Built with Vite, React, TypeScript and Tailwind CSS.

## Features
- Responsive marketing site with sections for Home, About, Services, Contact, Testimonials, and more.
- Components and UI primitives organized under `src/components` and `src/components/ui`.
- Modern toolchain: Vite, TypeScript, TailwindCSS, Framer Motion.

## Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

## Setup
1. Install dependencies:

```bash
npm install
# or
# yarn
```

2. Run the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Project Structure (high level)
- `src/` — Application source
  - `components/` — Reusable components and UI primitives
  - `pages/`, `sections/` — Page sections and views
  - `main.tsx`, `App.tsx` — App entry
- `public/` — Static assets (images, icons)
- `dist/` — Generated production build (do not edit)

## Scripts
Taken from `package.json`:

- `dev` — Starts Vite dev server
- `build` — TypeScript build and Vite production build
- `preview` — Preview production build locally
- `lint` — Run ESLint across the repo

## Notes
- After changing source files, run `npm run build` to regenerate the `dist/` bundle. I updated the author name in `src/sections/*`; to reflect that in `dist/`, rebuild the project.
- Tailwind configuration is in `tailwind.config.js` and PostCSS in `postcss.config.js`.

## Contributing
Feel free to open issues or submit pull requests for fixes and improvements.

## License
Specify your license here (e.g., MIT). If you want, I can add a `LICENSE` file.
