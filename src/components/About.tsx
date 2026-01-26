import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutFounders from '@/assets/about-founders.jpg';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary italic">
            Meet Julie & Brianna
          </h2>
          <p className="mt-3 font-serif text-2xl md:text-3xl text-foreground uppercase tracking-wider">
            The Mother-Daughter Duo Behind Thought Rise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Square Image with Rounded Corners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="aspect-square max-w-md w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutFounders}
                alt="Julie Kern and Brianna Collins"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <p className="font-serif text-3xl md:text-4xl text-primary italic">
                A little about us
              </p>
              <div className="h-0.5 w-full bg-primary/30 mt-1" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! We're Julie Kern and Brianna Collins, a mother-daughter team with a shared passion for faith, personal growth, and helping others rise to their fullest potential. With backgrounds spanning ministry, entrepreneurship, and creative development, we've combined our unique gifts to create ThoughtRise.
              </p>
              <p>
                Our app was born from our own morning routines—practices that transformed how we approach each day. We believe that when you start your morning with intention, scripture, and gratitude, you set the stage for a life of purpose and joy.
              </p>
              <p>
                ThoughtRise is more than an app; it's an extension of our hearts. We're here to walk alongside you, providing daily encouragement and tools to help you grow spiritually, mentally, and emotionally. Welcome to the ThoughtRise family!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;