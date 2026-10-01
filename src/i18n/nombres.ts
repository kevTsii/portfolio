// Nombres en toutes lettres pour les textes qui citent le nombre de projets.
// Au-delà des listes, on retombe sur les chiffres.

const CARDINAUX_FR = [
  'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit',
  'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize',
  'dix-sept', 'dix-huit', 'dix-neuf', 'vingt',
];

const ORDINAUX_FR = [
  '', 'premier', 'deuxième', 'troisième', 'quatrième', 'cinquième',
  'sixième', 'septième', 'huitième', 'neuvième', 'dixième', 'onzième',
  'douzième', 'treizième', 'quatorzième', 'quinzième', 'seizième',
  'dix-septième', 'dix-huitième', 'dix-neuvième', 'vingtième',
  'vingt et unième',
];

const CARDINAUX_EN = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
];

const ORDINAUX_EN = [
  '', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
  'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth',
  'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth',
  'nineteenth', 'twentieth', 'twenty-first',
];

export function majuscule(texte: string): string {
  return texte.charAt(0).toUpperCase() + texte.slice(1);
}

export function cardinalFr(n: number): string {
  return CARDINAUX_FR[n] ?? String(n);
}

export function ordinalFr(n: number): string {
  return ORDINAUX_FR[n] ?? `${n}e`;
}

export function cardinalEn(n: number): string {
  return CARDINAUX_EN[n] ?? String(n);
}

export function ordinalEn(n: number): string {
  return ORDINAUX_EN[n] ?? `${n}th`;
}
