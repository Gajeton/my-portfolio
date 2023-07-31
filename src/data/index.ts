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

export interface OthersProps {
  title: string
  id:number
  data:OtherProps
 }


export interface ExperienceProps {
  id?:string;
  idItem?: number;
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
          "Drafted and presented commercial proposals, edited contracts, and estimated application costs.",
          "Qualify customers by interviewing them to analyze their needs and propose appropriate solutions."
        ]
      },
      {
        subTitle: "Management of corrective and evolutionary application maintenance:",
        content:[
          "Implemented a support ticket system to handle requests and issues reported by users.",
          "Organized weekly meetings with clients to discuss problems, developments, and decisions.",
          "Provided advice on best practices and assisted in decision-making for necessary improvements.",
          "Supervised development to ensure quality, compliance with specifications, and timely integration.",
          "Managed the production deployment of new features or fixes.",
          "Redefined the specifications with the client and simplified IT concepts for non-specialized personnel.",
          "Conducted thorough analysis for secure hosting of medical data in compliance with data protection regulations (Health Data Hosting - HDS).",
        ]
      },
      {
        content: [
          "Implemented Agile methods for application evolutions using SCRUM or Kanban methodology to plan iterations and track progress.",
          "Estimated developments and managed developer teams, coordinating schedules and task assignments to ensure timely delivery."
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
      subTitle: "Maintained, evolved, and supported an application stack developed in Spring Boot for the backend and Angular for the frontend.",
      content: [
        "Used Git versioning tool with Gitlab to manage source code versions.",
        "Addition new components for SSO and LDAP authentication.",
        "Implemented unit tests on the Angular frontend using Jasmine and Karma to ensure code quality.",
        "Maintained and supported deployment scripts using Ansible, with YAML scripting to facilitate application deployment and server configuration.",
        "Use of the Jenkins platform for continuous integration, including build, unit test execution, and application deployment.",
        "Formateur technique et support aux utilisateurs du socle applicatif, en utilisant un outil de ticketing tel que Jira et en participant à la refonte de la documentation technique via Confluence.",
        "Présentation de l'avancement au client en fin de sprint et réalisation de recettes pour intégrer les retours clients dans le sprint en cours.",
        "Animation d'ateliers de développement sur plusieurs jours avec une dizaine de participants, permettant un partage de connaissances et une amélioration des compétences en Angular et SpringBoot."
      ]
    },
  ]
  },
  {
    id: "intership",
    title: "Internship",
    subTitle: "Orleans, France",
    children: [
      {
        content: [
            ' 3 months : Full Stack Developer Intern at DEV3I: Developed a web application in .NET Core C# with Azure Functions (serverless) and Vue.js. Implemented authentication and APIs to manage software licenses sold to clients.',
            ' 4 months : Full Stack Developer Intern at Entrust Datacard: Refactored a desktop application into a web application using Razor Pages .NET Framework.'
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
    title: `DUT INFORMATIQUE`,
    subTitle: " IUT Informatique Orleans, France, sept. 2018 - sept. 2018",
    content: [
      `Learned languages and frameworks such as Java, Spring, JavaScript, HTML/CSS, Ajax, jQuery, C++, Python, PHP, and applied them in academic projects. `,
      `Theoretical exercise in Assembler`,
    ],
  },
  {
    id: "sup",
    title: `DUT INFORMATIQUE en année spéciale (1 an)`,
    subTitle: " Private School of Computer Science Orleans, France, nov. 2015 - sept. 2018",
    content: [
    ],
  },
  {
    id: "bac",
    title: `BAC STI2D SIN`,
    subTitle: "Lycée Saint Croix Saint Euverte Orleans, France, sept. 2014 - sept. 2015",
    content: [],
  },
];


export interface OtherProps {
  title:string[];
  link?:string[]
}
export const other: OtherProps[] = [
  {
    title: ['Developed a one-page web platform for online games. Back-end: Spring, Java/Front-end: Jquery, Ajax, PHP, JavaScript, JSON', 'Final year project (GTA-like game) using Unity and C# language.'],
  }
  ,{
    title: ['DevOps: Impact on development projects?',
            'Debunking 9 misconceptions about Agile methodology.',
            'Is Spring Boot the best JAVA framework ?',
            'Green IT: The status of sustainable computing.',
            'Bug & Debug: Tools, methods, and developers advice.'
          ],
    link: ["https://www.google.fr/", "https://www.augoutdemma.be/88960-itineraire-japon-3-semaines"]
  }
]