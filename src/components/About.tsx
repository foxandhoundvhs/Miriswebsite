import { GraduationCap, Heart, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-center mb-4 text-primary uppercase">
            Über mich
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-16" />
          
          <div className="mb-16">
            <div className="flex items-start gap-6 mb-8">
              <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-4 text-foreground tracking-wide">
                  Mein Werdegang
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Geboren und aufgewachsen bin ich in Jena. Ich habe nach meiner abgeschlossenen 
                  Ausbildung zur Rechtsanwaltsfachangestellten einen Master für Betriebswirtschaft 
                  an der Friedrich-Schiller-Universität abgeschlossen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Seit November 2018 bin ich als Berufsbetreuerin tätig.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-medium text-foreground tracking-wide">
                  Meine Werte
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                In meiner Arbeit lege ich großen Wert auf eine respektvolle, transparente 
                und verlässliche Zusammenarbeit.
              </p>
            </div>

            <div className="bg-card p-8 border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-medium text-foreground tracking-wide">
                  Mein Ziel
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Menschen in schwierigen Lebenssituationen individuell zu unterstützen und 
                ihre Selbstbestimmung bestmöglich zu wahren sowie ihre vorhandenen Ressourcen 
                zu nutzen und zu erweitern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
