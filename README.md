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
