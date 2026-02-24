import { motion } from "framer-motion";
import { Activity, Heart, Scale, Stethoscope, Pill, Brain } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Diabetes",
    description: "Diagnóstico, tratamento e acompanhamento de diabetes tipo 1, tipo 2 e gestacional.",
  },
  {
    icon: Stethoscope,
    title: "Tireoide",
    description: "Avaliação e tratamento de hipotireoidismo, hipertireoidismo e nódulos tireoidianos.",
  },
  {
    icon: Scale,
    title: "Obesidade",
    description: "Programa personalizado para emagrecimento saudável e controle de peso a longo prazo.",
  },
  {
    icon: Heart,
    title: "Colesterol",
    description: "Controle de dislipidemias e prevenção de doenças cardiovasculares.",
  },
  {
    icon: Pill,
    title: "Reposição Hormonal",
    description: "Terapia hormonal para menopausa, andropausa e deficiências hormonais.",
  },
  {
    icon: Brain,
    title: "Distúrbios da Hipófise",
    description: "Investigação e tratamento de doenças da glândula hipófise e suprarrenal.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="especialidades" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary bg-accent px-4 py-1.5 rounded-full">
            Especialidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendimento completo e especializado nas principais áreas da endocrinologia e metabologia.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="bg-card rounded-xl p-7 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
