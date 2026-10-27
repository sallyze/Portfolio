// All CV content lives here, in English and Italian.
// Source of truth: the two PDFs offered for download, public/Sally_Mohammadzadeh_CV.pdf
// and public/Sally_Mohammadzadeh_CV_IT.pdf; keep this text in step with them.
// Wrap `inline code` in backticks.
import type { Localized, UiKey } from '../i18n/ui';
import type { IconName } from '../components/icons';

export const person = {
  name: 'Sally Mohammadzadeh',
  // The downloadable PDF follows the page language.
  cvFile: { en: '/Sally_Mohammadzadeh_CV.pdf', it: '/Sally_Mohammadzadeh_CV_IT.pdf' } satisfies Localized,
  // Two lines on the page, split at " | ".
  tagline: {
    en: 'Computer Engineering Student | Applied AI and Data',
    it: 'Studentessa di Ingegneria Informatica | AI applicata e dati',
  },
  location: { en: 'Turin, Italy', it: 'Torino, Italia' },
  summary: {
    en: 'Computer Engineering student who builds AI and data projects, from computer vision to data pipelines. Passionate about AI and data engineering, with a particular interest in robotics and space technology.',
    it: 'Studentessa di Ingegneria Informatica con esperienza nello sviluppo di progetti di AI e gestione dei dati, dalla visione artificiale alle pipeline di dati. Appassionata di AI e ingegneria dei dati, con particolare interesse per la robotica e le tecnologie spaziali.',
  } satisfies Localized,
};

export interface Contact {
  id: 'email' | 'phone' | 'website' | 'github' | 'linkedin';
  label: UiKey;
  icon: IconName;
  href: string;
  display: string;
  /** Value put on the clipboard by the copy button, when there is one. */
  copy?: string;
  copyLabel?: UiKey;
}

export const contacts: Contact[] = [
  {
    id: 'email',
    label: 'contact.email',
    icon: 'mail',
    href: 'mailto:sallyze.dev@gmail.com',
    display: 'sallyze.dev@gmail.com',
    copy: 'sallyze.dev@gmail.com',
    copyLabel: 'copy.email',
  },
  {
    id: 'phone',
    label: 'contact.phone',
    icon: 'phone',
    href: 'tel:+393401962592',
    display: '+39 340 196 2592',
    copy: '+39 340 196 2592',
    copyLabel: 'copy.phone',
  },
  { id: 'website', label: 'contact.website', icon: 'globe', href: 'https://sallyze.dev', display: 'sallyze.dev' },
  { id: 'github', label: 'contact.github', icon: 'github', href: 'https://github.com/sallyze', display: 'github.com/sallyze' },
  {
    id: 'linkedin',
    label: 'contact.linkedin',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/sallyze',
    display: 'linkedin.com/in/sallyze',
  },
];

export const experience = [
  {
    role: { en: 'Applied AI Engineer', it: 'Sviluppatrice di AI applicata' } satisfies Localized,
    org: { en: 'DIANA Student Robotics Team', it: 'DIANA, team studentesco di robotica' } satisfies Localized,
    place: 'Politecnico di Torino',
    start: '2023-10',
    end: '2026-01',
    points: [
      {
        en: 'Built the computer vision pipeline for the rover’s object-detection task.',
        it: 'Sviluppata la pipeline di visione artificiale del rover per il rilevamento di oggetti.',
      },
      {
        en: 'Contributed to the team’s 4th place out of 126 at the European Rover Challenge (ERC) 2025.',
        it: 'Contributo al 4º posto su 126 ottenuto dal team all’European Rover Challenge (ERC) 2025.',
      },
      {
        en: 'Collected field images of the probe, annotated them in CVAT and applied data augmentation.',
        it: 'Raccolte sul campo immagini della sonda e annotate in CVAT, applicando tecniche di data augmentation.',
      },
      {
        en: 'Trained a YOLOv8 probe-detection model on the annotated dataset using PyTorch.',
        it: 'Addestrato un modello YOLOv8 per il rilevamento della sonda sul dataset annotato, usando PyTorch.',
      },
      {
        en: 'Built an inverse-kinematics simulation in MATLAB/Simulink for a 6-DoF arm used to collect detected probes.',
        it: 'Sviluppata una simulazione di cinematica inversa in MATLAB/Simulink per un braccio a 6 gradi di libertà destinato alla raccolta delle sonde rilevate.',
      },
    ] satisfies Localized[],
  },
];

