import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail } from 'lucide-react';
import appStoreBadge from '@/assets/app-store-badge.avif';
import googlePlayBadge from '@/assets/google-play-badge.avif';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">Tomorrow morning can begin differently.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">A few minutes to slow down. Time in God’s Word. Your name. Your affirmations. Your God-sized dream. Prayer for the day ahead. And a little encouragement to take with you when it’s time to get up and go.</p>
          <p className="mt-6 font-heading text-2xl text-foreground">Thought Rise is free, and every morning experience is personalized for you. Start today.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="https://apps.apple.com/us/app/thought-rise/id6741752730" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105"><img src={appStoreBadge} alt="Download Thought Rise on the App Store" className="h-12 md:h-14 w-auto" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.thoughtrise.mobile.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105"><img src={googlePlayBadge} alt="Get Thought Rise on Google Play" className="h-12 md:h-14 w-auto" /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-center items-center gap-3 text-center">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center"><Mail className="w-4 h-4 text-primary" /></div>
          <span className="text-muted-foreground">Questions? We’d love to hear from you.</span>
          <a href="mailto:hello@thoughtriseapp.com" className="text-muted-foreground hover:text-primary transition-colors">hello@thoughtriseapp.com</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
