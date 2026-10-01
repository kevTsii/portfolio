export const SITE = {
  nom: 'Kevin Rakotosoa',
  nomComplet: 'Kevin Tsiory Rakotosoa',
  email: 'tsioryrakotosoa@gmail.com',
  // À remplacer par le lien Calendly ou Cal.com.
  reservationUrl:
    'mailto:tsioryrakotosoa@gmail.com?subject=Appel%20d%C3%A9couverte',
} as const;

export const NAV_LINKS = [
  { href: '/#services', label: 'Ce que je fais' },
  { href: '/#methode', label: 'Comment ça marche' },
  { href: '/realisations', label: 'Réalisations', page: 'realisations' },
  { href: '/#faq', label: 'Questions' },
] as const;