export const projects = [
  {
    title: { en: 'SpaceX Launch Data Pipeline', it: 'Pipeline di dati sui lanci SpaceX' } satisfies Localized,
    kind: { en: 'Personal project', it: 'Progetto personale' } satisfies Localized,
    year: '2026',
    repo: 'https://github.com/sallyze/spacex-pipeline',
    points: [
      {
        en: 'Designed a 4-stage Python pipeline: collect, clean, store, display.',
        it: 'Progettata una pipeline Python in 4 fasi: raccolta, pulizia, archiviazione e visualizzazione.',
      },
      {
        en: 'Collected data from a public REST API and cleaned it with Pandas.',
        it: 'Raccolti dati da un’API REST pubblica ed eseguita la pulizia con Pandas.',
      },
      {
        en: 'Stored data on 205 launches in two PostgreSQL tables using SQLAlchemy.',
        it: 'Archiviati i dati di 205 lanci in due tabelle PostgreSQL tramite SQLAlchemy.',
      },
      {
        en: 'Ran the database using Docker Compose for a repeatable setup.',
        it: 'Avviato il database tramite Docker Compose per una configurazione riproducibile.',
      },
      {
        en: 'Built a Streamlit dashboard showing annual launch counts and successful launches from 2006 to 2022.',
        it: 'Creata una dashboard Streamlit con il numero annuo di lanci e di lanci riusciti dal 2006 al 2022.',
      },
    ] satisfies Localized[],
    stack: ['Python', 'Pandas', 'PostgreSQL', 'SQLAlchemy', 'Docker Compose', 'Streamlit', { en: 'REST API', it: 'API REST' }],
  },
  {
    title: {
      en: 'Triple DES (3DES) Encryption in Pure Python',
      it: 'Crittografia Triple DES (3DES) in Python puro',
    } satisfies Localized,
    kind: { en: 'University project', it: 'Progetto universitario' } satisfies Localized,
    year: '2025',
    repo: 'https://github.com/sallyze/cryptography-Triple-DES',
    points: [
      {
        en: 'Implemented 3DES encryption and decryption from scratch in Python, with no external libraries.',
        it: 'Implementate da zero la cifratura e la decifratura 3DES in Python, senza librerie esterne.',
      },
      {
        en: 'Implemented the S-boxes and Feistel network, added ECB mode, and wrote a technical report.',
        it: 'Implementate le S-box e la rete di Feistel, aggiunta la modalità ECB e redatta una relazione tecnica.',
      },
    ] satisfies Localized[],
    stack: ['Python', { en: 'Cryptography', it: 'Crittografia' } satisfies Localized],
  },
];

export const education: {
  degree: Localized;
  school: string;
  url?: string;
  place: Localized;
  /** "2022-09", or just "2023" when the CV gives only the year. Optional. */
  start?: string;
  end: string;
  expected?: boolean;
  coursework?: Localized;
  note?: Localized;
}[] = [
  {
    degree: { en: 'BSc in Computer Engineering', it: 'Laurea triennale in Ingegneria Informatica' },
    school: 'Politecnico di Torino',
    url: 'https://www.polito.it',
    place: { en: 'Turin, Italy', it: 'Torino, Italia' },
    start: '2022-09',
    end: '2027-09',
    expected: true,
    coursework: {
      en: 'Databases, Algorithms & Data Structures, Object-Oriented Programming, Computer Architecture, Cybersecurity, Computer Networks, Mathematics, Algebra',
      it: 'Basi di dati, Algoritmi e strutture dati, Programmazione orientata agli oggetti, Architettura dei calcolatori, Sicurezza informatica, Reti di calcolatori, Matematica, Algebra',
    },
  },
  {
    degree: { en: 'Diploma in Experimental Sciences', it: 'Diploma in Scienze Sperimentali' },
    school: 'NODET',
    place: { en: 'Merit-selective school', it: 'Scuola con selezione per merito' },
    end: '2023',
    note: {
      en: 'High school diploma · Grade: 19.67/20 (98.35%)',
      it: 'Diploma di scuola secondaria superiore · Voto: 19,67/20 (98,35%)',
    },
  },
];

export const certifications = [
  { name: 'Building with the Claude API', issuer: 'Anthropic', date: '2026-05' },
  { name: 'SpaceCert', issuer: 'European Space Foundation', date: '2025-09' },
  { name: 'ERC Space & Robotics Industry Standard', issuer: 'European Rover Challenge', date: '2024-09' },
];

export const skillGroups: { name: Localized; icon: IconName; items: (string | Localized)[] }[] = [
  {
    name: { en: 'Programming & Data', it: 'Programmazione e dati' },
    icon: 'code',
    items: ['Python', 'C', 'SQL', 'PostgreSQL', 'SQLAlchemy', 'MATLAB/Simulink'],
  },
  {
    name: { en: 'AI & Computer Vision', it: 'AI e visione artificiale' },
    icon: 'scan-eye',
    items: [{ en: 'Claude API', it: 'API di Claude' }, 'PyTorch', 'YOLOv8', 'OpenCV', 'NumPy', 'Pandas', 'CVAT'],
  },
  {
    name: { en: 'Tools', it: 'Strumenti' },
    icon: 'wrench',
    items: ['Docker', 'Streamlit', { en: 'REST APIs', it: 'API REST' }, 'Git/GitHub', 'Linux CLI', 'Word', 'Excel', 'PowerPoint'],
  },
];

export const spokenLanguages: { name: Localized; level: Localized }[] = [
  { name: { en: 'Italian', it: 'Italiano' }, level: { en: 'B1 – studying', it: 'B1 – in corso di studio' } },
  { name: { en: 'English', it: 'Inglese' }, level: { en: 'C1 – IELTS 7.0', it: 'C1 – IELTS 7.0' } },
  { name: { en: 'Persian', it: 'Persiano' }, level: { en: 'Native', it: 'Madrelingua' } },
  { name: { en: 'Azerbaijani', it: 'Azero' }, level: { en: 'C1', it: 'C1' } },
];
