import { Mail, Phone, MapPin, Printer, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-xl font-light tracking-[0.2em] text-primary hover:opacity-80 transition-opacity uppercase">
            Miriam Kuch
          </Link>
        </div>
      </header>

      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-center mb-4 text-primary uppercase">
              Impressum
            </h1>
            <div className="w-24 h-0.5 bg-primary mx-auto mb-16" />

            <div className="bg-card border border-border p-8 md:p-12">
              <div className="mb-10">
                <h2 className="text-lg font-medium mb-4 text-foreground tracking-wide">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Miriam Kuch<br />
                  Professionelle rechtliche Betreuung<br />
                  Rudolstädter Straße 53<br />
                  07745 Jena
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-lg font-medium mb-6 text-foreground tracking-wide">
                  Kontakt
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <div className="text-muted-foreground text-sm">
                      <p>Telefon: 03641 355414</p>
                      <p>Telefon: 03641 507360</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <p className="text-muted-foreground text-sm">Mobil: 0175 9271231</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Printer className="w-5 h-5 text-primary" />
                    <p className="text-muted-foreground text-sm">Fax: 03641 507361</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href="mailto:Miriam.Kuch@Betreuerjena.de" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Miriam.Kuch@Betreuerjena.de
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      Rudolstädter Straße 53<br />
                      07745 Jena
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-lg font-medium mb-4 text-foreground tracking-wide">
                  Berufsbezeichnung
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Berufsbetreuerin<br />
                  Bestellung durch das Amtsgericht Jena
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm tracking-wide"
                >
                  ← Zurück zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Miriam Kuch – Alle Rechte vorbehalten
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
