export interface LabsSlide {
  title: string;
  description: string;
  image: string;
}

export interface LabsProject {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    image: string;
    navLogo: string;
  };
  intro: {
    quote: string;
    description: string;
    icon: string;
  };
  chapter: {
    title: string;
    category: string;
    description: string;
    tags: string[];
    slides: LabsSlide[];
  };
}

export const labsProjects: Record<string, LabsProject> = {
  "stuck-laufenberg": {
    slug: "stuck-laufenberg",
    hero: {
      title: "Stuck Laufenberg",
      subtitle: "Mastery in every layer.",
      image: "/projects/stuck-laufenberg/slide-1.png",
      navLogo: "LAUFENBERG",
    },
    intro: {
      quote: "Handwerk ist die Kunst, \n Materie zu beseelen.",
      description: "Seit 1985 schaffen wir Räume mit Charakter. \n Präzision in Gips, Kalk und Lehm.",
      icon: "/laufenberg-icon.png",
    },
    chapter: {
      title: "Material & Fusion",
      category: "Architecture",
      description: "Eine Studie über die Symbiose von Beton, Kalk und Licht.",
      tags: ["Präzision", "Handwerk", "Struktur", "Licht"],
      slides: [
        {
          title: "Materialwahl",
          description: "Die Basis jeder Veredelung ist das tiefere Verständnis der Materie.",
          image: "/projects/stuck-laufenberg/portrait-1.jpg",
        },
        {
          title: "Präzision",
          description: "Jeder Millimeter folgt einer klaren gestalterischen Absicht.",
          image: "/projects/stuck-laufenberg/portrait-2.jpg",
        },
        {
          title: "Struktur & Rhythmus",
          description: "Die Wiederholung des Details schafft Ruhe in der Fläche.",
          image: "/projects/stuck-laufenberg/portrait-3.jpg",
        },
        {
          title: "Moderne Interpretation",
          description: "Klassische Techniken übersetzt in eine zeitgenössische Sprache.",
          image: "/projects/stuck-laufenberg/portrait-4.jpg",
        },
        {
          title: "Das fertige Werk",
          description: "Wenn das Material seine Schwere verliert und zur Atmosphäre wird.",
          image: "/projects/stuck-laufenberg/portrait-5.jpg",
        },
      ],
    },
  },
};
