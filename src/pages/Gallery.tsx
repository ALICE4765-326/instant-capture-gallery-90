
import { useState } from "react";
import Navigation from "@/components/Navigation";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import { images } from "@/content/images";
import { texts } from "@/content/texts";

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

  const galleries = {
    "2025": images.gallery2025,
    "2024": images.gallery2024,
  };

  const years = Object.keys(galleries).sort().reverse();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-light text-center mb-4 slide-up">
            {texts.gallery.title}
          </h1>
          <p className="text-center text-muted-foreground mb-12 slide-up">
            {texts.gallery.subtitle}
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
            title={`${texts.gallery.collectionPrefix} ${selectedYear}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
