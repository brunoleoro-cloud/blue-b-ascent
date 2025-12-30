import { Search, Users, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Identificamos oportunidades",
    description: "Analisamos seu mercado para encontrar os melhores caminhos de crescimento.",
  },
  {
    icon: Users,
    title: "Entendemos seu público",
    description: "Estudamos profundamente quem são seus clientes ideais e o que eles desejam.",
  },
  {
    icon: Zap,
    title: "Criamos conteúdos que convertem",
    description: "Desenvolvemos estratégias únicas que transformam seguidores em clientes.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 opacity-0 animate-fade-up">
            <p className="text-sm font-medium text-blue-accent uppercase tracking-wider mb-4">
              Nossa metodologia
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Como fazemos isso
            </h2>
          </div>
          
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-border" />
                )}
                
                <div className="text-center">
                  {/* Icon */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
