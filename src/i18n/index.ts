import { en } from './en';
import { fr, type Dictionnaire } from './fr';

export type Lang = 'fr' | 'en';
export type Page = 'accueil' | 'realisations' | 'agences';

const DICTIONNAIRES: Record<Lang, Dictionnaire> = { fr, en };

// Le français est à la racine, l'anglais sous /en/ (voir astro.config.mjs).
export const CHEMINS: Record<Lang, Record<Page, string>> = {
  fr: { accueil: '/', realisations: '/realisations', agences: '/agences' },
  en: {
    accueil: '/en/',
    realisations: '/en/projects',
    agences: '/en/agencies',
  },
};

export function t(lang: Lang): Dictionnaire {
  return DICTIONNAIRES[lang];
}

export function chemin(lang: Lang, page: Page, ancre = ''): string {
  return CHEMINS[lang][page] + (ancre ? `#${ancre}` : '');
}

export function autreLangue(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}
