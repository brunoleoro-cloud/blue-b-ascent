import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center opacity-0 animate-fade-up">
          {/* Heading */}
          <p className="text-sm font-medium text-blue-accent uppercase tracking-wider mb-4">
            Investimento
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Pronto para crescer?
          </h2>
          
          {/* Price card */}
          <div className="bg-card rounded-2xl border border-border p-8 sm:p-12 shadow-lg mb-8">
            <div className="mb-8">
              <p className="text-muted-foreground mb-2">Pacote de serviço + consultoria completa</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl sm:text-6xl font-display font-bold text-foreground">
                  R$ 2.500
                </span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Gestão completa", "Consultoria inclusa", "Suporte dedicado"].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-blue-accent" />
                  {feature}
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <a href="https://wa.me/+556192406556" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Quero meu crescimento agora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          
          {/* Trust text */}
          <p className="text-sm text-muted-foreground">
            Sem fidelidade. Cancele quando quiser. Resultados desde o primeiro mês.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
