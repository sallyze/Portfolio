// All CV content lives here, in English and Italian.
// Source of truth: cv/Sally_Mohammadzadeh_CV.pdf. Wrap `inline code` in backticks.
import type { Localized, UiKey } from '../i18n/ui';
import type { IconName } from '../components/icons';

export const person = {
  name: 'Sally Mohammadzadeh',
  cvFile: '/Sally_Mohammadzadeh_CV.pdf',
  tagline: {
    en: 'Computer Engineering Student | AI & Data Engineering',
    it: 'Studio Ingegneria Informatica | AI & Data Engineering',
  },
  location: { en: 'Turin, Italy', it: 'Torino, Italia' },
  summary: {
    en: 'Computer Engineering student at Politecnico di Torino targeting AI and data engineering internships. Computer Vision Engineer on DIANA’s 4th-place team among 126 teams at ERC 2025. Built end-to-end machine learning and data systems with Python, YOLOv8, Docker, PostgreSQL, and Streamlit.',
    it: 'Frequento Ingegneria Informatica al Politecnico di Torino e cerco tirocini in AI e data engineering. Sono Computer Vision Engineer nel team DIANA, arrivato 4º su 126 squadre all’ERC 2025. Ho realizzato sistemi end-to-end di machine learning e di gestione dei dati con Python, YOLOv8, Docker, PostgreSQL e Streamlit.',
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
    href: 'https://www.linkedin.com/in/salmaze',
    display: 'linkedin.com/in/salmaze',
  },
];

export const experience = [
  {
    role: 'Computer Vision Engineer',
    org: { en: 'DIANA Student Robotics Team', it: 'DIANA, team studentesco di robotica' } satisfies Localized,
    place: 'Politecnico di Torino',
    start: '2023-10',
    end: null,
    points: [
      {
        en: 'Contributed computer vision work to DIANA’s 4th-place finish among 126 teams at the European Rover Challenge (ERC) 2025.',
        it: 'Ho contribuito con la computer vision al 4º posto di DIANA su 126 squadre alla European Rover Challenge (ERC) 2025.',
      },
      {
        en: 'Built a YOLOv8 object-detection pipeline for probe detection, covering field data collection, CVAT annotation and quality control, augmentation, model training in Python, and OpenCV-based development.',
        it: 'Ho realizzato una pipeline di object detection con YOLOv8 per il rilevamento delle sonde: raccolta dei dati sul campo, annotazione e controllo qualità con CVAT, data augmentation, addestramento del modello in Python e sviluppo con OpenCV.',
      },
      {
        en: 'Coordinated the computer vision workstream with mechanical and software subteams under competition deadlines.',
        it: 'Ho coordinato il lavoro di computer vision con i sottoteam di meccanica e software, rispettando le scadenze della competizione.',
      },
      {
        en: 'Learned MATLAB and Simulink independently to support inverse-kinematics simulation for the rover arm.',
        it: 'Ho imparato MATLAB e Simulink in autonomia per supportare la simulazione della cinematica inversa del braccio del rover.',
      },
    ] satisfies Localized[],
  },
];

