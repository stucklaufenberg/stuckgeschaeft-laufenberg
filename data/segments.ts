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
          title: "Beratung",
          description: "Wir hören zu und entwickeln gemeinsam Ihr Konzept.",
          image: "/projects/privatkunden/slide-1.jpg",
        },
        {
          title: "Farbe & Struktur",
          description: "Die Wahl der richtigen Materialien für Ihr Wohlbefinden.",
          image: "/projects/privatkunden/slide-2.jpg",
        },
        {
          title: "Ausführung",
          description: "Sauberkeit und Präzision in Ihren vier Wänden.",
          image: "/projects/privatkunden/slide-3.jpg",
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
          title: "Details",
          description: "Sichtbare Qualität in jeder Kante.",
          image: "/projects/architekten/uploaded_image_3_1766502821485.png",
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
          title: "Dämmkern",
          description: "Die Basis für ein stabiles Raumklima.",
          image: "/projects/wdvs/slide-1.jpg",
        },
        {
          title: "Armierung",
          description: "Rissfrei und widerstandsfähig gegen Witterung.",
          image: "/projects/wdvs/slide-2.jpg",
        },
        {
          title: "Oberputz",
          description: "Die schützende Haut in Ihrer Wunschoptik.",
          image: "/projects/wdvs/slide-3.jpg",
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
          title: "Untergrund",
          description: "Vorbereitung für eine perfekte Haftung.",
          image: "/projects/innenputz/slide-1.jpg",
        },
        {
          title: "Feinputz",
          description: "Die Veredelung für seidenglatte Oberflächen.",
          image: "/projects/innenputz/slide-2.jpg",
        },
        {
          title: "Finish",
          description: "Natürliche Pigmente und Strukturen.",
          image: "/projects/innenputz/slide-3.jpg",
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
          title: "Grundputz",
          description: "Der solide Schutz gegen Feuchtigkeit.",
          image: "/projects/aussenputz/slide-1.jpg",
        },
        {
          title: "Gewebe",
          description: "Sicherheit gegen Risse und Spannungen.",
          image: "/projects/aussenputz/slide-2.jpg",
        },
        {
          title: "Struktur",
          description: "Individuelle Oberflächen nach Ihrem Geschmack.",
          image: "/projects/aussenputz/slide-3.jpg",
        },
      ],
    },
  },
};
