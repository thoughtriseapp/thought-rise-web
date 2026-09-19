import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import howItWorks from '@/assets/thought-rise-morning.png';

const steps = [
  { number: '01', title: 'It starts with you.', description: 'Thought Rise greets you by name and gives you a moment to settle in before the day gets moving, beginning with gratitude, intentional breathing, and even a simple stretch.' },
  { number: '02', title: 'Turn your attention to God’s Word.', description: 'A Scripture-based affirmation prepares your heart, followed by Scripture and a short devotional centered on one biblical theme explored throughout the week.' },
  { number: '03', title: 'Come back to your God-sized dream.', description: 'Hear your own God-sized dream spoken back to you, reflect on meaningful questions, and receive motivation, practical tools, and Scripture related to the bigger thing you’re pursuing.', dreamLink: true },
  { number: '04', title: 'Speak truth over your day.', description: 'Hear the three personal affirmations you’ve chosen for yourself. Change them anytime as your circumstances, priorities, or season changes.' },
  { number: '05', title: 'Before you go, pray.', description: 'Your morning closes with prayer and a personal send-off designed to leave you encouraged, focused, and ready to step into your day.' }
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <section id="features" className="section-padding bg-background">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">A few minutes in God’s Word.<br /><span className="text-primary">Something to carry with you all day.</span></h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">Each week, Thought Rise explores a biblical theme through short daily messages. But it’s more than a devotional. It’s a guided morning experience that helps you slow down, turn your attention toward Jesus, remember what matters, and begin your day with intention.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-4xl mx-auto mb-14 overflow-hidden rounded-3xl shadow-lg border border-border/40">
          <img src={howItWorks} alt="A quiet morning moment" loading="lazy" className="w-full h-64 md:h-80 object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-center mb-10">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">Your morning with Thought Rise</p>
          <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">More than a devotional. An experience made personal.</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-5">
          {steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }} transition={{ duration: 0.55, delay: 0.15 + index * 0.1 }} className="flex gap-5 md:gap-7 p-6 md:p-8 rounded-2xl bg-secondary/20 border border-border/50">
              <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-semibold">{step.number}</div>
              <div>
                <h4 className="font-heading text-xl md:text-2xl font-semibold text-foreground">{step.title}</h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
                {step.dreamLink && <Link to="/what-is-a-god-sized-dream" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })} className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">What do we mean by a “God-sized dream”? →</Link>}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center font-heading text-2xl md:text-3xl text-foreground max-w-2xl mx-auto">The goal isn’t to keep you in the app. <span className="text-primary">It’s to help you leave it ready to live your day differently.</span></p>
      </div>
    </section>
  );
};

export default Features;
