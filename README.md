# uxhawk.com — Professional Portfolio

The UX portfolio of David Hawkins, rebuilt as a static site with [Astro](https://astro.build), TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com) — migrated from WordPress (Salient theme) and hosted for free on GitHub Pages at [uxhawk.com](https://uxhawk.com).

## Stack

- **Astro 7** — static site generation, content collections
- **TypeScript** (strict)
- **Tailwind CSS 4** + **shadcn/ui** (React islands for interactive pieces only)
- **Formspree** — contact form delivery (no server needed)
- **GitHub Actions → GitHub Pages** — build and deploy on every push to `main`

## Project structure

```
src/
├── content/
│   ├── projects/        # 12 case studies (Markdown + frontmatter: title, subtitle,
│   │                    #   order, date, tags, heroImage, thumbnail)
│   └── articles/        # 13 articles (title, description, date, categories,
│                        #   categoryPath, heroImage)
├── pages/
│   ├── index.astro              # Homepage
│   ├── contact.astro            # Contact form (Formspree)
│   ├── projects/index.astro     # Filterable project grid
│   ├── ux-projects/[slug].astro # Case study template (original WP URLs)
│   ├── blog/index.astro         # Articles listing
│   └── [category]/[slug].astro  # Article template (original WP URLs)
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── ProjectGrid.tsx  # React island: tag filtering + load more (hash-linkable, e.g. /projects/#ai)
│   ├── ContactForm.tsx  # React island: Formspree submission with status states
│   ├── MenuOverlay.tsx  # React island: full-screen navigation
│   └── *.astro          # Static components (Header, Footer, cards, breadcrumbs…)
├── layouts/Base.astro   # Shared shell + SEO meta
├── styles/global.css    # Tailwind theme: brand tokens, Open Sans, prose styles
└── site.config.ts       # Site metadata, nav, Formspree endpoint

public/
├── images/              # All migrated WordPress media (YYYY/MM/… structure preserved)
└── CNAME                # Custom domain for GitHub Pages
```

## Adding content

**New project:** create `src/content/projects/<slug>.md` with the frontmatter used by existing files. `order` controls listing position; the page publishes at `/projects/<slug>/`.

**New article:** create `src/content/articles/<slug>.md`. `categoryPath` sets the URL prefix — the page publishes at `/<categoryPath>/<slug>/`.

Put images in `public/images/` and reference them as `/images/...`.

## Local development

Requires Node 22+.

```sh
npm install
npm run dev       # dev server at localhost:4321
npm run build     # production build to dist/
npm run preview   # serve the production build
```

## One-time launch setup

1. **Formspree** — create a free form at [formspree.io](https://formspree.io) delivering to your email, then put the endpoint in `src/site.config.ts` (`formspreeEndpoint`).
2. **GitHub Pages** — in the repo: Settings → Pages → Source: **GitHub Actions**. Every push to `main` then deploys automatically.
3. **Custom domain** — Settings → Pages → Custom domain: `uxhawk.com` (the `public/CNAME` file keeps it set). At your DNS provider, point the apex domain at GitHub Pages with A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and optionally a `www` CNAME to `uxhawk.github.io`). Enable **Enforce HTTPS** once the certificate is issued.
