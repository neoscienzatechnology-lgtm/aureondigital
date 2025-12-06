import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, TrendingUp, Crown, Shield } from 'lucide-react';
import aboutMockup from '@/assets/about-mockup.jpg';

const values = [
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Sempre à frente das tendências',
  },
  {
    icon: TrendingUp,
    title: 'Performance',
    description: 'Resultados mensuráveis e escaláveis',
  },
  {
    icon: Crown,
    title: 'Exclusividade',
    description: 'Estratégias sob medida para sua marca',
  },
  {
    icon: Shield,
    title: 'Confiança',
    description: 'Transparência em cada projeto',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,hsl(43,65%,52%,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
              <img 
                src={aboutMockup} 
                alt="Aureon Digital - Dashboard de Marketing Digital Premium" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[linear-gradient(90deg,hsl(43,65%,52%)_0%,hsl(43,65%,38%)_100%)]" />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4 block">
              Sobre Nós
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
              Transformamos visão em{' '}
              <span className="text-gradient-gold">resultados digitais</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              A Aureon Digital nasceu da paixão por inovação e da busca incessante por
              excelência. Combinamos estratégia, criatividade e tecnologia para criar
              soluções digitais que não apenas impressionam, mas também convertem.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Nossa equipe de especialistas trabalha lado a lado com cada cliente,
              entendendo suas necessidades únicas e desenvolvendo estratégias
              personalizadas que geram impacto real no mercado.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
