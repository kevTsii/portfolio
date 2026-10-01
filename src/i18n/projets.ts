import { getCollection, type CollectionEntry } from 'astro:content';

import type { Lang } from './index';

export interface Projet {
  id: string;
  data: CollectionEntry<'projets'>['data'];
  // Entrée dont le corps Markdown est affiché (fiche traduite si elle existe).
  entry: CollectionEntry<'projets'> | CollectionEntry<'projetsEn'>;
}

export async function getProjets(lang: Lang): Promise<Projet[]> {
  const projets = await getCollection('projets');
  const traductions = lang === 'en' ? await getCollection('projetsEn') : [];

  return projets
    .map((p): Projet => {
      if (lang === 'fr') {
        return { id: p.id, data: p.data, entry: p };
      }
      const traduction = traductions.find((e) => e.id === p.id);
      if (!traduction) {
        console.warn(`[projets] ${p.id} : pas de en.md, texte français affiché`);

        return { id: p.id, data: p.data, entry: p };
      }
      const { galerieAlt, ...champs } = traduction.data;

      return {
        id: p.id,
        entry: traduction,
        data: {
          ...p.data,
          ...champs,
          galerie: p.data.galerie.map((g, i) => ({
            ...g,
            alt: galerieAlt?.[i] ?? g.alt,
          })),
        },
      };
    })
    .sort((a, b) => a.data.ordre - b.data.ordre);
}
