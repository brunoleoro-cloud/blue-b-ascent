import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/+556192406556";

const CTASection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 opacity-0 animate-fade-up">
            Pronto para crescer?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto opacity-0 animate-fade-up delay-100">
            Entre em contato com a gente e descubra como podemos transformar sua presença digital.
          </p>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="opacity-0 animate-fade-up delay-200 inline-block">
            <Button variant="cta" size="lg" className="text-lg px-10 py-6">
              Fale conosco
            </Button>
          </a>

          {/* Contatos */}
          <div className="mt-14 grid sm:grid-cols-3 gap-6 opacity-0 animate-fade-up delay-300">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">WhatsApp</p>
                <p className="text-muted-foreground text-sm">(61) 9 2406-6556</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/bluebmkt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Instagram</p>
                <p className="text-muted-foreground text-sm">@bluebmkt</p>
              </div>
            </a>

            <a
              href="mailto:contato@bluebmkt.com.br"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">E-mail</p>
                <p className="text-muted-foreground text-sm">contato@bluebmkt.com.br</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
