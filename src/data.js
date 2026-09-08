/**
 * All of the site's content. Every section reads from here, so editing this
 * file is enough to update the page — no component changes needed.
 *
 * `icon` keys must exist in the ICONS map at the bottom of components/Icons.jsx.
 */

/** Header and mobile menu links. `id` must match a section's id attribute. */
export const NAV = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Research', id: 'research' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' }
];

/** Counters in the About section. They animate from 0 up to `value`. */
export const STATS = [
  { value: 5, suffix: '+', label: 'Years of Biotechnology Education' },
  { value: 4, suffix: '', label: 'Laboratory & Research Experiences' },
  { value: 7, suffix: '', label: 'Certificates & Workshops' },
  { value: 3, suffix: '', label: 'Languages' }
];

export const EDUCATION = [
  {
    period: '2024 — 2026 · Constantine, DZ',
    badge: 'Graduated with distinction',
    title: "Master's in Microbial Biotechnology",
    school: 'National Higher School of Biotechnology – Taoufik Kheznadar',
    tags: [
      'Advanced Genetic Engineering',
      'Industrial Microbiology',
      'Bioprocess Scale-up',
      'Metabolic Engineering'
    ],
    note: 'Application of molecular tools and optimization strategies for microbial systems, reinforcing hands-on expertise in genetic manipulation and strain development.'
  },
  {
    period: '2021 — 2026 · Constantine, DZ',
    badge: '',
    title: 'State Engineer in Biotechnology',
    school: 'National Higher School of Biotechnology – Taoufik Kheznadar',
    tags: [
      'Bioprocess Engineering',
      'Bioreactor Design',
      'Transport Phenomena',
      'Unit Operations',
      'Aseptic Techniques',
      'Culture Media Formulation',
      'Upstream Processing Control',
      'Process Troubleshooting'
    ],
    note: ''
  }
];

export const SKILLS = [
  { icon: 'reactor', label: 'Bioreactor Operations' },
  { icon: 'chart', label: 'Bioprocess Optimization' },
  { icon: 'culture', label: 'Microbial Culture Techniques' },
  { icon: 'upstream', label: 'Upstream Processing' },
  { icon: 'downstream', label: 'Downstream Processing' },
  { icon: 'check', label: 'Quality Control' },
  { icon: 'shield', label: 'Quality Assurance' },
  { icon: 'wrench', label: 'Technical Troubleshooting' },
  { icon: 'peaks', label: 'Proteomics' },
  { icon: 'network', label: 'Molecular Biotechnology' },
  { icon: 'helix', label: 'Genetic Engineering' },
  { icon: 'flask', label: 'Pharmaceutical & Chemical Analysis' }
];

/** `tone` tints the badge: 'blue' for industry placements, 'green' for research. */
export const EXPERIENCE = [
  {
    icon: 'microscope',
    year: '2025',
    org: 'Pasteur Institute',
    kind: 'Professional Internship',
    tone: 'blue',
    detail: 'Quality Control (QC) & Microbiology'
  },
  {
    icon: 'testtube',
    year: '2023',
    org: 'isopharm',
    kind: 'Professional Internship',
    tone: 'blue',
    detail: 'Quality Control (QC) & Quality Assurance'
  },
  {
    icon: 'peaks',
    year: '2024',
    org: 'Biotechnology Research Center (CRBt)',
    kind: 'Research Internship',
    tone: 'green',
    detail: 'Proteomics & Advanced Biotechnology'
  },
  {
    icon: 'flask',
    year: '2024',
    org: 'Scientific Police Laboratories',
    kind: 'Certificate of Practical Training',
    tone: 'green',
    detail: 'Pharmaceutical & Chemical Analysis'
  }
];

/** The interactive flow in the Journey section, in order. */
export const STAGES = [
  {
    icon: 'culture',
    label: 'Microbial Culture',
    detail:
      'Growth of a selected microbial strain under controlled conditions to produce the working cell bank and inoculum.'
  },
  {
    icon: 'upstream',
    label: 'Upstream Processing',
    detail:
      'All steps preceding the main production run: media preparation, sterilisation, inoculum expansion and process setup.'
  },
  {
    icon: 'reactor',
    label: 'Bioreactor',
    detail:
      'The controlled vessel where cells are cultivated at scale, with regulation of temperature, pH, dissolved oxygen and agitation.'
  },
  {
    icon: 'downstream',
    label: 'Downstream Processing',
    detail:
      'Recovery of the target product from the culture broth through cell separation, lysis and initial concentration.'
  },
  {
    icon: 'purify',
    label: 'Purification',
    detail:
      'Removal of remaining impurities, typically by chromatography and filtration, until the product meets its specification.'
  },
  {
    icon: 'check',
    label: 'Quality Control',
    detail:
      'Analytical testing of identity, purity, potency and safety against defined acceptance criteria before release.'
  },
  {
    icon: 'product',
    label: 'Biopharmaceutical Product',
    detail:
      'The formulated, filled and released drug substance or drug product, documented for regulatory compliance.'
  }
];

export const CERTS = [
  { title: 'Downstream Processing (DSP) & Protein Purification', org: 'ENSB', year: '2026' },
  { title: 'Upstream Processing (USP) & Antibiotic Fermentation', org: 'ENSB', year: '2026' },
  { title: 'Molecular Docking & Computer-Aided Drug Design', org: 'ENSB', year: '2025' },
  { title: 'Quality Control (QC) & Microbiology', org: 'Pasteur Institute', year: '2025' },
  {
    title: 'Pharmaceutical & Chemical Analysis',
    org: 'Scientific Police Laboratories',
    year: '2024'
  },
  {
    title: 'Proteomics & Advanced Biotechnology',
    org: 'Biotechnology Research Center (CRBt)',
    year: '2024'
  },
  { title: 'Quality Control (QC) & Quality Assurance', org: 'isopharm', year: '2023' }
];

export const INTERESTS = [
  'Microbial Biotechnology',
  'Bioprocess Engineering',
  'Industrial Microbiology',
  'Upstream Processing',
  'Downstream Processing',
  'Genetic Engineering',
  'Protein Purification',
  'Pharmaceutical Biotechnology',
  'Proteomics',
  'Bioprocess Scale-up',
  'Quality Control & Quality Assurance',
  'Molecular Docking & Computer-Aided Drug Design'
];

/** `lang` and `dir` tell a screen reader how to pronounce the native name. */
export const LANGS = [
  { name: 'Arabic', native: 'العربية', code: 'AR', glyph: 'ع', lang: 'ar', dir: 'rtl' },
  { name: 'French', native: 'Français', code: 'FR', glyph: 'F', lang: 'fr', dir: 'ltr' },
  { name: 'English', native: 'English', code: 'EN', glyph: 'E', lang: 'en', dir: 'ltr' }
];

/** The featured panel in the Research section. */
export const RESEARCH = {
  title: 'Microbial Systems Optimization',
  summary:
    'Application of molecular tools and optimization strategies for microbial systems, with emphasis on genetic manipulation and strain development.',
  tags: ['Genetic Manipulation', 'Strain Development', 'Molecular Tools', 'Optimization']
};

export const EMAIL = 'mohcenmeradji@gmail.com';
export const PHONE = '+213 697 330 205';
export const PHONE_HREF = 'tel:+213697330205';
export const LINKEDIN = 'https://www.linkedin.com/in/mohcen-meradji-505653404/';
