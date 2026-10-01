import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const SECTEURS = ['Commerce', 'Formation', 'Service public', 'Autres'] as const;

const projets = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projets' }),
  schema: ({ image }) => z.object({
    nom: z.string(),
    secteur: z.enum(SECTEURS),
    annee: z.number().int(),
    titre: z.string(),
    technologies: z.string(),
    // Ordre d'affichage : du plus parlant au moins parlant.
    ordre: z.number().int(),
    // Mis en avant dans « Quelques réalisations » sur l'accueil.
    vedette: z.boolean().default(false),
    // Variantes affichées sur l'accueil ; à défaut, secteur et texte du projet.
    etiquetteAccueil: z.string().optional(),
    resumeAccueil: z.string().optional(),
    // Phrase courte de la carte ; à défaut, le texte du projet.
    resume: z.string().optional(),
    // Détail affiché dans la modale, en plus du texte du projet.
    role: z.string().optional(),
    lien: z.url().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    // Captures supplémentaires, affichées sous l'image principale.
    galerie: z.array(z.object({
      image: image(),
      alt: z.string(),
    })).default([]),
  }).refine(
    (p) => !p.image || !!p.imageAlt,
    { message: 'imageAlt est obligatoire quand une image est fournie' },
  ),
});

export const collections = { projets };
