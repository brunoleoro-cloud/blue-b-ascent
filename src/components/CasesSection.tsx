import { Eye, TrendingUp, Award, Zap, Play } from "lucide-react";
import caseBernardo from "@/assets/case-bernardo.jpg";
import caseEvoclub from "@/assets/case-evoclub.jpg";

const cases = [
  {
    name: "Bernardo Mello",
    image: caseBernardo,
    subtitle: "Empresário & Influenciador",
    stats: [
      { icon: Eye, value: "300k+", label: "visualizações orgânicas" },
      { icon: Play, value: "10-60k", label: "views por Reels" },
      { icon: Award, value: "Autoridade", label: "e consistência" },
      { icon: TrendingUp, value: "Conteúdos", label: "virais" },
    ],
    highlights: [
      "De 8 para 300 mil visualizações orgânicas",
      "Posicionamento sólido no mercado",
      "Maior autoridade e visibilidade",
    ],
  },
  {
    name: "Evo Club",
    image: caseEvoclub,
    subtitle: "Academia & Lifestyle",
    stats: [
      { icon: Eye, value: "3-25k", label: "views por Reels" },
      { icon: Zap, value: "Alto", label: "engajamento" },
      { icon: Award, value: "Marca", label: "humana e real" },
      { icon: TrendingUp, value: "Conteúdo", label: "autêntico" },
    ],
    highlights: [
      "Reels de 3 mil a 25 mil visualizações",
      "Conteúdo autêntico do dia a dia",
      "Marca dinâmica e conectada",
    ],
  },
];

const CasesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <p className="text-sm font-medium text-blue-accent uppercase tracking-wider mb-4">
            Resultados comprovados
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Cases de sucesso
          </h2>
        </div>
        
        {/* Cases */}
        <div className="space-y-24">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.name}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center opacity-0 animate-fade-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src={caseItem.image}
                    alt={caseItem.name}
                    className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-display font-bold text-primary-foreground">
                      {caseItem.name}
                    </h3>
                    <p className="text-primary-foreground/80">{caseItem.subtitle}</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {caseItem.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 rounded-xl bg-muted/50 border border-border"
                    >
                      <stat.icon className="w-5 h-5 text-blue-accent mb-2" />
                      <p className="text-2xl font-display font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                {/* Highlights */}
                <div className="space-y-3">
                  {caseItem.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-accent mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
