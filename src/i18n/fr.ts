// Textes de l'interface en français. en.ts doit reprendre la même forme.

import { cardinalFr, majuscule, ordinalFr } from './nombres';

export const fr = {
  layout: {
    skipLink: 'Aller au contenu',
  },
  nav: {
    label: 'Navigation principale',
    services: 'Ce que je fais',
    methode: 'Comment ça marche',
    realisations: 'Réalisations',
    faq: 'Questions',
    agences: 'Vous êtes une agence ?',
    cta: 'Décrire mon projet par e-mail',
    themeClair: 'Passer en mode clair',
    themeSombre: 'Passer en mode sombre',
    theme: 'Changer de thème',
    menuOuvrir: 'Ouvrir le menu',
    menuFermer: 'Fermer le menu',
    // Libellé du bouton qui mène à la version dans l'autre langue.
    langue: 'Read in English',
  },
  footer: {
    role: 'Développeur indépendant',
    agences: 'Agences et ESN',
    linkedin: 'Mon profil LinkedIn',
    github: 'Mon profil GitHub',
  },
  contact: {
    email: 'E-mail',
    reponse: 'Réponse',
    reponseDelai: 'Sous 24 heures',
    lieu: 'Basé à',
    lieuTexte: 'Antananarivo, je travaille à distance',
    copier: 'Copier l\'adresse',
    copie: 'Adresse copiée',
    copieImpossible: 'Copie impossible',
  },
  secteurs: {
    'Commerce': 'Commerce',
    'Formation': 'Formation',
    'Service public': 'Service public',
    'Autres': 'Autres',
  },
  projet: {
    voirDetail: 'Voir le détail',
    role: 'Mon rôle.',
    description: 'Le projet.',
    technologies: 'Technologies',
    copier: 'Copier le lien',
    copie: 'Lien copié',
    copieImpossible: 'Copie impossible',
    fermer: 'Fermer',
    voirSite: 'Voir le site',
  },
  accueil: {
    title: 'Kevin Tsiory Rakotosoa · Développeur PHP indépendant',
    description: 'Des logiciels de gestion sur mesure, simples à utiliser et '
      + 'fiables. Devis, factures, stocks, espace client : un seul '
      + 'interlocuteur, du premier échange à la mise en ligne.',
    badge: 'Disponible pour de nouveaux projets',
    portraitAlt: 'Portrait de Kevin Tsiory Rakotosoa, développeur PHP '
      + 'indépendant',
    heroTitre: 'Des logiciels de gestion sur mesure,',
    mots: ['simples à utiliser.', 'fiables.', 'faits pour votre métier.'],
    motsLecteur: 'simples à utiliser, fiables et faits pour votre métier.',
    heroLead: 'Devis, factures, stocks, espace client : je crée les outils web '
      + 'dont votre entreprise a besoin, ou je remets en forme ceux que vous '
      + 'avez déjà. Un seul interlocuteur, du premier échange à la mise en '
      + 'ligne.',
    ctaEmail: 'Décrire mon projet par e-mail',
    ctaRealisations: 'Voir mes réalisations',
    statExperience: ['5 ans', 'd\'expérience'],
    statOutils: ['outils', 'en service chez des clients'],
    statInterlocuteur: ['1 seul', 'interlocuteur'],
    servicesTitre: 'Vous vous reconnaissez ?',
    servicesIntro: 'Trois situations que je rencontre souvent, et ce que j\'y '
      + 'fais.',
    guillemets: ['« ', ' »'],
    situations: [
      {
        citation: 'Notre logiciel est vieux, lent, et personne n\'ose y '
          + 'toucher.',
        titre: 'Je le remets à niveau sans tout casser',
        texte: 'J\'avance par petites étapes et je vérifie à chaque fois que '
          + 'tout fonctionne encore. Vous continuez à travailler pendant ce '
          + 'temps.',
      },
      {
        citation: 'On ressaisit les mêmes informations dans trois outils.',
        titre: 'Je connecte vos outils entre eux',
        texte: 'Comptabilité, paiement en ligne, logiciel de gestion : les '
          + 'informations circulent toutes seules, sans double saisie.',
      },
      {
        citation: 'Aucun logiciel du marché ne fait vraiment ce qu\'on veut.',
        titre: 'Je construis votre outil sur mesure',
        texte: 'De l\'idée à l\'outil en ligne : back-office, espace client, '
          + 'facturation, adaptés à votre façon de travailler.',
      },
    ],
    methodeTitre: 'Comment ça se passe',
    methodeIntro: 'Pas besoin d\'être technique. Vous m\'expliquez votre '
      + 'métier, je m\'occupe du reste et je vous tiens au courant.',
    // Préfixe lu par les lecteurs d'écran ; {n} est le numéro de l'étape.
    etape: 'Étape {n} : ',
    etapes: [
      {
        titre: 'Vous m\'écrivez',
        texte: 'Décrivez votre besoin en quelques lignes. Je vous réponds '
          + 'sous 24 h avec mes questions.',
      },
      {
        titre: 'Je vous propose',
        texte: 'Une proposition écrite, claire : ce que je fais, le prix, '
          + 'les délais.',
      },
      {
        titre: 'Je construis',
        texte: 'Un point écrit chaque semaine. Vous testez au fur et à '
          + 'mesure.',
      },
      {
        titre: 'On met en ligne',
        texte: 'Votre outil est à vous, avec la documentation. Je peux '
          + 'ensuite assurer le suivi.',
      },
    ],
    projetsTitre: 'Quelques réalisations',
    projetsIntro: 'Des outils utilisés au quotidien par des entreprises et '
      + 'des services publics.',
    projetsTous: (n: number) => `Voir les ${n} projets →`,
    temoignagesTitre: 'Ils m\'ont fait confiance',
    pourquoiTitre: 'Indépendant ou agence ?',
    pourquoiTexte: 'Une agence a du sens pour un gros projet qui mobilise '
      + 'plusieurs métiers. Pour un outil de gestion bien délimité, '
      + 'travailler directement avec celui qui le construit va souvent plus '
      + 'vite.',
    critere: 'Critère',
    avecMoi: 'Avec moi',
    avecAgence: 'Avec une agence',
    comparatif: [
      {
        critere: 'Votre contact',
        moi: 'Celui qui construit l\'outil',
        agence: 'Une équipe, souvent via un chef de projet',
      },
      {
        critere: 'Le prix',
        moi: 'Sur devis, sans intermédiaire',
        agence: 'Inclut les coûts de l\'équipe et de la structure',
      },
      {
        critere: 'À la fin',
        moi: 'Tout vous appartient, avec la documentation',
        agence: 'Selon le contrat',
      },
    ],
    faqTitre: 'Vos questions',
    faqAutre: 'Une autre question ?',
    faqEcrire: 'Écrivez-moi',
    faqDelai: ', je réponds sous 24 h.',
    faq: [
      {
        question: 'Je ne suis pas du tout technique, est-ce un problème ?',
        reponse: 'Non. Vous connaissez votre métier, c\'est ce qui compte. Je '
          + 'vous pose les bonnes questions et je vous explique mes choix sans '
          + 'jargon.',
      },
      {
        question: 'Combien ça coûte ?',
        reponse: 'Ça dépend du projet. Après nos premiers échanges par '
          + 'e-mail, je vous envoie un devis écrit avec un prix et des '
          + 'délais. Vous décidez ensuite, sans engagement.',
      },
      {
        question: 'J\'ai déjà un logiciel, faut-il tout refaire ?',
        reponse: 'Rarement. Je commence par regarder ce qui peut être gardé. '
          + 'Reprendre un outil existant est souvent moins cher et moins '
          + 'risqué.',
      },
      {
        question: 'Vous êtes à Madagascar : comment on travaille ?',
        reponse: 'À distance, par e-mail. Tout est écrit, donc rien ne se '
          + 'perd : votre besoin, les décisions prises, ce qui a été livré. '
          + 'Il n\'y a qu\'une à deux heures de décalage avec la France, nos '
          + 'journées se recouvrent presque entièrement.',
      },
      {
        question: 'Et après la mise en ligne ?',
        reponse: 'L\'outil vous appartient. Je peux en assurer la maintenance '
          + 'et les évolutions, ou le transmettre à quelqu\'un d\'autre avec '
          + 'toute la documentation.',
      },
    ],
    contactTitre: 'Écrivez-moi',
    contactTexte: 'Décrivez votre besoin en quelques lignes : ce que fait '
      + 'votre entreprise, ce qui vous fait perdre du temps, l\'outil que '
      + 'vous utilisez aujourd\'hui. Je vous réponds sous 24 h et je vous '
      + 'dis franchement si je peux vous aider.',
    contactBouton: 'Décrire mon projet par e-mail',
    // Sujet et corps pré-remplis du lien mailto.
    contactSujet: 'Projet : [nom de votre entreprise]',
    contactCorps: [
      'Bonjour Kevin,',
      '',
      'Mon entreprise :',
      'Ce que je voudrais améliorer :',
      'L\'outil que j\'utilise aujourd\'hui :',
      'Délai souhaité :',
      '',
      'Merci,',
    ].join('\n'),
  },
  realisations: {
    title: 'Réalisations · Kevin Tsiory Rakotosoa',
    // n : nombre de projets du site.
    description: (n: number) => `${majuscule(cardinalFr(n))} outils conçus `
      + 'ou repris pour des entreprises, des associations et des services '
      + 'publics : commerce, formation, service public.',
    retour: '← Retour à l\'accueil',
    titre: 'Toutes mes réalisations',
    intro: (n: number) => `${majuscule(cardinalFr(n))} outils conçus ou `
      + 'repris pour des entreprises, des associations et des services '
      + 'publics. Tous sont en service aujourd\'hui.',
    filtres: 'Filtrer par secteur',
    tous: 'Tous',
    // {n} est remplacé par le nombre de projets affichés.
    affiche: '{n} projet affiché',
    affiches: '{n} projets affichés',
    ctaTitre: (n: number) => `Votre projet pourrait être le ${ordinalFr(n + 1)}`,
    ctaTexte: 'Décrivez votre besoin par e-mail, je vous réponds sous 24 h.',
  },
  agences: {
    title: 'Renfort Symfony pour agences et ESN · Kevin Tsiory Rakotosoa',
    description: 'Développeur Symfony senior en sous-traitance, au forfait et '
      + 'à distance. API, SSO, RabbitMQ, montées de version : je livre dans '
      + 'votre dépôt, en marque blanche.',
    surtitre: 'Pour les agences et les ESN',
    titre: 'Un développeur Symfony senior quand votre équipe est pleine.',
    lead: 'Je prends en charge un périmètre écrit, au forfait, à distance. '
      + 'Vous gardez la relation avec votre client ; je livre dans votre '
      + 'dépôt, en suivant vos conventions.',
    ctaPerimetre: 'Envoyer un périmètre par e-mail',
    ctaRealisations: 'Voir les réalisations',
    servicesTitre: 'Ce que je peux prendre en charge',
    services: [
      {
        titre: 'API et back-offices Symfony',
        texte: 'API REST, back-offices, espaces client. Architecture '
          + 'hexagonale si le projet s\'y prête, ou dans le style déjà en '
          + 'place chez vous.',
      },
      {
        titre: 'Authentification et SSO',
        texte: 'OAuth2, OpenID Connect, connexion unique entre plusieurs '
          + 'applications.',
      },
      {
        titre: 'Traitements asynchrones',
        texte: 'Files de messages avec RabbitMQ, imports, synchronisations et '
          + 'tâches lourdes en arrière-plan.',
      },
      {
        titre: 'Montées de version et reprise de code',
        texte: 'Passage de Symfony 3.4 vers les versions récentes et PHP 8, '
          + 'avec des tests posés avant de toucher au code existant.',
      },
      {
        titre: 'Intégrations',
        texte: 'Paiement en ligne (Stripe), connecteurs ERP, services tiers.',
      },
      {
        titre: 'Laravel aussi',
        texte: 'Back-offices Laravel avec un front Vue 3.',
      },
    ],
    stackTitre: 'Stack',
    // TODO : ajouter « API Platform » seulement après confirmation.
    stack: [
      'PHP 8',
      'Symfony 3.4 à 7.4',
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
    methodeTitre: 'Comment on travaille',
    etapes: [
      {
        titre: 'Vous m\'envoyez le périmètre',
        texte: 'Le besoin, un accès au dépôt ou un extrait de code, les '
          + 'contraintes et la date de livraison.',
      },
      {
        titre: 'Je réponds sous 24 h',
        texte: 'Avec mes questions, puis un devis au forfait : livrables, '
          + 'prix, délai.',
      },
      {
        titre: 'Je développe dans votre dépôt',
        texte: 'Sur une branche dédiée, avec vos conventions. Des merge '
          + 'requests lisibles et des tests sur ce que je livre.',
      },
      {
        titre: 'Un point écrit chaque semaine',
        texte: 'Ce qui est fait, ce qui reste, ce qui bloque.',
      },
      {
        titre: 'Livraison avec une note technique',
        texte: 'Pour que votre équipe reprenne la main sans moi.',
      },
    ],
    methodeEcrit: 'Tout se fait par écrit, par e-mail ou dans vos tickets. '
      + 'Vous gardez une trace de chaque décision.',
    attentesTitre: 'Ce que vous pouvez attendre',
    attentes: [
      // [À VALIDER]
      {
        titre: 'Marque blanche',
        texte: 'Je ne contacte pas votre client, sauf si vous me le '
          + 'demandez.',
      },
      // [À VALIDER]
      {
        titre: 'Confidentialité',
        texte: 'Je signe votre accord de confidentialité si besoin.',
      },
      {
        titre: 'Fuseau horaire',
        texte: 'Antananarivo (UTC+3), une à deux heures d\'avance sur Paris.',
      },
      {
        titre: 'Forfait uniquement',
        texte: 'Je travaille sur des périmètres définis par écrit, pas en '
          + 'régie à temps plein.',
      },
    ],
    projetsTitre: 'Projets proches de ce que vous livrez',
    // id : fiche de /realisations ; angle : présentation technique.
    // TODO : e-Fokontany (RabbitMQ, ancre #e-fokontany) en quatrième carte ?
    projets: [
      {
        id: 'api-devis',
        titre: 'API B2B pour un réseau de magasins',
        angle: 'Symfony 7.4, architecture hexagonale, connecteurs vers '
          + 'l\'ERP de l\'enseigne.',
      },
      {
        id: 'certicpf',
        titre: 'Certi-CPF',
        angle: 'Symfony 6.4, espaces multi-rôles, paiement Stripe par carte '
          + 'et prélèvement.',
      },
      {
        id: 'toemm',
        titre: 'Back-office ToeMM',
        angle: 'Laravel, Vue 3, Clean Architecture.',
      },
    ],
    faqTitre: 'Questions des agences',
    faqAutre: 'Une autre question ?',
    faq: [
      {
        question: 'Vous pouvez venir dans nos locaux ?',
        reponse: 'Non, je travaille à 100 % à distance, depuis Antananarivo.',
      },
      {
        question: 'Vous utilisez nos outils ?',
        reponse: 'Oui : votre dépôt Git, votre outil de tickets, votre CI. Je '
          + 'm\'adapte à ce qui existe.',
      },
      {
        question: 'Et si le périmètre change en cours de route ?',
        reponse: 'Je chiffre le changement par écrit avant de le faire. Vous '
          + 'validez, puis je l\'intègre.',
      },
      // [À VALIDER]
      {
        question: 'Quelle taille de mission ?',
        reponse: 'Des forfaits bien délimités, de quelques jours à quelques '
          + 'semaines de travail.',
      },
      // TODO : « Comment se passe la facturation ? » (structure, devise,
      // modalités). Ne pas publier tant que le texte manque.
    ],
    contactTitre: 'Envoyez-moi votre périmètre',
    contactTexte: 'Quelques lignes suffisent pour commencer : le projet, la '
      + 'stack, ce que vous voulez me confier et pour quand. Je réponds sous '
      + '24 h.',
    contactBouton: 'Envoyer un périmètre par e-mail',
    contactSujet: 'Renfort Symfony : [nom de l\'agence]',
    contactCorps: [
      'Bonjour Kevin,',
      '',
      'Agence :',
      'Projet et stack :',
      'Ce que je voudrais vous confier :',
      'Date de livraison souhaitée :',
      '',
      'Merci,',
    ].join('\n'),
  },
};

export type Dictionnaire = typeof fr;
