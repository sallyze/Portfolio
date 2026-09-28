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
| CV text, both languages | `src/data/cv.ts` |
| Interface labels (nav, buttons, menus) | `src/i18n/ui.ts` |
| Profile photo | `src/assets/sally.jpeg` |
| Downloadable CV | `public/Sally_Mohammadzadeh_CV.pdf` (keep the name, or change `person.cvFile`) |
| Palettes, type, shared styles | `src/styles/global.css` |

The Italian copy uses gender-neutral phrasing ("Studio Ingegneria Informatica"); change it in `src/data/cv.ts` if you prefer "Studentessa".

## Themes

The theme menu offers both source themes' palettes:

- **Light:** Clean White, Warm Paper (Minrock), Scholar Light
- **Dark:** Slate Navy, Midnight OLED (Minrock), Scholar Night
- **System Auto** (default): Scholar Light or Night, following the OS

The choice is stored in `localStorage` under `theme`.

## Credits

The design combines two open-source Astro themes, and some styles, markup patterns and icons are adapted from them:

- Section styling, timeline, project rows, tech-stack cards: [Astro Scholar](https://github.com/mychiffonn/myscholar) by My (Chiffon) Nguyen, Apache-2.0 — [`licenses/astro-scholar-Apache-2.0.txt`](licenses/astro-scholar-Apache-2.0.txt)
- Typography, top bar, dropdown menus, footer: [Minrock](https://github.com/rnt-rez/minrock) by Renato Rezende, MIT — [`licenses/minrock-MIT.txt`](licenses/minrock-MIT.txt)
- Stroke icons follow [Lucide](https://lucide.dev) (ISC).
