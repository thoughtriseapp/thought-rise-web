import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import feature1 from '@/assets/feature-1.avif';
import feature2 from '@/assets/feature-2.avif';
import feature3 from '@/assets/feature-3.avif';

const features = [
  {
    number: '01',
    title: 'Daily Motivation',
    description: 'Start each day with curated motivational content. Uplifting messages, affirmations, and inspirational quotes tailored to your preferences.',
    image: feature1,
  },
  {
    number: '02',
    title: 'Scripture-Based Affirmations',
    description: 'Grounded in faith, our scripture-based affirmations help you connect with your spiritual side. Start your morning with purpose and God\'s Word.',
    image: feature2,
  },
  {
    number: '03',
    title: 'Goal Reminders',
    description: 'Stay on track with personalized goal reminders. Set and achieve your goals with daily check-ins and encouragement to keep you focused.',
    image: feature3,
  },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="features" className="section-padding bg-background">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            App Features
          </h2>
          <div className="mt-4 w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group text-center"
            >
              {/* Feature Image */}
              <div className="relative mb-6 mx-auto w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-secondary rounded-full" />
                <div className="absolute inset-2 overflow-hidden rounded-full">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Number badge */}
                <span className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                  {feature.number}
                </span>
              </div>

              {/* Feature Content */}
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
