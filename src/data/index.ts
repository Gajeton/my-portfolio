import { link } from "fs";

export interface ExploreFileProps {
  id?:string;
  title:string;
  isFolder?: boolean,
  logo: string,
  children: ExploreFileProps[]
}

export const exploreFile: ExploreFileProps[] = [
  {
    id: "web-framework",
    title: "web framework.",
    isFolder: true,
    logo: ``,
    children: [
      {
        id: "anglar",
        title: ".angular",
        logo: ``,
        isFolder: false,
        children:[],
      },
      {
        id: "react",
        title: ".react",
        logo: ``,
        isFolder: false,
        children:[],
      },
    ],
  },
  {
    id: "back-framework",
    title: "back framework.",
    isFolder: true,
    logo: `test`,
    children: [
      {
        id: "react",
        title: ".react",
        logo: ``,
        isFolder: false,
        children:[],
      },
    ],
  },
];



export interface ExperienceProps {
  id?:string;
  title:string;
  subTitle: string;
  children: ExperienceChildContentProps[]
}
export interface ExperienceChildContentProps {
  id?:string;
  title?:string;
  subTitle?: string;
  content: string[]
}

export const experience: ExperienceProps[] = [
  {
    id: "project-manager",
    title: "project manager",
    subTitle: "Lyon, nov. 2021 - jan. 2023 · 1 year 3 months",
    children: [
      {
        content: [
          "Rédaction et présentation de propositions commerciales, édition de contrats et estimation des coûts d'applications.","Qualification de clients par entretiens pour analyser leurs besoins et proposer des solutions adaptées."
        ]
      },
      {
        subTitle: "Gestion de la maintenance corrective et évolutive d’une application :",
        content:[
          "Mise en place d'un système de ticket de support pour gérer les demandes et les problèmes signalés par les utilisateurs.",
          "Organisation de réunions hebdomadaires avec les clients pour discuter des problèmes, des évolutions et des décisions à prendre.",
          "Conseils sur les bonnes pratiques et aide à la prise de décisions concernant les évolutions nécessaires.",
          "Supervision des développements pour s'assurer de leur qualité, de leur conformité aux spécifications et de leur intégration dans les délais impartis.",
          "Gestion de la phase de mise en production pour déployer les nouvelles fonctionnalités ou les corrections apportées.",
          "Redéfinition du cahier des charges avec le client.",
          "Vulgarisation des concepts informatiques pour rendre les informations accessibles aux personnes non spécialisées dans le domaine.",
          "Réflexion approfondie sur l'hébergement sécurisé des données médicales conformément aux normes de sécurité et de protection des données en vigueur (Hébergement Données de Santé - HDS)."
        ]
      },
      {
        content: [
          "Mise en place de méthodes agiles pour les phases d'évolutions applicatives, en utilisant la méthodologie SCRUM ou Kanban pour planifier les itérations et suivre l'avancement.",
          "Chiffrage des évolutions et gestion des équipes de développeurs, en assurant la coordination des plannings et l'assignation des tâches pour garantir la livraison dans les délais impartis."
        ]
      },
    ]
  },
  {
    id: "developer",
    title: "web developer",
    subTitle: "Lyon, nov. 2021 - jan. 2023 · 1 year 3 months",
    children: [{
      title:"Développement d’une application web fullstack SpringBoot et Angular :",
      subTitle: "Développement d'applications de gestion des dossiers de sinistres pour une entreprise d'assurance dans le bâtiment.",
      content: [
        "Utilisation de technologies SpringBoot pour le backend et Angular pour le frontend, avec hébergement sur le cloud Azure.",
        "Mise en place d'API en utilisant Springboot et Hibernate pour gérer les récupérations d'objets depuis la base de données PostgresSQL",
        "Remonte d’informations dans l’outil Azure AppInsight pour analyser la performance (réussite, temps de réponses) des requêtes API.",
        "Mise en place de fonctionnalités de récursivité pour récupérer les dossiers des clients sous forme d'arbres selon le type de sinistres.",
        "Travail en équipe pour garantir une collaboration efficace et un développement de qualité.",
        "Environnement Agile, avec des itérations régulières et des revues de code interne."
      ]
    },
    {
      title:"Développement d'applications web fullstack .NET Core et Angular :",
      subTitle: " Application de gestion d'événements sportifs pour l'Association Sport dans la ville et une application de financement de projets décarbonés.",
      content: [
        "Développement d'applications en utilisant .NET Core pour le backend et Angular pour le frontend, avec hébergement sur le cloud Azure.",
        "Utilisation du Framework CSS Material Design pour créer des interfaces modernes.",
        "Utilisation de l'ORM EntityFramework pour faciliter l'accès et la gestion des données, avec des requêtes SQL natives pour des opérations spécifiques.",
        "Environnement Agile avec des courtes itérations, des mises à jour régulières et l'intégration des retours clients à chaque fin de sprint.",
        "Mise en place d'une intégration continue avec des scripts de build et de déploiement automatisés via Gitlab CI/CD et le fournisseur Cloud Azure.",
        "Environnement Agile, avec des itérations régulières et des revues de code interne.",
        "Présentation de l'avancement au client en fin de sprint et réalisation de recettes pour intégrer les retours clients dans le sprint en cours."
      ]
    },
    {
      title:"Mission chez EDF :",
      subTitle: " Maintenance, évolution et support d'un socle applicatif développé en SpringBoot pour le backend et Angular pour le frontend.",
      content: [
        "Utilisation de l'outil de versioning Git avec Gitlab pour gérer les versions du code source.",
        "Ajout de nouvelles briques pour l'authentification SSO et LDAP.",
        "Ajout de tests unitaires sur le frontend Angular en utilisant le framework Jasmine et Karma pour assurer la qualité du code.",
        "Maintien et support des scripts de déploiement en utilisant Ansible, avec écriture de scripts YAML pour faciliter le déploiement de l'application et la configuration des serveurs.",
        "Utilisation de la plateforme Jenkins pour l'intégration continue, incluant le build, le lancement des tests unitaires et le déploiement de l'application.",
        "Formateur technique et support aux utilisateurs du socle applicatif, en utilisant un outil de ticketing tel que Jira et en participant à la refonte de la documentation technique via Confluence.",
        "Présentation de l'avancement au client en fin de sprint et réalisation de recettes pour intégrer les retours clients dans le sprint en cours.",
        "Animation d'ateliers de développement sur plusieurs jours avec une dizaine de participants, permettant un partage de connaissances et une amélioration des compétences en Angular et SpringBoot."
      ]
    },
  ]
  },
];


