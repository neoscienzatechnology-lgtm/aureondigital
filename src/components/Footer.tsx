import { Linkedin, Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo.png';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/nextneotech', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/nextneotech', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/nextneotech', label: 'Facebook' },
];

export const Footer = () => {
  return (
    <footer className="py-10 bg-graphite border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img src={logo} alt="Nextneotech" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </a>
          
          {/* Copyright */}
          <p className="text-muted-foreground font-body text-sm text-center md:text-left">
            © 2025 Nextneotech. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
