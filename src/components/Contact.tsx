import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail } from 'lucide-react';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have questions or want to connect? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex justify-center items-center gap-3 mb-16">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <a 
              href="mailto:hello@thoughtriseapp.com" 
              className="text-lg text-muted-foreground hover:text-primary transition-colors"
            >
              hello@thoughtriseapp.com
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;