export interface EducationProps {
  id?:string;
  title:string;
  subTitle: string;
  content:string[];
}

export const eudcation: EducationProps[] = [
  {
    id: "iut",
    title: `DUT INFORMATIQUE en année spéciale (1 an)`,
    subTitle: " IUT Informatique Orléans, sept. 2018 - sept. 2018",
    content: [
      `Apprentissage des langages et des frameworks tels que Java, Spring, JavaScript, HTML/CSS, Ajax, jQuery, C++, Python, PHP, et mises en pratique lors de projets académiques.`,
      `Exercice théorique en Assembleur`
    ]
  },
  {
    id: "iut",
    title: `DUT INFORMATIQUE en année spéciale (1 an)`,
    subTitle: " IUT Informatique Orléans, sept. 2018 - sept. 2018",
    content: [
      `Apprentissage des langages et des frameworks tels que Java, Spring, JavaScript, HTML/CSS, Ajax, jQuery, C++, Python, PHP, et mises en pratique lors de projets académiques.`,
      `Exercice théorique en Assembleur`
    ]
  },
  {
    id: "iut",
    title: `DUT INFORMATIQUE en année spéciale (1 an)`,
    subTitle: " IUT Informatique Orléans, sept. 2018 - sept. 2018",
    content: [
      `Apprentissage des langages et des frameworks tels que Java, Spring, JavaScript, HTML/CSS, Ajax, jQuery, C++, Python, PHP, et mises en pratique lors de projets académiques.`,
      `Exercice théorique en Assembleur`
    ]
  },
];


export interface OtherProps {
  title:string[];
  link?:string[]
}
export const other: OtherProps[] = [
  {
    title: ['Projet 1', 'Projet 2'],
  }
  ,{
    title: ['Podcast 1', 'Podcast 2'],
    link: ["https://www.google.fr/", "https://www.augoutdemma.be/88960-itineraire-japon-3-semaines"]
  }
]