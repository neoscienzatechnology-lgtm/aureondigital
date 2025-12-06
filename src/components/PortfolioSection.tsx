import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

import case1 from '@/assets/case-1.jpg';
import case2 from '@/assets/case-2.jpg';
import case3 from '@/assets/case-3.jpg';
import case4 from '@/assets/case-4.jpg';
import case5 from '@/assets/case-5.jpg';
import case6 from '@/assets/case-6.jpg';

interface Case {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results: {
    label: string;
    value: string;
    icon: typeof TrendingUp;
  }[];
}

const cases: Case[] = [
  {
    id: 1,
    title: 'E-commerce Fashion',
    category: 'Tráfego Pago',
    image: case1,
    description: 'Estratégia completa de tráfego pago para e-commerce de moda, resultando em crescimento exponencial de vendas online.',
    results: [
      { label: 'Aumento em vendas', value: '+340%', icon: TrendingUp },
      { label: 'ROAS médio', value: '8.5x', icon: DollarSign },
      { label: 'Novos clientes', value: '12.000+', icon: Users },
    ],
  },
  {
    id: 2,
    title: 'Startup SaaS B2B',
    category: 'Branding',
    image: case2,
    description: 'Rebranding completo e posicionamento estratégico para startup de tecnologia no mercado B2B.',
    results: [
      { label: 'Brand awareness', value: '+280%', icon: TrendingUp },
      { label: 'Leads qualificados', value: '+450%', icon: Users },
      { label: 'Ticket médio', value: '+65%', icon: DollarSign },
    ],
  },
  {
    id: 3,
    title: 'Clínica Premium',
    category: 'Marketing Digital',
    image: case3,
    description: 'Estratégia digital integrada para clínica de estética, com foco em captação de pacientes de alto valor.',
    results: [
      { label: 'Agendamentos', value: '+520%', icon: TrendingUp },
      { label: 'Custo por lead', value: '-70%', icon: DollarSign },
      { label: 'Taxa de conversão', value: '32%', icon: Users },
    ],
  },
  {
    id: 4,
    title: 'Imobiliária de Luxo',
    category: 'Desenvolvimento Web',
    image: case4,
    description: 'Site institucional premium com integração de catálogo de imóveis e sistema de agendamento.',
    results: [
      { label: 'Visitas mensais', value: '50.000+', icon: Users },
      { label: 'Tempo no site', value: '+180%', icon: TrendingUp },
      { label: 'Leads imobiliários', value: '+400%', icon: DollarSign },
    ],
  },
  {
    id: 5,
    title: 'Restaurante Gourmet',
    category: 'Redes Sociais',
    image: case5,
    description: 'Gestão de redes sociais e criação de conteúdo visual premium para restaurante de alta gastronomia.',
    results: [
      { label: 'Seguidores', value: '+15.000', icon: Users },
      { label: 'Engajamento', value: '+420%', icon: TrendingUp },
      { label: 'Reservas online', value: '+250%', icon: DollarSign },
    ],
  },
  {
    id: 6,
    title: 'Fintech Inovadora',
    category: 'Performance',
    image: case6,
    description: 'Campanhas de aquisição de usuários e otimização de funil para aplicativo financeiro.',
    results: [
      { label: 'Downloads', value: '100.000+', icon: Users },
      { label: 'CAC reduzido', value: '-55%', icon: DollarSign },
      { label: 'LTV/CAC', value: '4.2x', icon: TrendingUp },
    ],
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-graphite relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Cases de{' '}
            <span className="text-gradient-gold">sucesso</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Conheça alguns dos projetos que transformaram negócios e geraram
            resultados extraordinários para nossos clientes.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              onClick={() => setSelectedCase(item)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden bg-card border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(43,65%,52%,0.15)]">
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-heading font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-heading font-semibold rounded-full mb-4">
                  {selectedCase.category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                  {selectedCase.title}
                </h3>
                <p className="text-muted-foreground font-body mb-8">
                  {selectedCase.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {selectedCase.results.map((result) => (
                    <div
                      key={result.label}
                      className="text-center p-4 rounded-xl bg-background/50 border border-border"
                    >
                      <result.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-heading font-bold text-gradient-gold">
                        {result.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="gold" size="lg" className="w-full mt-8">
                  Quero resultados assim
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
