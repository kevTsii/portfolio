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
    agences: 'Agencies',
    cta: 'Describe my project by email',
    themeClair: 'Switch to light mode',
    themeSombre: 'Switch to dark mode',
    theme: 'Change theme',
    menuOuvrir: 'Open menu',
    menuFermer: 'Close menu',
    langue: 'Lire en français',
  },
  footer: {
    role: 'Freelance developer',
    agences: 'Agencies and IT consultancies',
    linkedin: 'My LinkedIn profile',
    github: 'My GitHub profile',
  },
  contact: {
    email: 'Email',
    reponse: 'Reply',
    reponseDelai: 'Within 48 hours',
    lieu: 'Based in',
    lieuTexte: 'Antananarivo, working remotely',
    copier: 'Copy address',
    copie: 'Address copied',
    copieImpossible: 'Could not copy',
  },
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
    title: 'Kevin Tsiory Rakotosoa · Freelance PHP developer',
    description: 'Custom business software that is easy to use and '
      + 'reliable. Quotes, invoices, inventory, customer portals: one single '
      + 'contact, from the first email to go-live.',
    badge: 'Available for new projects',
    portraitAlt: 'Portrait of Kevin Tsiory Rakotosoa, freelance PHP '
      + 'developer',
    heroTitre: 'Custom business software,',
    mots: ['easy to use.', 'reliable.', 'built for your trade.'],
    motsLecteur: 'easy to use, reliable and built for your trade.',
    heroLead: 'Quotes, invoices, inventory, customer portals: I build the web '
      + 'tools your business needs, or bring the ones you already have back '
      + 'into shape. One single contact, from the first email to go-live.',
    ctaEmail: 'Describe my project by email',
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
        titre: 'You write to me',
        texte: 'Describe what you need in a few lines. I reply within 48 '
          + 'hours with my questions.',
      },
      {
        titre: 'I send a proposal',
        texte: 'A clear written proposal: what I will do, the price, the '
          + 'timeline.',
      },
      {
        titre: 'I build',
        texte: 'A written update every week. You test as we go.',
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
    temoignagesTitre: 'They trusted me',
    pourquoiTitre: 'Freelancer or agency?',
    pourquoiTexte: 'An agency makes sense for a large project that needs '
      + 'several kinds of expertise. For a well-scoped business tool, working '
      + 'directly with the person who builds it is often faster.',
    critere: 'Criterion',
    avecMoi: 'With me',
    avecAgence: 'With an agency',
    comparatif: [
      {
        critere: 'Your contact',
        moi: 'The person building the tool',
        agence: 'A team, often through a project manager',
      },
      {
        critere: 'Pricing',
        moi: 'Quoted per project, no middleman',
        agence: 'Includes the cost of the team and the company',
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
        reponse: 'It depends on the project. Once we have exchanged a few '
          + 'emails, I send you a written quote with a price and a timeline. '
          + 'You decide then, with no commitment.',
      },
      {
        question: 'I already have software. Do I need to start over?',
        reponse: 'Rarely. I first look at what can be kept. Taking over an '
          + 'existing tool is often cheaper and less risky.',
      },
      {
        question: 'You\'re based in Madagascar: how do we work together?',
        reponse: 'Remotely, by email. Everything is in writing, so nothing '
          + 'gets lost: what you need, the decisions we made, what was '
          + 'delivered. Madagascar is on UTC+3, only one or two hours ahead of '
          + 'Western Europe, so our working days overlap almost entirely.',
      },
      {
        question: 'What happens after go-live?',
        reponse: 'The tool belongs to you. I can handle maintenance and new '
          + 'features, or hand it over to someone else with full '
          + 'documentation.',
      },
    ],
    contactTitre: 'Write to me',
    contactTexte: 'Describe what you need in a few lines: what your business '
      + 'does, what is wasting your time, the tool you use today. I reply '
      + 'within 48 hours and tell you honestly whether I can help.',
    contactBouton: 'Describe my project by email',
    contactSujet: 'Project: [your company name]',
    contactCorps: [
      'Hello Kevin,',
      '',
      'My company:',
      'What I would like to improve:',
      'The tool I use today:',
      'Desired timeline:',
      '',
      'Thanks,',
    ].join('\n'),
  },
  realisations: {
    title: 'Projects · Kevin Tsiory Rakotosoa',
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
    ctaTexte: 'Describe what you need by email, I reply within 48 hours.',
  },
  agences: {
    title: 'Symfony support for agencies and IT consultancies · Kevin Tsiory '
      + 'Rakotosoa',
    description: 'Senior Symfony developer for subcontracted work, fixed-price '
      + 'and remote. APIs, SSO, RabbitMQ, version upgrades: I deliver in your '
      + 'repository, white-label.',
    surtitre: 'For agencies and IT consultancies',
    titre: 'A senior Symfony developer for when your team is at capacity.',
    lead: 'I take on a written scope, at a fixed price, remotely. You keep the '
      + 'relationship with your client; I deliver in your repository, '
      + 'following your conventions.',
    ctaPerimetre: 'Send a scope by email',
    ctaRealisations: 'See my projects',
    servicesTitre: 'What I can take on',
    services: [
      {
        titre: 'Symfony APIs and back offices',
        texte: 'REST APIs, back offices, customer portals. Hexagonal '
          + 'architecture when the project suits it, or in the style you '
          + 'already use.',
      },
      {
        titre: 'Authentication and SSO',
        texte: 'OAuth2, OpenID Connect, single sign-on across several '
          + 'applications.',
      },
      {
        titre: 'Asynchronous processing',
        texte: 'Message queues with RabbitMQ, imports, synchronizations and '
          + 'heavy jobs running in the background.',
      },
      {
        titre: 'Upgrades and legacy code',
        texte: 'Moving to recent versions of Symfony and PHP 8, with tests in '
          + 'place before touching existing code.',
      },
      {
        titre: 'Integrations',
        texte: 'Online payments (Stripe), ERP connectors, third-party '
          + 'services.',
      },
      {
        titre: 'Laravel too',
        texte: 'Laravel back offices with a Vue 3 front end.',
      },
    ],
    stackTitre: 'Stack',
    stack: [
      'PHP 8',
      'Symfony 3.4 to 7.4',
      'Laravel',
      'Doctrine',
      'MySQL',
      'PostgreSQL',
      'Docker',
      'RabbitMQ',
      'OAuth2 / OpenID Connect',
      'Stripe',
      'Vue 3',
      'Jenkins',
      'GitHub Actions',
      'Git',
    ],
    methodeTitre: 'How we work together',
    etapes: [
      {
        titre: 'You send me the scope',
        texte: 'The requirement, access to the repository or a code sample, '
          + 'the constraints and the delivery date.',
      },
      {
        titre: 'I reply within 48 hours',
        texte: 'With my questions, then a fixed-price quote: deliverables, '
          + 'price, timeline.',
      },
      {
        titre: 'I build in your repository',
        texte: 'On a dedicated branch, following your conventions. Readable '
          + 'merge requests, with tests for what I deliver.',
      },
      {
        titre: 'A written update every week',
        texte: 'What is done, what is left, what is blocking.',
      },
      {
        titre: 'Delivery with a technical note',
        texte: 'So your team can take over without me.',
      },
    ],
    methodeEcrit: 'Everything happens in writing, by email or in your '
      + 'tickets. You keep a record of every decision.',
    attentesTitre: 'What you can expect',
    attentes: [
      {
        titre: 'White label',
        texte: 'I do not contact your client unless you ask me to.',
      },
      {
        titre: 'Confidentiality',
        texte: 'I sign your non-disclosure agreement if needed.',
      },
      {
        titre: 'Time zone',
        texte: 'Antananarivo (UTC+3), one to two hours ahead of Paris.',
      },
      {
        titre: 'Fixed price only',
        texte: 'I work on scopes defined in writing, not as a full-time '
          + 'contractor billed by the day.',
      },
    ],
    projetsTitre: 'Projects close to what you deliver',
    projets: [
      {
        id: 'api-devis',
        titre: 'B2B API for a retail chain',
        angle: 'Symfony 7.4, hexagonal architecture, connectors to the '
          + 'chain\'s ERP.',
      },
      {
        id: 'certicpf',
        titre: 'Certi-CPF',
        angle: 'Symfony 6.4, multi-role portals, Stripe payments by card and '
          + 'direct debit.',
      },
      {
        id: 'toemm',
        titre: 'ToeMM back office',
        angle: 'Laravel, Vue 3, Clean Architecture.',
      },
    ],
    faqTitre: 'Questions from agencies',
    faqAutre: 'Another question?',
    faq: [
      {
        question: 'Can you work on site at our offices?',
        reponse: 'No, I work 100% remotely, from Antananarivo.',
      },
      {
        question: 'Do you use our tools?',
        reponse: 'Yes: your Git repository, your ticketing tool, your CI. I '
          + 'adapt to what is already in place.',
      },
      {
        question: 'What if the scope changes along the way?',
        reponse: 'I price the change in writing before doing it. You approve '
          + 'it, then I build it in.',
      },
      {
        question: 'What size of engagement?',
        reponse: 'Well-defined fixed-price work, from a few days to a few '
          + 'weeks.',
      },
    ],
    contactTitre: 'Send me your scope',
    contactTexte: 'A few lines are enough to get started: the project, the '
      + 'stack, what you want to hand over and by when. I reply within 48 '
      + 'hours.',
    contactBouton: 'Send a scope by email',
    contactSujet: 'Symfony support: [agency name]',
    contactCorps: [
      'Hello Kevin,',
      '',
      'Agency:',
      'Project and stack:',
      'What I would like to hand over:',
      'Desired delivery date:',
      '',
      'Thanks,',
    ].join('\n'),
  },
};