export const projects = [
  {
    title: 'SpaceX Launch Data Pipeline',
    kind: { en: 'Personal project', it: 'Progetto personale' } satisfies Localized,
    year: '2026',
    repo: 'https://github.com/sallyze/spacex-pipeline',
    featured: true,
    points: [
      {
        en: 'Built a Dockerized 4-stage ETL pipeline that ingests 205 SpaceX launches from a REST API, transforms and aggregates data with Pandas, and persists results in two PostgreSQL 15 relational tables.',
        it: 'Ho realizzato una pipeline ETL in 4 fasi, containerizzata con Docker, che acquisisce 205 lanci SpaceX da una REST API, trasforma e aggrega i dati con Pandas e salva i risultati in due tabelle relazionali PostgreSQL 15.',
      },
      {
        en: 'Built a Streamlit dashboard that queries PostgreSQL directly for KPI metrics and yearly launch-success charts; the full stack starts with one `docker compose up` command.',
        it: 'Ho sviluppato una dashboard Streamlit che interroga direttamente PostgreSQL per KPI e grafici annuali sul successo dei lanci; l’intero stack si avvia con un solo comando `docker compose up`.',
      },
    ] satisfies Localized[],
    stack: ['Python', 'Pandas', 'PostgreSQL', 'Docker', 'Streamlit', 'REST API'],
  },
  {
    title: 'Triple Data Encryption Standard (3DES) Encryption',
    kind: { en: 'University project', it: 'Progetto universitario' } satisfies Localized,
    year: '2025',
    repo: 'https://github.com/sallyze/cryptography-Triple-DES',
    featured: false,
    points: [
      {
        en: 'Implemented 3DES encryption and decryption from scratch in pure Python without external libraries, including S-boxes, Feistel structure, initial/final permutations, and 48-round key scheduling across three keys.',
        it: 'Ho implementato da zero cifratura e decifratura 3DES in Python puro, senza librerie esterne: S-box, struttura di Feistel, permutazioni iniziale e finale e key scheduling a 48 round su tre chiavi.',
      },
      {
        en: 'Added ECB mode, optional PKCS-style padding, and a written technical report.',
        it: 'Ho aggiunto la modalità ECB, un padding opzionale in stile PKCS e una relazione tecnica scritta.',
      },
    ] satisfies Localized[],
    stack: ['Python', { en: 'Cryptography', it: 'Crittografia' } satisfies Localized],
  },
];

export const education = [
  {
    degree: {
      en: 'Bachelor’s Degree in Computer Engineering',
      it: 'Laurea triennale in Ingegneria Informatica',
    } satisfies Localized,
    school: 'Politecnico di Torino',
    url: 'https://www.polito.it',
    location: { en: 'Turin, Italy', it: 'Torino, Italia' } satisfies Localized,
    start: '2022-09',
    end: null,
    coursework: {
      en: 'Databases, Cybersecurity, Algorithms & Data Structures, OOP, Computer Architecture',
      it: 'Basi di dati, Cybersecurity, Algoritmi e strutture dati, Programmazione a oggetti, Architetture dei calcolatori',
    } satisfies Localized,
  },
];

export const certifications = [
  { name: 'Building with the Claude API', issuer: 'Anthropic', date: '2026-05' },
  { name: 'SpaceCert', issuer: 'European Space Foundation', date: '2025-09' },
  { name: 'ERC Space & Robotics Industry Standard', issuer: 'European Rover Challenge', date: '2024-09' },
];

export const skillGroups: { name: Localized; icon: IconName; items: (string | Localized)[] }[] = [
  {
    name: { en: 'Programming', it: 'Programmazione' },
    icon: 'code',
    items: ['Python', 'C', 'SQL', 'MATLAB'],
  },
  {
    name: { en: 'ML & Computer Vision', it: 'ML e Computer Vision' },
    icon: 'scan-eye',
    items: ['PyTorch', 'NumPy', 'Pandas', 'YOLOv8', 'OpenCV', 'CVAT'],
  },
  {
    name: { en: 'Data & Tools', it: 'Dati e strumenti' },
    icon: 'database',
    items: ['PostgreSQL', 'Docker', 'Streamlit', { en: 'REST APIs', it: 'REST API' }, 'Git', 'GitHub', 'Simulink'],
  },
];

export const spokenLanguages: { name: Localized; level: Localized }[] = [
  { name: { en: 'Persian', it: 'Persiano' }, level: { en: 'Native', it: 'Madrelingua' } },
  { name: { en: 'English', it: 'Inglese' }, level: { en: 'C1 – IELTS 7', it: 'C1 – IELTS 7' } },
  { name: { en: 'Azerbaijani', it: 'Azero' }, level: { en: 'C1', it: 'C1' } },
  { name: { en: 'Italian', it: 'Italiano' }, level: { en: 'A2 – learning', it: 'A2 – in apprendimento' } },
];
