import { Mail, Phone, MapPin, Printer } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-center mb-4 text-primary uppercase">
            Kontakt
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-center text-foreground font-medium text-xl mb-4 tracking-wide">
            Professionelle rechtliche Betreuung
          </p>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
            Ich freue mich auf Ihre Nachricht.
          </p>

          <div className="bg-card border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-14 h-14 border border-primary flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium mb-2 text-foreground tracking-wide uppercase">Telefon</h3>
                <a href="tel:03641355414" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  03641 355414
                </a>
                <a href="tel:03641507360" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                  03641 507360
                </a>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 border border-primary flex items-center justify-center mx-auto mb-4">
                  <Printer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium mb-2 text-foreground tracking-wide uppercase">Fax</h3>
                <p className="text-muted-foreground text-sm">
                  03641 507361
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 border border-primary flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium mb-2 text-foreground tracking-wide uppercase">E-Mail</h3>
                <a href="mailto:Miriam.Kuch@Betreuerjena.de" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Miriam.Kuch@Betreuerjena.de
                </a>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 border border-primary flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium mb-2 text-foreground tracking-wide uppercase">Büroadresse</h3>
                <p className="text-muted-foreground text-sm">
                  Rudolstädter Straße 53<br />
                  07745 Jena
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-10">
              <h3 className="text-lg font-medium mb-6 text-center text-foreground tracking-wide">Öffnungszeiten</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground">Montag & Donnerstag</span>
                  <span className="text-muted-foreground">8:30–16:30 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Dienstag</span>
                  <span className="text-muted-foreground">8:30–16:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Mittwoch</span>
                  <span className="text-muted-foreground">8:30–14:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Freitag</span>
                  <span className="text-muted-foreground">Nach Vereinbarung</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground leading-relaxed">
                Wenn Sie Fragen haben, melden Sie sich bitte zu meinen Öffnungszeiten. 
                Ich nehme mir gerne Zeit für ein persönliches Gespräch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
