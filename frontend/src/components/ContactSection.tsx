import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "(11) 99999-9999", href: "tel:+5511999999999" },
  { icon: Mail, label: "contato@drrafaelmendes.com.br", href: "mailto:contato@drrafaelmendes.com.br" },
  { icon: MapPin, label: "Av. Paulista, 1000 - Sala 501, São Paulo - SP", href: "#" },
  { icon: Clock, label: "Seg a Sex: 08h às 18h", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary bg-accent px-4 py-1.5 rounded-full">
            Contato
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Agende sua Consulta
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para agendar sua consulta ou tirar dúvidas. 
            Estamos prontos para cuidar da sua saúde.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-card rounded-xl p-6 border border-border hover:shadow-md hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <info.icon size={22} className="text-primary" />
              </div>
              <p className="text-card-foreground text-sm font-medium">{info.label}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base"
          >
            Agendar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
