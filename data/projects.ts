export interface ProjectImages {
  material: string;
  detail: string;
  raum: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  location: string;
  year: string;
  description: string;
  images: ProjectImages;
}

export const curatedProjects: Project[] = [
  {
    id: "projekt-01",
    number: "01",
    title: "Palais Berlin",
    location: "Berlin-Mitte",
    year: "2023",
    description: "Restaurierung historischer Deckenprofile mit integrierter moderner Lichtführung.",
    images: {
      material: "/projects/01/material.jpg",
      detail: "/projects/01/detail.jpg",
      raum: "/projects/01/raum.jpg",
    },
  },
  {
    id: "projekt-02",
    number: "02",
    title: "Minimalist Loft",
    location: "Hamburg-Hafencity",
    year: "2024",
    description: "Sichtbeton-Optik und fugenlose Wandgestaltungen in einem Industrie-Denkmal.",
    images: {
      material: "/projects/02/material.jpg",
      detail: "/projects/02/detail.jpg",
      raum: "/projects/02/raum.jpg",
    },
  },
  {
    id: "projekt-03",
    number: "03",
    title: "Residenz München",
    location: "Bogenhausen",
    year: "2022",
    description: "Handgezogene Stuckgesimse für ein repräsentatives Treppenhaus.",
    images: {
      material: "/projects/03/material.jpg",
      detail: "/projects/03/detail.jpg",
      raum: "/projects/03/raum.jpg",
    },
  },
  {
    id: "projekt-04",
    number: "04",
    title: "Atelier Frankfurt",
    location: "Frankfurt am Main",
    year: "2023",
    description: "Moderne Interpretation klassischer Stucktechniken in einem Atelierbau.",
    images: {
      material: "/projects/04/material.jpg",
      detail: "/projects/04/detail.jpg",
      raum: "/projects/04/raum.jpg",
    },
  },
  {
    id: "projekt-05",
    number: "05",
    title: "Villa am See",
    location: "Starnberg",
    year: "2024",
    description: "Komplette Neugestaltung der Innenräume mit Fokus auf Lichtvouten und Gesimse.",
    images: {
      material: "/projects/05/material.jpg",
      detail: "/projects/05/detail.jpg",
      raum: "/projects/05/raum.jpg",
    },
  },
];
