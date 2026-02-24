const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="font-heading text-lg font-semibold text-background mb-2">
          Dr. Rafael Mendes
        </p>
        <p className="text-background/60 text-sm mb-4">
          Endocrinologista | CRM/SP 123456 | RQE 78901
        </p>
        <p className="text-background/40 text-xs">
          © {new Date().getFullYear()} Dr. Rafael Mendes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
