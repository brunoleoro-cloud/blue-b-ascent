import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Blue B
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md mx-auto">
              Aqui, desejo vira direção. E direção vira resultado.
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@blueb.com.br"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+5511999999999"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Telefone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
          
          {/* Bottom */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Blue B. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
