import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutFounders from '@/assets/about-founders.jpg';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">How Thought Rise began</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mt-3">It started on Mother’s Day.</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex justify-center">
            <div className="aspect-square max-w-md w-full overflow-hidden rounded-2xl shadow-xl"><img src={aboutFounders} alt="Julie Kern and Brianna Collins, the mother-daughter team behind Thought Rise" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} transition={{ duration: 0.7, delay: 0.3 }} className="space-y-5 text-muted-foreground leading-relaxed">
            <p>On Mother’s Day 2024, Julie Kern was spending a quiet morning in prayer at one of her favorite beach spots when the beginnings of Thought Rise started taking shape.</p>
            <p>The idea was deeply personal: a morning experience that could greet you by name and bring together gratitude, Scripture, personalized affirmations, and reminders of the God-sized dream you don’t want to lose sight of.</p>
            <p>When Julie shared the idea with her daughter, Brianna Collins, they realized their backgrounds fit the vision in a pretty remarkable way. Julie brought more than 20 years in software development and her experience as an entrepreneur. Brianna brought her creativity and experience as a Christian designer and business owner.</p>
            <p>Together, they began building Thought Rise.</p>
            <p className="font-heading text-xl text-foreground">The experience has continued to grow, but the heart behind it hasn’t changed: helping women begin their mornings rooted in truth, reminded of who they are and whose they are, and encouraged to keep moving toward the bigger things God has placed on their hearts.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
