import type { Lang } from '../i18n';

// Texte affiché selon la langue de la page.
type Traduit = Record<Lang, string>;

export interface Temoignage {
  citation: Traduit;
  prenom: string;
  fonction: Traduit;
  secteur: Traduit;
}

// La section « Ils m'ont fait confiance » reste masquée tant que la liste
// est vide. N'y ajouter que des témoignages réels, avec l'accord du client.
export const TEMOIGNAGES: Temoignage[] = [];
