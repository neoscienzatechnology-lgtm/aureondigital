import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, Palette, Target, Code } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Marketing de Performance',
    description:
      'Estratégias orientadas por dados para maximizar seu ROI. Análise profunda, otimização contínua e resultados comprovados.',
  },
  {
    icon: Palette,
    title: 'Branding & Posicionamento',
    description:
      'Construção de marcas memoráveis que se conectam com seu público. Identidade visual, tom de voz e posicionamento estratégico.',
  },
  {
    icon: Target,
    title: 'Tráfego Pago',
    description:
      'Gestão especializada de campanhas em Meta Ads, Google Ads e LinkedIn Ads. Máximo alcance, mínimo desperdício.',
  },
  {
    icon: Code,
    title: 'Desenvolvimento Web & Design',
    description:
      'Sites e aplicações web modernas, responsivas e otimizadas. Design premium que converte visitantes em clientes.',
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,65%,52%,0.03)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Soluções que{' '}
            <span className="text-gradient-gold">impulsionam</span> seu negócio
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Oferecemos um ecossistema completo de serviços digitais para transformar
            sua presença online e gerar resultados extraordinários.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 lg:p-10 rounded-xl bg-card border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(43,65%,52%,0.15)] overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl lg:text-2xl font-heading font-semibold mb-4 text-foreground group-hover:text-gradient-gold transition-all duration-300">
                  {service.title}
                </h3>
                <p className="relative z-10 text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
