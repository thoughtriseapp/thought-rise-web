import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '@/assets/thought-rise-logo.avif';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Research', href: '#research' },
  { name: 'About Us', href: '#about' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-primary py-12 md:py-16">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="Thought Rise" 
            className="h-16 md:h-20 w-auto brightness-0 invert opacity-90"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5 text-primary-foreground" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/20 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ThoughtRise. All rights reserved.</p>
          <Link 
            to="/privacy-policy" 
            className="hover:text-primary-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
