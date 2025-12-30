import { 
  Search, 
  TrendingUp, 
  Users, 
  Target, 
  Layout, 
  Handshake, 
  MessageCircle, 
  Lightbulb, 
  CalendarDays 
} from "lucide-react";

const diagnosticoItems = [
  { icon: Search, text: "Estudo de mercado e concorrentes" },
  { icon: TrendingUp, text: "Análise de tendências" },
  { icon: Users, text: "Mapeamento do público" },
  { icon: Target, text: "Identificação dos diferenciais" },
];

const execucaoItems = [
  { icon: Target, text: "Estratégias claras e metas" },
  { icon: Layout, text: "Organização de processos" },
  { icon: Handshake, text: "Parcerias e conexões" },
  { icon: MessageCircle, text: "Fortalecimento da comunicação" },
  { icon: Lightbulb, text: "Treino de criatividade" },
  { icon: CalendarDays, text: "Criação de eventos e ativações" },
];

const ExecutionSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <p className="text-sm font-medium text-blue-accent uppercase tracking-wider mb-4">
            Metodologia completa
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Como executamos
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Diagnóstico */}
          <div className="opacity-0 animate-fade-up delay-100">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <h3 className="text-2xl font-display font-semibold">Diagnóstico</h3>
              </div>
              <p className="text-primary-foreground/70">
                Entendemos profundamente o seu negócio antes de agir.
              </p>
            </div>
            
            <div className="space-y-4">
              {diagnosticoItems.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <item.icon className="w-5 h-5 text-blue-accent flex-shrink-0" />
                  <p className="text-primary-foreground/90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Execução */}
          <div className="opacity-0 animate-fade-up delay-200">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <h3 className="text-2xl font-display font-semibold">Execução Estratégica</h3>
              </div>
              <p className="text-primary-foreground/70">
                Colocamos em prática com precisão e consistência.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {execucaoItems.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <item.icon className="w-5 h-5 text-blue-accent flex-shrink-0" />
                  <p className="text-sm text-primary-foreground/90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;
