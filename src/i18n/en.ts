import type { Dictionnaire } from './fr';
import { cardinalEn, majuscule, ordinalEn } from './nombres';

export const en: Dictionnaire = {
  layout: {
    skipLink: 'Skip to content',
  },
  nav: {
    label: 'Main navigation',
    services: 'What I do',
    methode: 'How it works',
    realisations: 'Projects',
    faq: 'FAQ',
    cta: 'Let\'s talk about your project',
    themeClair: 'Switch to light mode',
    themeSombre: 'Switch to dark mode',
    theme: 'Change theme',
    menuOuvrir: 'Open menu',
    menuFermer: 'Close menu',
    langue: 'Lire en français',
  },
  footer: {
    role: 'Freelance developer',
  },
  reservation: 'Book my free call',
  secteurs: {
    'Commerce': 'Retail',
    'Formation': 'Training',
    'Service public': 'Public sector',
    'Autres': 'Other',
  },
  projet: {
    voirDetail: 'View details',
    role: 'My role.',
    description: 'The project.',
    technologies: 'Technologies',
    copier: 'Copy link',
    copie: 'Link copied',
    copieImpossible: 'Could not copy',
    fermer: 'Close',
    voirSite: 'Visit the site',
  },
  accueil: {
    title: 'Kevin Rakotosoa · Freelance PHP developer',
    description: 'Custom business software that is easy to use and '
      + 'reliable. Quotes, invoices, inventory, customer portals: one single '
      + 'contact, from the first call to go-live.',
    badge: 'Available for new projects',
    heroTitre: 'Custom business software,',
    mots: ['easy to use.', 'reliable.', 'built for your trade.'],
    motsLecteur: 'easy to use, reliable and built for your trade.',
    heroLead: 'Quotes, invoices, inventory, customer portals: I build the web '
      + 'tools your business needs, or bring the ones you already have back '
      + 'into shape. One single contact, from the first call to go-live.',
    ctaAppel: 'Book a free 30-min call',
    ctaRealisations: 'See my work',
    statExperience: ['5 years', 'of experience'],
    statOutils: ['tools', 'in use by clients'],
    statInterlocuteur: ['1 single', 'contact'],
    servicesTitre: 'Sound familiar?',
    servicesIntro: 'Three situations I often come across, and what I do about '
      + 'them.',
    guillemets: ['“', '”'],
    situations: [
      {
        citation: 'Our software is old, slow, and nobody dares to touch it.',
        titre: 'I bring it up to date without breaking anything',
        texte: 'I move in small steps and check every time that everything '
          + 'still works. You keep working in the meantime.',
      },
      {
        citation: 'We type the same information into three different tools.',
        titre: 'I connect your tools together',
        texte: 'Accounting, online payments, management software: data flows '
          + 'on its own, with no double entry.',
      },
      {
        citation: 'Nothing on the market really does what we need.',
        titre: 'I build your tool from scratch',
        texte: 'From idea to live tool: back office, customer portal, '
          + 'invoicing, shaped around the way you work.',
      },
    ],
    methodeTitre: 'How it works',
    methodeIntro: 'No technical background needed. You explain your business, '
      + 'I take care of the rest and keep you posted.',
    etape: 'Step {n}: ',
    etapes: [
      {
        titre: 'We talk',
        texte: 'A free 30-minute call to understand what you need.',
      },
      {
        titre: 'I send a proposal',
        texte: 'A clear written proposal: what I will do, the price, the '
          + 'timeline.',
      },
      {
        titre: 'I build',
        texte: 'A check-in every week. You test as we go.',
      },
      {
        titre: 'We go live',
        texte: 'The tool is yours, with its documentation. I can then handle '
          + 'maintenance.',
      },
    ],
    projetsTitre: 'Selected work',
    projetsIntro: 'Tools used every day by businesses and public services.',
    projetsTous: (n: number) => `See all ${n} projects →`,
    pourquoiTitre: 'Why a freelancer rather than an agency?',
    pourquoiTexte: 'You talk directly to the person building your tool. '
      + 'Nothing gets lost along the way.',
    critere: 'Criterion',
    avecMoi: 'With me',
    avecAgence: 'With an agency',
    comparatif: [
      {
        critere: 'Your contact',
        moi: 'The person building the tool',
        agence: 'A salesperson, then a project manager',
      },
      {
        critere: 'Pricing',
        moi: 'Quoted per project, no middleman',
        agence: 'Overhead included',
      },
      {
        critere: 'Your current tool',
        moi: 'I take it over if it can be saved',
        agence: 'Often a full rewrite',
      },
      {
        critere: 'At the end',
        moi: 'You own everything, with documentation',
        agence: 'Depends on the contract',
      },
    ],
    faqTitre: 'Your questions',
    faqAutre: 'Another question?',
    faqEcrire: 'Write to me',
    faqDelai: ', I reply within 48 hours.',
    faq: [
      {
        question: 'I\'m not technical at all. Is that a problem?',
        reponse: 'No. You know your business, and that is what matters. I ask '
          + 'the right questions and explain my choices without jargon.',
      },
      {
        question: 'How much does it cost?',
        reponse: 'It depends on the project. After our call, I send you a '
          + 'written quote with a price and a timeline. You decide then, with '
          + 'no commitment.',
      },
      {
        question: 'I already have software. Do I need to start over?',
        reponse: 'Rarely. I first look at what can be kept. Taking over an '
          + 'existing tool is often cheaper and less risky.',
      },
      {
        question: 'You\'re based in Madagascar: how do we work together?',
        reponse: 'Remotely, over video calls and in writing. Madagascar is on '
          + 'UTC+3, only one or two hours ahead of Western Europe, so our '
          + 'working days overlap almost entirely.',
      },
      {
        question: 'What happens after go-live?',
        reponse: 'The tool belongs to you. I can handle maintenance and new '
          + 'features, or hand it over to someone else with full '
          + 'documentation.',
      },
    ],
    contactTitre: 'Let\'s talk about your project',
    contactTexte: '30 minutes, free of charge, to understand what you need. '
      + 'I will tell you honestly whether I can help.',
    contactEmail: 'Email',
    contactReponse: 'Reply',
    contactReponseDelai: 'Within 48 hours',
    contactLieu: 'Based in',
    contactLieuTexte: 'Antananarivo, working remotely',
  },
  realisations: {
    title: 'Projects · Kevin Rakotosoa',
    description: (n: number) => `${majuscule(cardinalEn(n))} tools built or `
      + 'taken over for businesses, non-profits and public services: retail, '
      + 'training, public sector.',
    retour: '← Back to home',
    titre: 'All my projects',
    intro: (n: number) => `${majuscule(cardinalEn(n))} tools built or taken `
      + 'over for businesses, non-profits and public services. All of them '
      + 'are in use today.',
    filtres: 'Filter by sector',
    tous: 'All',
    affiche: '{n} project shown',
    affiches: '{n} projects shown',
    ctaTitre: (n: number) => `Your project could be the ${ordinalEn(n + 1)}`,
    ctaTexte: 'A free 30-minute call to talk it through.',
  },
};
