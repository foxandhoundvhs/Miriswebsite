import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] text-primary mb-6 uppercase">
              Miriam Kuch
            </h1>
            <p className="text-xl md:text-2xl tracking-[0.2em] text-muted-foreground mb-8 uppercase">
              Rechtliche Betreuerin
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:shadow-lg"
            >
              Kontakt aufnehmen
            </a>
          </div>
          
          <div className="relative">
            <div className="w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src={profilePhoto} 
                alt="Miriam Kuch - Rechtliche Betreuerin" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
