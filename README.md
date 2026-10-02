# sallyze.dev — CV website

Bilingual (English / Italian) CV site for Sally Mohammadzadeh, built with [Astro](https://astro.build) as a fully static site.

- English: `/` · Italian: `/it/`
- Downloadable CV: `/Sally_Mohammadzadeh_CV.pdf`

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/ locally
npm run check    # type-check
```

## Deploy (Cloudflare, free tier)

The site is fully static: `npm run build` writes everything to `dist/`, and no server code runs, so every request is free and unmetered. Keep it that way: an SSR adapter, server endpoints, a `main` script in `wrangler.jsonc` or a Pages `functions/` folder would turn page views into metered Worker requests (100,000 a day on the free plan).

**Workers static assets** (Cloudflare's recommendation for new projects): `wrangler.jsonc` is ready.

```sh
npm ci && npm run build
npx wrangler@4.146.0 deploy    # asks you to log in to Cloudflare the first time
```

Or connect the Git repository: Workers & Pages → Create application → Import a repository. Name the Worker **`sallyze-cv`** (it must match `name` in `wrangler.jsonc`, or the build fails), with build command `npm run build` and deploy command `npx wrangler@4.146.0 deploy`.

**Pages**: connect the repository with build command `npm run build` and output directory `dist`. Pages warns that it ignores `wrangler.jsonc`, then carries on.

Either way:
- `.node-version` pins Node 22.23.2 for the build. The dependencies need 22.19 or newer.
- `public/_headers` sets long caching for the hashed files in `/_astro/` and a few security headers.
- `src/pages/404.astro` becomes `404.html`. Without it, Pages would answer every unknown URL with the home page.

### Moving sallyze.dev over

`sallyze.dev` already serves an older site from GitHub Pages through Cloudflare's proxy, and `site` in `astro.config.mjs` (canonical links, hreflang) points there. So switching the domain is a production change:

1. Deploy to the default hostname first (`*.workers.dev` or `*.pages.dev`) and check it: `/it` redirects to `/it/`, `/nope` returns 404, and `/_astro/*` responses are `immutable`.
2. Export the zone's DNS records (dashboard → DNS → Records → Export). That export is the rollback.
3. Point the domain at the new site in the dashboard:
   - **Workers:** a Route `sallyze.dev/*` → `sallyze-cv` uses the existing proxied record, so DNS doesn't change and rollback is removing the route. Try it on a throwaway subdomain first, because Cloudflare doesn't document routes for asset-only Workers. Or add a Custom Domain, which replaces the apex record.
   - **Pages:** use the project's Custom domains tab.
4. `www.sallyze.dev` works today only through GitHub's redirect. Before turning off the GitHub Pages site, add a Single Redirect rule from `www.sallyze.dev/*` to `https://sallyze.dev/${1}` (301).
5. Afterwards, hide the default hostname: `"workers_dev": false` in `wrangler.jsonc`, or for Pages an `X-Robots-Tag: noindex` rule for `https://:project.pages.dev/*` in `_headers`.

## Edit content

| What | Where |
| --- | --- |
| CV text, both languages | `src/data/cv.ts` (mirrors `cv/scannable/cv.typ`) |
| Interface labels (nav, buttons, menus) | `src/i18n/ui.ts` |
| Profile photo | `src/assets/sally.jpeg` |
| Downloadable CV | `public/Sally_Mohammadzadeh_CV.pdf`, a copy of `cv/scannable/Sally_Mohammadzadeh_CV.pdf` (keep the name, or change `person.cvFile`) |
| Palettes, type, shared styles | `src/styles/global.css` |

The Italian copy uses gender-neutral phrasing ("Studio Ingegneria Informatica"); change it in `src/data/cv.ts` if you prefer "Studentessa".

## Themes

The theme button in the top bar cycles **System → Dark → Light**:

- **Light:** Warm Paper (from Minrock)
- **Dark:** Scholar Night (from Astro Scholar)
- **System** (default) follows the OS setting

The choice is stored in `localStorage` under `theme`. Both palettes live at the top of `src/styles/global.css`; the logo's star colour is `--logo-star`.

## Credits

The design combines two open-source Astro themes, and some styles, markup patterns and icons are adapted from them:

- Section styling, timeline, project rows, tech-stack cards: [Astro Scholar](https://github.com/mychiffonn/myscholar) by My (Chiffon) Nguyen, Apache-2.0 — [`licenses/astro-scholar-Apache-2.0.txt`](licenses/astro-scholar-Apache-2.0.txt)
- Typography, top bar, dropdown menus, footer: [Minrock](https://github.com/rnt-rez/minrock) by Renato Rezende, MIT — [`licenses/minrock-MIT.txt`](licenses/minrock-MIT.txt)
- Stroke icons follow [Lucide](https://lucide.dev) (ISC).
