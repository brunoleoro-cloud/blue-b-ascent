import { Check, Instagram, Play, Image, Camera } from "lucide-react";

const packageItems = [
  {
    icon: Play,
    platform: "TikTok",
    items: ["2 vídeos por semana"],
  },
  {
    icon: Instagram,
    platform: "Instagram",
    items: [
      "2 vídeos por semana",
      "3 artes de feed por semana",
      "4 artes de stories por semana",
    ],
  },
  {
    icon: Image,
    platform: "Organização",
    items: ["Organização do conteúdo interno"],
  },
  {
    icon: Camera,
    platform: "Produção",
    items: ["Fotos e vídeos profissionais a cada 2 meses (com parceiro indicado)"],
  },
];

const benefits = [
  "Mais vendas",
  "Mais autoridade",
  "Imagem profissional",
  "Conteúdo que engaja",
  "Feed impecável",
  "Você mais seguro e visível",
];

const PackagesSection = () => {
  return (
    <section id="pacotes" className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 opacity-0 animate-fade-up">
            <p className="text-sm font-medium text-blue-accent uppercase tracking-wider mb-4">
              O que você recebe
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Pacote para aparecer e crescer
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Package details */}
            <div className="opacity-0 animate-fade-up delay-100">
              <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  Entregáveis mensais
                </h3>
                
                <div className="space-y-6">
                  {packageItems.map((pkg) => (
                    <div key={pkg.platform} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center flex-shrink-0">
                        <pkg.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">{pkg.platform}</p>
                        <ul className="space-y-1">
                          {pkg.items.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Check className="w-4 h-4 text-blue-accent mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="opacity-0 animate-fade-up delay-200">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                <h3 className="text-xl font-display font-semibold mb-6">
                  O que você ganha
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/10"
                    >
                      <Check className="w-5 h-5 text-blue-accent flex-shrink-0" />
                      <p className="font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                  <p className="text-primary-foreground/70 text-sm">
                    Consultoria completa incluída para maximizar seus resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
