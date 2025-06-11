
import { useState } from "react";
import Navigation from "@/components/Navigation";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const galleries = {
    "2024": [
      {
        src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
        alt: "Portrait 2024",
        description: "Studio portrait - Paris"
      },
      {
        src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
        alt: "Paysage 2024",
        description: "Coucher de soleil - Provence"
      },
      {
        src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
        alt: "Nature 2024",
        description: "Océan Atlantique - Bretagne"
      },
      {
        src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
        alt: "Fleurs 2024"
      },
      {
        src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
        alt: "Animal 2024",
        description: "Chat de rue - Montmartre"
      },
      {
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
        alt: "Cerfs 2024",
        description: "Forêt de Fontainebleau"
      }
    ],
    "2023": [
      {
        src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
        alt: "Ocean 2023",
        description: "Tempête - Côte sauvage"
      },
      {
        src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
        alt: "Montagne 2023"
      },
      {
        src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
        alt: "Nature 2023",
        description: "Jardin botanique - Lyon"
      },
      {
        src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
        alt: "Portrait 2023",
        description: "Portrait en extérieur - Marseille"
      }
    ],
    "2022": [
      {
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
        alt: "Faune 2022"
      },
      {
        src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
        alt: "Chat 2022",
        description: "Café de quartier - Toulouse"
      },
      {
        src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
        alt: "Botanique 2022",
        description: "Serre tropicale - Nantes"
      }
    ]
  };

  const years = Object.keys(galleries).sort().reverse();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-light text-center mb-4 slide-up">
            Galeries
          </h1>
          <p className="text-center text-muted-foreground mb-12 slide-up">
            Une sélection de mes travaux organisés par année
          </p>

          {/* Year Filter */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-2 bg-accent/50 p-2 rounded-lg">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "ghost"}
                  onClick={() => setSelectedYear(year)}
                  className="min-w-[80px]"
                >
                  {year}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <GalleryGrid 
            images={galleries[selectedYear as keyof typeof galleries]} 
            title={`Collection ${selectedYear}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
