import { motion } from "framer-motion";
import { GraduationCap, Award, Users } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "CRM/SP 123456", sublabel: "RQE 78901" },
  { icon: Award, label: "Membro SBEM", sublabel: "Soc. Brasileira de Endocrinologia" },
  { icon: Users, label: "+5.000", sublabel: "Pacientes atendidos" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary bg-accent px-4 py-1.5 rounded-full">
              Sobre o Médico
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Dr. Rafael Mendes
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Médico endocrinologista formado pela Universidade de São Paulo (USP), 
                com residência em Clínica Médica e Endocrinologia no Hospital das Clínicas.
              </p>
              <p>
                Especialista em diabetes, tireoide e obesidade, com mais de 15 anos de 
                experiência no atendimento clínico. Membro titular da Sociedade Brasileira 
                de Endocrinologia e Metabologia (SBEM).
              </p>
              <p>
                Acredito em uma medicina personalizada, baseada em evidências e centrada 
                no paciente. Cada pessoa é única e merece um plano de tratamento adequado 
                às suas necessidades.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-5 bg-card rounded-xl p-6 border border-border"
              >
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center shrink-0">
                  <stat.icon size={26} className="text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-card-foreground text-lg">
                    {stat.label}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
