import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 lg:pt-0">
      {/* Background gradient subtle */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 opacity-0 animate-fade-up">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-foreground">
                Apareça.{" "}
                <span className="text-gradient">Conquiste.</span>{" "}
                Lucre.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Sua presença digital organizada, profissional e irresistível.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/+556192406556" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group w-full">
                  Quero crescer agora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#cases">
                <Button variant="heroOutline" size="xl" className="w-full">
                  Ver casos reais
                </Button>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {i}0+
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+40 clientes</span> satisfeitos
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative opacity-0 animate-fade-up delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Profissionais de marketing digital da Blue B"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border opacity-0 animate-scale-in delay-500">
              <p className="text-sm font-medium text-foreground">Resultados reais</p>
              <p className="text-2xl font-bold text-gradient">+300k</p>
              <p className="text-xs text-muted-foreground">visualizações orgânicas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
