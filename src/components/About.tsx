import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">Meet Thought Rise</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mt-3">See what Thought Rise is all about.</h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">Take a few minutes to hear why we created Thought Rise and how this personalized, Scripture-centered experience can become part of your morning with Jesus.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.7, delay: 0.15 }} className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-border/50 bg-secondary/20" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/0QIvALHw8Sc?rel=0"
              title="Thought Rise introduction"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="text-center mt-7">
            <Link to="/our-story" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })} className="inline-flex text-primary font-semibold hover:underline">Read our story →</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
