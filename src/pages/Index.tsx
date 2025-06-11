import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Index = () => {
  const recentImages = [
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      alt: "Portrait récent"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      alt: "Paysage récent"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      alt: "Nature récente"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section avec toute la présentation */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="slide-up">
            <Camera className="h-16 w-16 mx-auto mb-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
              Portfolio
            </h1>
            <div className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed space-y-4">
              <p>
                Photographe passionnée, je capture l'instant avec l'envie de transmettre une émotion, 
                une ambiance ou simplement la beauté d'un moment.
              </p>
              <p>
                Peu importe le sujet – concert, voyage, événement sportif ou paysage – tout devient 
                plus vivant quand j'ai un projet photo en tête. Ce portfolio est à la fois mon terrain 
                d'exploration et mon carnet de route. Bienvenue dans mon univers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-center mb-16 slide-up">Travaux récents</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/5] overflow-hidden rounded-lg bg-muted fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/galerie">
                Voir toutes les galeries
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-light mb-6 slide-up">Travaillons ensemble</h2>
          <p className="text-lg mb-8 opacity-90">
            Vous avez un projet ? Une idée ? N'hésitez pas à me contacter.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/contact">Me contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
