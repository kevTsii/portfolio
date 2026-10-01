---
nom: "API de devis B2B"
secteur: "Commerce"
annee: 2025
titre: "API B2B en architecture hexagonale (Symfony 7.4)"
resume: "Chaque magasin d'un réseau prépare ses devis, suit ses réclamations et ses objectifs de vente. L'outil est relié au logiciel de gestion de l'enseigne."
role: "Développeur backend, conception de l'API REST et de l'architecture"
periode: "mai 2025 - juin 2026 · Freelance"
competences:
  - "PHP 8.4"
  - "Symfony 7.4"
  - "API Platform"
  - "Doctrine"
  - "MariaDB"
  - "Docker"
  - "CQRS"
  - "architecture hexagonale"
  - "JWT"
  - "PHPUnit"
  - "PHPStan"
  - "Rector"
  - "PHP-CS-Fixer"
technologies: "Symfony 7.4, API Platform"
ordre: 1
vedette: true
etiquetteAccueil: "Réseau de magasins"
resumeAccueil: "Chaque magasin prépare ses devis, suit ses réclamations et ses objectifs de vente. Relié au logiciel de gestion de l'enseigne."
image: ./architecture.png
imageAlt: "Schéma de l'architecture hexagonale de l'API : domaine au centre, points d'entrée à gauche, base de données et connecteurs ERP à droite"
---

API REST d'une suite B2B destinée à des réseaux de magasins et à leurs organisations : établissement et recalcul de devis, traitement des réclamations clients, référentiels produits, fournisseurs, usines et entrepôts, suivi des objectifs de vente.

Architecture hexagonale segmentée en CQRS, avec bus de commandes et de requêtes et règles de dépendance strictes entre couches. Exposition via API Platform, cloisonnement par trois firewalls JWT selon le type d'utilisateur (administration, magasin, organisation) et autorisation au niveau de chaque opération. Adaptateurs vers les ERP Acumatica et Dynamics 365, calcul de taxes Avalara, stockage S3.

Intervention au sein de l'équipe backend. Projet en régie, 8 mois.
