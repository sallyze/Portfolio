// All CV content lives here, in English and Italian.
// Source of truth: cv/scannable/cv.typ (the PDF offered for download is
// cv/scannable/Sally_Mohammadzadeh_CV.pdf). Wrap `inline code` in backticks.
import type { Localized, UiKey } from '../i18n/ui';
import type { IconName } from '../components/icons';

export const person = {
  name: 'Sally Mohammadzadeh',
  cvFile: '/Sally_Mohammadzadeh_CV.pdf',
  // Two lines on the page, split at " | ".
  tagline: {
    en: 'Applied AI Engineer | Computer Engineering Student',
    it: 'Applied AI Engineer | Studio Ingegneria Informatica',
  },
  location: { en: 'Turin, Italy', it: 'Torino, Italia' },
  summary: {
    en: 'Applied AI engineer and co-lead of a 6-person computer vision subteam at DIANA, the Politecnico di Torino rover team (4th of 126, European Rover Challenge (ERC) 2025). Builds end-to-end pipelines in Python, from field-collected data to trained YOLOv8 models and Dockerized ETL on PostgreSQL. Computer Engineering student, graduating in September 2027.',
    it: 'Applied AI engineer e co-responsabile del sottoteam di computer vision (6 persone) di DIANA, il team rover del Politecnico di Torino (4º su 126 alla European Rover Challenge (ERC) 2025). Realizzo pipeline end-to-end in Python, dai dati raccolti sul campo ai modelli YOLOv8 addestrati, fino a pipeline ETL containerizzate con Docker su PostgreSQL. Studio Ingegneria Informatica, con laurea prevista a settembre 2027.',
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
    role: 'Applied AI Engineer, Computer Vision Co-Lead',
    org: { en: 'DIANA Student Robotics Team', it: 'DIANA, team studentesco di robotica' } satisfies Localized,
    place: 'Politecnico di Torino',
    start: '2023-10',
    end: null,
    points: [
      {
        en: '4th of 126 teams at ERC 2025: built the rover’s YOLOv8 probe-detection pipeline.',
        it: '4º su 126 squadre all’ERC 2025: ho realizzato la pipeline YOLOv8 per il rilevamento delle sonde del rover.',
      },
      {
        en: 'Selected YOLOv8, CVAT and OpenCV through AI-assisted research comparing detection and annotation tools.',
        it: 'Ho scelto YOLOv8, CVAT e OpenCV con una ricerca assistita dall’AI che ha messo a confronto strumenti di rilevamento e di annotazione.',
      },
      {
        en: 'Ran every stage: field data collection, CVAT annotation and quality control, augmentation, training.',
        it: 'Ho seguito ogni fase: raccolta dei dati sul campo, annotazione e controllo qualità con CVAT, data augmentation, addestramento.',
      },
      {
        en: 'Co-led the 6-person computer vision subteam, coordinating with mechanical and software subteams.',
        it: 'Ho co-guidato il sottoteam di computer vision (6 persone), coordinandomi con i sottoteam di meccanica e software.',
      },
      {
        en: 'Developed and coded the rover arm’s inverse-kinematics simulation in MATLAB/Simulink, both self-taught.',
        it: 'Ho sviluppato e programmato la simulazione della cinematica inversa del braccio del rover in MATLAB/Simulink, entrambi imparati in autonomia.',
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
        en: 'Engineered a Dockerized 4-stage ETL pipeline loading 205 SpaceX launches into two PostgreSQL 15 tables.',
        it: 'Ho progettato una pipeline ETL in 4 fasi, containerizzata con Docker, che carica 205 lanci SpaceX in due tabelle PostgreSQL 15.',
      },
      {
        en: 'Created a Streamlit dashboard with KPI metrics and yearly launch-success charts, queried from PostgreSQL.',
        it: 'Ho creato una dashboard Streamlit con KPI e grafici annuali sul successo dei lanci, con i dati letti da PostgreSQL.',
      },
      {
        en: 'Packaged the full stack to start with one command: `docker compose up`.',
        it: 'Ho reso l’intero stack avviabile con un solo comando: `docker compose up`.',
      },
    ] satisfies Localized[],
    stack: ['Python', 'Pandas', 'PostgreSQL', 'Docker', 'Streamlit', 'REST API'],
  },
  {
    title: 'Triple DES (3DES) Encryption in Pure Python',
    kind: { en: 'University project', it: 'Progetto universitario' } satisfies Localized,
    year: '2025',
    repo: 'https://github.com/sallyze/cryptography-Triple-DES',
    featured: false,
    points: [
      {
        en: 'Implemented 3DES encryption and decryption from scratch, with no external libraries.',
        it: 'Ho implementato da zero cifratura e decifratura 3DES, senza librerie esterne.',
      },
      {
        en: 'Coded each DES component by hand: S-boxes, Feistel network, permutations, 48-round key scheduling.',
        it: 'Ho scritto a mano ogni componente del DES: S-box, rete di Feistel, permutazioni, key scheduling a 48 round.',
      },
      {
        en: 'Added ECB mode and optional PKCS-style padding, and documented the design in a technical report.',
        it: 'Ho aggiunto la modalità ECB e un padding opzionale in stile PKCS, e ho documentato il progetto in una relazione tecnica.',
      },
    ] satisfies Localized[],
    stack: ['Python', { en: 'Cryptography', it: 'Crittografia' } satisfies Localized],
  },
];

export const education = [
  {
    degree: {
      en: 'BSc in Computer Engineering',
      it: 'Laurea triennale in Ingegneria Informatica',
    } satisfies Localized,
    school: 'Politecnico di Torino',
    url: 'https://www.polito.it',
    location: { en: 'Turin, Italy', it: 'Torino, Italia' } satisfies Localized,
    start: '2022-09',
    end: '2027-09',
    expected: true,
    coursework: {
      en: 'Databases, Algorithms & Data Structures, Object-Oriented Programming, Computer Architecture, Cybersecurity',
      it: 'Basi di dati, Algoritmi e strutture dati, Programmazione a oggetti, Architetture dei calcolatori, Cybersecurity',
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
    items: ['Python', 'C', 'SQL', 'MATLAB/Simulink'],
  },
  {
    name: { en: 'ML & Computer Vision', it: 'ML e Computer Vision' },
    icon: 'scan-eye',
    items: ['PyTorch', 'YOLOv8', 'OpenCV', 'NumPy', 'Pandas', 'CVAT'],
  },
  {
    name: { en: 'Data & Tools', it: 'Dati e strumenti' },
    icon: 'database',
    items: ['PostgreSQL', 'Docker', 'Streamlit', { en: 'REST APIs', it: 'REST API' }, 'Git/GitHub'],
  },
];

export const spokenLanguages: { name: Localized; level: Localized }[] = [
  { name: { en: 'Italian', it: 'Italiano' }, level: { en: 'A2 – studying', it: 'A2 – in apprendimento' } },
  { name: { en: 'English', it: 'Inglese' }, level: { en: 'C1 – IELTS 7.0', it: 'C1 – IELTS 7.0' } },
  { name: { en: 'Persian', it: 'Persiano' }, level: { en: 'Native', it: 'Madrelingua' } },
  { name: { en: 'Azerbaijani', it: 'Azero' }, level: { en: 'C1', it: 'C1' } },
];
