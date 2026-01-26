import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <a 
                  href="mailto:hello@thoughtriseapp.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@thoughtriseapp.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">Atlanta, Georgia</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="font-serif text-2xl text-primary italic mb-2">
                We're here to help!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have questions about the app, want to share feedback, or just want to say hello—reach out anytime. We typically respond within 24-48 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;