import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';
import logo from '@/assets/thought-rise-logo.avif';

// Custom icons for Pinterest and TikTok
const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.93s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.14.89 2.74.1.12.11.22.08.34l-.33 1.36c-.05.22-.18.27-.41.16-1.54-.72-2.5-2.96-2.5-4.76 0-3.88 2.82-7.44 8.13-7.44 4.27 0 7.59 3.04 7.59 7.11 0 4.24-2.68 7.66-6.4 7.66-1.25 0-2.43-.65-2.83-1.42l-.77 2.94c-.28 1.07-1.03 2.42-1.54 3.24A12 12 0 1 0 12 0z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Research', href: '#research' },
  { name: 'About Us', href: '#about' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/thoughtriseapp' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61573748635308' },
  { name: 'Pinterest', icon: PinterestIcon, href: 'https://www.pinterest.com/thoughtriseapp/' },
  { name: 'TikTok', icon: TikTokIcon, href: 'https://www.tiktok.com/@thoughtriseapp' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@thoughtriseapp.com' },
];

const Footer = () => {
  return (
    <footer className="bg-primary/70 py-12 md:py-16">
      <div className="container-narrow mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="Thought Rise" 
            className="h-16 md:h-20 w-auto"
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
              target="_blank"
              rel="noopener noreferrer"
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
