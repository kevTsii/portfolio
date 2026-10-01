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
dans l'autre langue, sans rechargement et à la même position.

- Textes de l'interface : `src/i18n/fr.ts` et `src/i18n/en.ts` (même forme,
  vérifiée par TypeScript).
- Projets : `en.md` ne contient que les champs traduits et la description ;
  le reste vient de `index.md` (voir « Ajouter un projet »).

## Ajouter un projet

Un projet est un dossier dans `src/content/projets/`. Son nom (minuscules et
tirets, sans espaces ni accents) sert d'identifiant et d'adresse de la modale
(`/realisations#mon-projet`).

```
src/content/projets/mon-projet/
  index.md      fiche française (obligatoire)
  en.md         traduction anglaise (sinon, le français s'affiche en anglais)
  capture.png   image principale (facultative)
  02-ecran.png  captures supplémentaires (facultatives)
```

### `index.md`

```yaml
---
nom: "Mon projet"                  # au-dessus du titre et en bas de la carte
secteur: "Commerce"                # Commerce, Formation, Service public, Autres
annee: 2026                        # année affichée sur la carte
titre: "Titre du projet"
resume: "Une phrase courte pour la carte."
periode: "janv. 2026 - aujourd'hui · Freelance"
competences:                       # tags de la modale
  - "PHP 8.4"
  - "Symfony 7.4"
technologies: "Symfony 7.4, API Platform"  # version courte, bas de la carte
ordre: 10                          # position dans la liste (1 = en premier)
vedette: false                     # true : parmi les projets de l'accueil
role: "Développeur backend"        # facultatif
lien: "https://exemple.com/"       # facultatif : « Copier le lien », « Voir le site »
image: ./capture.png               # facultatif : sinon, nom sur fond quadrillé
imageAlt: "Description de l'image" # obligatoire avec une image
galerie:                           # facultatif
  - image: ./02-ecran.png
    alt: "Description de la capture"
---

Description complète affichée dans la modale.

Plusieurs paragraphes possibles, séparés par une ligne vide.
```

Champs d'accueil facultatifs : `etiquetteAccueil` remplace le secteur et
`resumeAccueil` remplace `resume` sur les cartes de la page d'accueil.

### `en.md`

Seulement les champs à traduire ; l'année, l'ordre, les images et le lien
viennent de `index.md`.

```yaml
---
titre: "Project title"             # obligatoire
resume: "One short sentence for the card."
periode: "Jan. 2026 - present · Freelance"
competences:
  - "PHP 8.4"
  - "Symfony 7.4"
role: "Backend developer"
imageAlt: "Image description"
galerieAlt:                        # même ordre que la galerie de index.md
  - "Screenshot description"
nom: "My project"                  # seulement si le nom se traduit
---

Full description shown in the modal.
```

### Images

- PNG, JPG ou WebP. Astro les optimise au build : inutile de les compresser.
- Image principale au format paysage : la carte n'en montre qu'un bandeau de
  190 px, recadré depuis le coin supérieur gauche.
- Au moins 1600 px de large pour rester nette dans la modale.
- Flouter ou retirer les noms de clients et les données réelles.

### Vérifier

- `npx astro check` signale un champ manquant ou invalide (secteur inconnu,
  image introuvable, `imageAlt` absent, etc.).
- Ouvrir `/realisations#mon-projet` et `/en/projects#mon-projet`.

Deux numéros `ordre` identiques donnent un ordre imprévisible : pour insérer
un projet, décaler les suivants. Les textes qui citent le nombre de projets
(« Neuf outils… », « le dixième ») s'adaptent seuls.
