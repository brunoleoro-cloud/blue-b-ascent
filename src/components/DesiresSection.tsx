import { TrendingUp, Sparkles, Star } from "lucide-react";

const desires = [
  {
    icon: TrendingUp,
    title: "Vender mais",
    description: "Transforme seguidores em clientes fiéis",
  },
  {
    icon: Sparkles,
    title: "Ter mais criatividade",
    description: "Conteúdos únicos que se destacam",
  },
  {
    icon: Star,
    title: "Valorizar sua imagem",
    description: "Presença profissional e memorável",
  },
];

const DesiresSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 opacity-0 animate-fade-up">
            <p className="text-sm font-medium text-blue-accent uppercase tracking-wider mb-4">
              O que você busca?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Três desejos, um caminho
            </h2>
          </div>
          
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {desires.map((desire, index) => (
              <div
                key={desire.title}
                className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-blue-accent/30 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-blue-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <desire.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {desire.title}
                </h3>
                <p className="text-muted-foreground">
                  {desire.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom text */}
          <div className="text-center opacity-0 animate-fade-up delay-400">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted">
              <div className="w-2 h-2 rounded-full bg-blue-accent animate-pulse" />
              <p className="text-sm sm:text-base font-medium text-foreground">
                Tudo isso direcionado para um único objetivo:{" "}
                <span className="text-gradient font-semibold">gerar resultados reais.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesiresSection;
