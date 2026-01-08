import { Users, FileText, Home, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Personensorge",
      description: "Unterstützung bei persönlichen Angelegenheiten und der Wahrnehmung persönlicher Rechte"
    },
    {
      icon: FileText,
      title: "Behördenangelegenheiten",
      description: "Hilfe bei der Kommunikation mit Ämtern und Behörden sowie bei Anträgen"
    },
    {
      icon: Home,
      title: "Vermögenssorge",
      description: "Verwaltung von Vermögen und finanzielle Angelegenheiten im Interesse der betreuten Person. Hilfe bei Verhinderung bzw. Beseitigung von Verschuldung."
    },
    {
      icon: Briefcase,
      title: "Gesundheitssorge",
      description: "Begleitung bei medizinischen Entscheidungen und Koordination von Behandlungen"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-center mb-4 text-primary uppercase">
            Leistungsbereiche
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Als Berufsbetreuerin unterstütze ich in verschiedenen Lebensbereichen – 
            immer mit dem Ziel, Ihre Selbstbestimmung zu wahren
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-card p-10 hover:bg-muted/50 transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 border border-primary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-foreground tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
