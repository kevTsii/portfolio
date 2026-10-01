// Textes de l'interface en français. en.ts doit reprendre la même forme.

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
    cta: 'Discutons de votre projet',
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
  },
  reservation: 'Réserver mon appel gratuit',
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
    title: 'Kevin Rakotosoa · Développeur PHP indépendant',
    description: 'Des logiciels de gestion sur mesure, simples à utiliser et '
      + 'fiables. Devis, factures, stocks, espace client : un seul '
      + 'interlocuteur, du premier appel à la mise en ligne.',
    badge: 'Disponible pour de nouveaux projets',
    heroTitre: 'Des logiciels de gestion sur mesure,',
    mots: ['simples à utiliser.', 'fiables.', 'faits pour votre métier.'],
    motsLecteur: 'simples à utiliser, fiables et faits pour votre métier.',
    heroLead: 'Devis, factures, stocks, espace client : je crée les outils web '
      + 'dont votre entreprise a besoin, ou je remets en forme ceux que vous '
      + 'avez déjà. Un seul interlocuteur, du premier appel à la mise en '
      + 'ligne.',
    ctaAppel: 'Réserver un appel gratuit de 30 min',
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
        titre: 'On en parle',
        texte: 'Un appel gratuit de 30 minutes pour comprendre votre besoin.',
      },
      {
        titre: 'Je vous propose',
        texte: 'Une proposition écrite, claire : ce que je fais, le prix, '
          + 'les délais.',
      },
      {
        titre: 'Je construis',
        texte: 'Un point chaque semaine. Vous testez au fur et à mesure.',
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
    pourquoiTitre: 'Pourquoi un indépendant plutôt qu\'une agence ?',
    pourquoiTexte: 'Vous parlez directement à la personne qui fabrique votre '
      + 'outil. Rien ne se perd en route.',
    critere: 'Critère',
    avecMoi: 'Avec moi',
    avecAgence: 'Avec une agence',
    comparatif: [
      {
        critere: 'Votre contact',
        moi: 'Celui qui construit l\'outil',
        agence: 'Un commercial, puis un chef de projet',
      },
      {
        critere: 'Le prix',
        moi: 'Sur devis, sans intermédiaire',
        agence: 'Frais de structure inclus',
      },
      {
        critere: 'Votre outil actuel',
        moi: 'Je le reprends s\'il est récupérable',
        agence: 'Souvent tout refaire',
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
    faqDelai: ', je réponds sous 48 h.',
    faq: [
      {
        question: 'Je ne suis pas du tout technique, est-ce un problème ?',
        reponse: 'Non. Vous connaissez votre métier, c\'est ce qui compte. Je '
          + 'vous pose les bonnes questions et je vous explique mes choix sans '
          + 'jargon.',
      },
      {
        question: 'Combien ça coûte ?',
        reponse: 'Ça dépend du projet. Après notre appel, je vous envoie un '
          + 'devis écrit avec un prix et des délais. Vous décidez ensuite, '
          + 'sans engagement.',
      },
      {
        question: 'J\'ai déjà un logiciel, faut-il tout refaire ?',
        reponse: 'Rarement. Je commence par regarder ce qui peut être gardé. '
          + 'Reprendre un outil existant est souvent moins cher et moins '
          + 'risqué.',
      },
      {
        question: 'Vous êtes à Madagascar : comment on travaille ?',
        reponse: 'À distance, par visio et par écrit. Il n\'y a qu\'une à '
          + 'deux heures de décalage avec la France : nos journées se '
          + 'recouvrent presque entièrement.',
      },
      {
        question: 'Et après la mise en ligne ?',
        reponse: 'L\'outil vous appartient. Je peux en assurer la maintenance '
          + 'et les évolutions, ou le transmettre à quelqu\'un d\'autre avec '
          + 'toute la documentation.',
      },
    ],
    contactTitre: 'Parlons de votre projet',
    contactTexte: '30 minutes, gratuitement, pour comprendre votre besoin. Je '
      + 'vous dirai franchement si je peux vous aider.',
    contactEmail: 'E-mail',
    contactReponse: 'Réponse',
    contactReponseDelai: 'Sous 48 heures',
    contactLieu: 'Basé à',
    contactLieuTexte: 'Antananarivo, je travaille à distance',
  },
  realisations: {
    title: 'Réalisations · Kevin Rakotosoa',
    description: 'Neuf outils conçus ou repris pour des entreprises, des '
      + 'associations et des services publics : commerce, formation, service '
      + 'public.',
    retour: '← Retour à l\'accueil',
    titre: 'Toutes mes réalisations',
    intro: 'Neuf outils conçus ou repris pour des entreprises, des '
      + 'associations et des services publics. Tous sont en service '
      + 'aujourd\'hui.',
    filtres: 'Filtrer par secteur',
    tous: 'Tous',
    // {n} est remplacé par le nombre de projets affichés.
    affiche: '{n} projet affiché',
    affiches: '{n} projets affichés',
    ctaTitre: 'Votre projet pourrait être le dixième',
    ctaTexte: 'Un appel gratuit de 30 minutes pour en parler.',
  },
};

export type Dictionnaire = typeof fr;
