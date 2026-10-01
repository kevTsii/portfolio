# Portfolio de Kevin Rakotosoa

Site statique construit avec [Astro](https://astro.build), à partir du brief
`../portfolio-design-brief` (design system « Industry »).

## Commandes

| Commande          | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Installe les dépendances                 |
| `npm run dev`     | Serveur de dev sur `localhost:4321`      |
| `npm run build`   | Génère le site statique dans `./dist/`   |
| `npm run preview` | Prévisualise le build                    |

## Structure

- `src/styles/industry.css` : design system (tokens, `.blueprint`, `.duotone`, etc.)
- `src/styles/theme.css` : mode sombre et surcharges du portfolio
- `src/layouts/BaseLayout.astro` : layout commun, script anti-flash du thème
- `src/content/projets/<slug>/index.md` : une fiche par projet
- `src/content/projets/<slug>/en.md` : traduction anglaise de la fiche
- `src/content.config.ts` : schéma des collections `projets` et `projetsEn`
- `src/i18n/` : textes de l'interface (`fr.ts`, `en.ts`) et chemins par langue
- `src/views/` : pages partagées par les deux langues, appelées depuis `src/pages/`

## Langues

Le français est à la racine (`/`, `/realisations`), l'anglais sous `/en/`
(`/en/`, `/en/projects`). Le bouton FR/EN de l'en-tête mène à la même page
dans l'autre langue.

- Textes de l'interface : `src/i18n/fr.ts` et `src/i18n/en.ts` (même forme,
  vérifiée par TypeScript).
- Projets : `en.md` ne contient que les champs traduits (`titre`, `resume`,
  `role`, `technologies`, `imageAlt`, `galerieAlt`, etc.) et la description ;
  le reste vient de `index.md`. Sans `en.md`, le texte français est affiché.

## Ajouter une capture de projet

Déposer l'image dans le dossier du projet, puis décommenter dans sa fiche :

```yaml
image: ./capture.png
imageAlt: "Description de la capture"
```

Le build échoue si le fichier est introuvable ou si `imageAlt` manque.
