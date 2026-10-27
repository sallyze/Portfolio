export const languages = { en: 'English', it: 'Italiano' } as const;
export type Lang = keyof typeof languages;

/** Text that exists in both languages. */
export type Localized = Record<Lang, string>;

export const homePath: Record<Lang, string> = { en: '/', it: '/it/' };

// en-US keeps "Sep" (en-GB renders "Sept"), matching the PDF CV.
const dateLocale: Record<Lang, string> = { en: 'en-US', it: 'it-IT' };

const en = {
  'meta.title': 'Sally Mohammadzadeh — Computer Engineering Student, Applied AI and Data',
  'meta.description':
    'Computer Engineering student at Politecnico di Torino who builds AI and data projects: computer vision for the DIANA rover team (4th of 126 at ERC 2025) and data pipelines with Python, PostgreSQL and Docker.',
  'skip': 'Skip to content',
  'home': 'Back to the top of the page',
  'nav.label': 'Sections',
  'section.experience': 'Experience',
  'section.projects': 'Projects',
  'section.education': 'Education',
  'section.certifications': 'Certifications',
  'section.skills': 'Skills',
  'section.contact': 'Contact',
  'cv.download': 'Download CV',
  'cv.format': 'One-page PDF',
  'contact.links': 'Contact links',
  'theme.label': 'Theme',
  'theme.system': 'System',
  'theme.dark': 'Dark',
  'theme.light': 'Light',
  'present': 'Present',
  'expected': 'expected',
  'code': 'Code',
  'projects.more': 'More on GitHub',
  'coursework': 'Relevant coursework:',
  'skills.languages': 'Languages',
  'contact.lead': 'Open to internships in AI and data engineering.',
  'contact.email': 'Email',
  'contact.phone': 'Phone',
  'contact.website': 'Website',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',
  'copy.email': 'Copy email address',
  'copy.phone': 'Copy phone number',
  'copied': 'Copied to clipboard',
  'photo.alt': 'Portrait of Sally Mohammadzadeh',
  'newTab': '(opens in a new tab)',
  'backToTop': 'Back to top',
  'footer.built': 'Built with',
} as const;

export type UiKey = keyof typeof en;

const it: Record<UiKey, string> = {
  'meta.title': 'Sally Mohammadzadeh — Studentessa di Ingegneria Informatica, AI applicata e dati',
  'meta.description':
    'Studentessa di Ingegneria Informatica al Politecnico di Torino che sviluppa progetti di AI e dati: visione artificiale per il team rover DIANA (4º posto su 126 all’ERC 2025) e pipeline di dati con Python, PostgreSQL e Docker.',
  'skip': 'Vai al contenuto',
  'home': 'Torna all’inizio della pagina',
  'nav.label': 'Sezioni',
  'section.experience': 'Esperienza',
  'section.projects': 'Progetti',
  'section.education': 'Formazione',
  'section.certifications': 'Certificazioni',
  'section.skills': 'Competenze',
  'section.contact': 'Contatti',
  'cv.download': 'Scarica il CV',
  'cv.format': 'PDF di una pagina',
  'contact.links': 'Link di contatto',
  'theme.label': 'Tema',
  'theme.system': 'Sistema',
  'theme.dark': 'Scuro',
  'theme.light': 'Chiaro',
  'present': 'oggi',
  'expected': 'prevista',
  'code': 'Codice',
  'projects.more': 'Altro su GitHub',
  'coursework': 'Insegnamenti rilevanti:',
  'skills.languages': 'Lingue',
  'contact.lead': 'Disponibile per tirocini in AI e data engineering.',
  'contact.email': 'Email',
  'contact.phone': 'Telefono',
  'contact.website': 'Sito web',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',
  'copy.email': 'Copia l’indirizzo email',
  'copy.phone': 'Copia il numero di telefono',
  'copied': 'Copiato negli appunti',
  'photo.alt': 'Ritratto di Sally Mohammadzadeh',
  'newTab': '(si apre in una nuova scheda)',
  'backToTop': 'Torna su',
  'footer.built': 'Realizzato con',
};

const ui: Record<Lang, Record<UiKey, string>> = { en, it };

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key];
}

/** "2023-10" → "Oct 2023" / "ott 2023"; a bare year ("2023") stays as it is. */
export function formatMonth(isoMonth: string, lang: Lang) {
  const [year, month] = isoMonth.split('-').map(Number);
  if (!month) return String(year);
  return new Intl.DateTimeFormat(dateLocale[lang], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}
