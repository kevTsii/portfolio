export const SITE = {
  nom: 'Kevin Tsiory Rakotosoa',
  nomComplet: 'Kevin Tsiory Rakotosoa',
  // Seule source de l'adresse affichée et des liens mailto.
  email: 'tsioryrakotosoa@gmail.com',
  // Liens du footer, masqués tant que l'URL est vide.
  // TODO : renseigner les URLs LinkedIn et GitHub.
  reseaux: {
    linkedin: '',
    github: '',
  },
} as const;

// Lien mailto vers SITE.email, avec un sujet et un corps pré-remplis.
export function mailto(sujet = '', corps = ''): string {
  const params = [
    sujet && `subject=${encodeURIComponent(sujet)}`,
    corps && `body=${encodeURIComponent(corps)}`,
  ].filter(Boolean);

  return `mailto:${SITE.email}`
    + (params.length ? `?${params.join('&')}` : '');
}
