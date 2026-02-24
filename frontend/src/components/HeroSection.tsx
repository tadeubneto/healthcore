import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// import heroImage from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-sm font-medium text-primary bg-accent px-4 py-1.5 rounded-full mb-6">
              Endocrinologia & Metabologia
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Cuidando da sua{" "}
              <span className="text-primary">saúde hormonal</span>{" "}
              com excelência
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Tratamento especializado e humanizado para diabetes, tireoide, 
              obesidade e distúrbios hormonais. Sua saúde merece atenção personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-base"
              >
                Agendar Consulta
                <ArrowRight size={18} />
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-medium px-7 py-3.5 rounded-lg hover:bg-accent transition-colors text-base"
              >
                Saiba Mais
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* <img
                src={heroImage}
                alt="Dr. Rafael Mendes - Endocrinologista"
                className="w-full h-[500px] lg:h-[600px] object-cover object-top"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-4 md:left-6 bg-card rounded-xl shadow-lg p-5 border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-lg">15+</span>
                </div>
                <div>
                  <p className="font-medium text-card-foreground text-sm">Anos de</p>
                  <p className="font-heading font-semibold text-card-foreground">Experiência</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
