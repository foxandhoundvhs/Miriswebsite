import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-light text-lg mb-1 text-primary tracking-wide">Miriam Kuch</p>
            <p className="text-sm text-muted-foreground">Professionelle rechtliche Betreuung – Jena, Thüringen</p>
          </div>
          
          <div className="text-center md:text-right flex flex-col gap-3">
            <Link 
              to="/impressum" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alle Rechte vorbehalten
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
