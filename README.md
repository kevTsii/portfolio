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
- `src/content.config.ts` : schéma de la collection `projets`

## Ajouter une capture de projet

Déposer l'image dans le dossier du projet, puis décommenter dans sa fiche :

```yaml
image: ./capture.png
imageAlt: "Description de la capture"
```

Le build échoue si le fichier est introuvable ou si `imageAlt` manque.
