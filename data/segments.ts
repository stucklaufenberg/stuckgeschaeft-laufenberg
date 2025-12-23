/**
 * ARCHITECTURE & SEGMENTS CONFIGURATION
 * --------------------------------------
 * To swap images: 
 * 1. Place your new image in /public/projects/[folder]/
 * 2. Update the 'image' path below.
 * 3. The ScrollTimeline engine will handle the rest.
 */

import { LabsProject } from "./labs";

export const segmentProjects: Record<string, LabsProject> = {
  "privatkunden": {
    slug: "privatkunden",
    hero: {
      title: "Hochwertige \n Putzsysteme für \n Ihr Zuhause",
      subtitle: "Ihr Zuhause soll nicht nur schön aussehen, sondern auch energieeffizient und nachhaltig sein.",
      image: "/projects/privatkunden/hero.jpg",
      navLogo: "PRIVATKUNDEN",
    },
    intro: {
      quote: "Ein schönes Zuhause beginnt mit der richtigen Oberfläche.",
      description: "Wir begleiten Sie von der ersten Beratung bis zur fertigen Wand. Nachhaltig, effizient und mit Liebe zum Detail.",
      icon: "/house-icon.png",
    },
    chapter: {
      title: "Ihr Wohntraum",
      category: "Home & Living",
      description: "Maßgeschneiderte Lösungen für Privatimmobilien.",
      tags: ["Individuell", "Nachhaltig", "Premium"],
      slides: [
        {
          title: "Ankunft",
          description: "Ein Zuhause beginnt dort, wo Materialien zur Ruhe kommen.",
          image: "/projects/privatkunden/1.png",
        },
        {
          title: "Lichtspiel",
          description: "Wir gestalten Oberflächen, die mit dem natürlichen Rhythmus des Tages spielen.",
          image: "/projects/privatkunden/2.png",
        },
        {
          title: "Haptik",
          description: "Echte Kalkputze fühlen sich so natürlich an, wie sie aussehen.",
          image: "/projects/privatkunden/3.png",
        },
        {
          title: "Privatsphäre",
          description: "Nahtlose Übergänge für eine Atmosphäre der Geborgenheit.",
          image: "/projects/privatkunden/4.png",
        },
        {
          title: "Ewigkeit",
          description: "Wir bauen nicht für Trends, sondern für Generationen.",
          image: "/projects/privatkunden/5.png",
        },
      ],
    },
  },
  "architekten": {
    slug: "architekten",
    hero: {
      title: "Perfekte \n Putzsysteme für \n Neubauprojekte",
      subtitle: "Aura. Ästhetik. Langlebigkeit. \n Hochwertige Materialien für visionäre Architektur.",
      image: "/projects/architekten/uploaded_image_0_1766502821485.jpg",
      navLogo: "ARCHITEKTEN",
    },
    intro: {
      quote: "Präzision braucht Zeit – und Perfektion erst recht.",
      description: "Partner für Architekten und Planer. Wir liefern die technische Exzellenz für Ihre gestalterische Vision.",
      icon: "/arch-icon.png",
    },
    chapter: {
      title: "Technical Excellence",
      category: "B2B / Architecture",
      description: "Partnerschaften auf Augenhöhe.",
      tags: ["Professional", "Scale", "Precision"],
      slides: [
        {
          title: "Konzeption",
          description: "Technische Details und Materialberatung für Großprojekte.",
          image: "/projects/architekten/uploaded_image_1_1766502821485.jpg",
        },
        {
          title: "Ästhetik & Licht",
          description: "Wir verstehen, wie Oberflächen mit Licht interagieren.",
          image: "/projects/architekten/uploaded_image_2_1766502821485.png",
        },
        {
          title: "Sichtbare Qualität",
          description: "Präzision in jeder Kante und jedem Übergang.",
          image: "/projects/architekten/uploaded_image_3_1766502821485.png",
        },
        {
          title: "Atmosphäre",
          description: "Wenn Architektur zur Melodie wird.",
          image: "/projects/architekten/uploaded_image_4_1766502821485.png",
        },
      ],
    },
  },
  "wdvs": {
    slug: "wdvs",
    hero: {
      title: "WDVS \n Wärmedämmung \n der nächsten Generation",
      subtitle: "Effizienz trifft Ästhetik. \n Absolut fluchtgerecht und energetisch optimiert.",
      image: "/projects/wdvs/hero.jpg",
      navLogo: "WDVS",
    },
    intro: {
      quote: "Energie sparen, ohne an Design zu verlieren.",
      description: "Unser WDVS 2.0 System bietet maximale Dämmwerte bei minimaler Aufbauhöhe. Perfektion bis in die Fensterlaibung.",
      icon: "/energy-icon.png",
    },
    chapter: {
      title: "Thermal Armor",
      category: "Sustainability",
      description: "Building the future of energy-efficient living.",
      tags: ["Efficiency", "Durability", "Modern"],
      slides: [
        {
          title: "Kernkompetenz",
          description: "Hocheffiziente Dämmlösungen, die sich nahtlos in die Architektur einfügen.",
          image: "/projects/wdvs/1.png",
        },
        {
          title: "Präzision",
          description: "Absolut fluchtgerechte Kanten und perfekte Übergänge.",
          image: "/projects/wdvs/2.png",
        },
        {
          title: "Schutzhülle",
          description: "Wetterschutz trifft auf höchste energetische Standards.",
          image: "/projects/wdvs/3.png",
        },
        {
          title: "Geometrie",
          description: "Klare Linienführung ohne Kompromisse bei der Effizienz.",
          image: "/projects/wdvs/4.png",
        },
        {
          title: "Vollendung",
          description: "Wenn Technik unsichtbar wird und nur noch Design bleibt.",
          image: "/projects/wdvs/5.png",
        },
      ],
    },
  },
  "innenputz": {
    slug: "innenputz",
    hero: {
      title: "Gesundes \n Raumklima durch \n echte Kalkputze",
      subtitle: "Ästhetik + Raumklima = Werterhalt. \n Natürliche Materialien für Ihr Wohlbefinden.",
      image: "/projects/innenputz/hero.jpg",
      navLogo: "INNENPUTZ",
    },
    intro: {
      quote: "Wände, die atmen können.",
      description: "Kalk- und Lehmputze regulieren die Feuchtigkeit und sorgen für ein schadstofffreies Zuhause.",
      icon: "/interior-icon.png",
    },
    chapter: {
      title: "Interior Soul",
      category: "Health & Living",
      description: "Crafting atmosphere from the inside out.",
      tags: ["Natural", "Healthy", "Smooth"],
      slides: [
        {
          title: "Materie",
          description: "Natürliche Inhaltsstoffe für ein gesundes Raumklima.",
          image: "/projects/innenputz/1.png",
        },
        {
          title: "Tiefe",
          description: "Strukturierte Oberflächen, die den Raum beseelen.",
          image: "/projects/innenputz/2.png",
        },
        {
          title: "Reflektion",
          description: "Feinputze, die Licht sanft im Raum verteilen.",
          image: "/projects/innenputz/3.png",
        },
        {
          title: "Balance",
          description: "Vorbereitung und Ausführung im perfekten Gleichgewicht.",
          image: "/projects/innenputz/4.png",
        },
        {
          title: "Purismus",
          description: "Weniger ist mehr, wenn die Qualität stimmt.",
          image: "/projects/innenputz/5.png",
        },
      ],
    },
  },
  "aussenputz": {
    slug: "aussenputz",
    hero: {
      title: "Monolithischer \n Außenputz für \n Ewigkeit",
      subtitle: "Schutz. Wertigkeit. Edle Optik. \n Die Visitenkarte Ihres Hauses.",
      image: "/projects/aussenputz/hero.jpg",
      navLogo: "AUSSENPUTZ",
    },
    intro: {
      quote: "Die Fassade ist das Gesicht eines Gebäudes.",
      description: "Vom klassischen Kratzputz bis zur modernen Glattfassade. Wir schützen Ihr Eigentum mit Stil.",
      icon: "/exterior-icon.png",
    },
    chapter: {
      title: "Exterior Shield",
      category: "Protection",
      description: "Resistant to weather, timeless in design.",
      tags: ["Robust", "Elegant", "Long-lasting"],
      slides: [
        {
          title: "Visitenkarte",
          description: "Ein Außenputz, der den Charakter Ihres Gebäudes unterstreicht.",
          image: "/projects/aussenputz/1.png",
        },
        {
          title: "Kantenführung",
          description: "Mathematische Präzision für klare Schattenwürfe.",
          image: "/projects/aussenputz/2.png",
        },
        {
          title: "Widerstand",
          description: "Langlebige Oberflächen, die jedem Sturm trotzen.",
          image: "/projects/aussenputz/3.png",
        },
        {
          title: "Symmetrie",
          description: "Harmonie zwischen Material, Form und Umgebung.",
          image: "/projects/aussenputz/4.png",
        },
        {
          title: "Statement",
          description: "Architektur, die man nicht nur sieht, sondern fühlt.",
          image: "/projects/aussenputz/5.png",
        },
      ],
    },
  },
};
