---
nom: "B2B quoting API"
titre: "B2B Quoting API Refactored to Hexagonal Architecture (Symfony)"
resume: "Each store in a retail network prepares its quotes, tracks its claims and its sales targets. The tool is connected to the brand's ERP."
role: "Backend Developer, REST API and architecture design"
periode: "May 2025 - June 2026 · Freelance"
competences:
  - "PHP 8.4"
  - "Symfony 7.4"
  - "API Platform"
  - "Doctrine"
  - "MariaDB"
  - "Docker"
  - "CQRS"
  - "Hexagonal architecture"
  - "JWT"
  - "PHPUnit"
  - "PHPStan"
  - "Rector"
  - "PHP-CS-Fixer"
etiquetteAccueil: "Retail network"
resumeAccueil: "Each store prepares its quotes, tracks its claims and its sales targets. Connected to the brand's ERP."
imageAlt: "Hexagonal architecture diagram of the API: domain at the center, entry points on the left, database and ERP adapters on the right"
---

A B2B platform for a furniture manufacturer's dealer network: quoting and quote recalculation, customer claims, product and supplier catalogs, sales targets.

My main contribution was the architecture. I proposed a strict hexagonal design with CQRS message segregation, and the API was refactored onto it: command and query buses, plus dependency rules keeping the domain free of Symfony and of the external systems. I then built features on that foundation, including adapters to the Acumatica and Dynamics 365 ERPs.

8 months in the backend team. PHP 8.4, Symfony 7.4, API Platform, MariaDB.
