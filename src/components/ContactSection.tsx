import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Mensagem enviada com sucesso!', {
      description: 'Entraremos em contato em breve.',
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Map Placeholder */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M0%200L100%200L100%20100L0%20100Z%22%20fill%3D%22none%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%220.5%22%2F%3E%3Cpath%20d%3D%22M25%200L25%20100M50%200L50%20100M75%200L75%20100M0%2025L100%2025M0%2050L100%2050M0%2075L100%2075%22%20stroke%3D%22%23D4AF37%22%20stroke-width%3D%220.2%22%2F%3E%3C%2Fsvg%3E')]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-heading text-sm font-semibold tracking-widest uppercase mb-4 block">
              Contato
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
              Vamos criar algo{' '}
              <span className="text-gradient-gold">extraordinário</span> juntos
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-10">
              Pronto para elevar sua marca a um novo patamar? Entre em contato e
              descubra como podemos transformar sua presença digital.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    Localização
                  </h4>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    Telefone
                  </h4>
                  <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    E-mail
                  </h4>
                  <p className="text-muted-foreground">contato@aureondigital.com.br</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-heading font-medium text-foreground mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-heading font-medium text-foreground mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-heading font-medium text-foreground mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
