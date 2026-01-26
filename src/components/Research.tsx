import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check } from 'lucide-react';
import researchImage from '@/assets/research-image.avif';

const researchPoints = [
  {
    title: 'Morning Routine & Success',
    description: 'Studies consistently show that highly successful people share common morning rituals—prayer, meditation, exercise, gratitude. These habits set the tone for a productive day.',
  },
  {
    title: 'Positive Affirmations & Mindset',
    description: 'Research in positive psychology demonstrates that daily affirmations can reduce stress, increase resilience, and improve overall mental well-being when practiced consistently.',
  },
  {
    title: 'Keeping Goals at the Forefront',
    description: 'According to Dominican University research, people who write down their goals and review them daily are 42% more likely to achieve them compared to those who don\'t.',
  },
];

const Research = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="research" className="section-padding gradient-hero">
      <div ref={ref} className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image with quotes */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={researchImage}
                alt="Morning routine and journaling"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              The Research
            </h2>
            <div className="mt-4 w-24 h-1 bg-primary/50 rounded-full" />

            <div className="mt-8 space-y-8">
              {researchPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-highlight/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-highlight" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm md:text-base leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
