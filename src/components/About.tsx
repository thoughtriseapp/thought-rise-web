import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import about1 from '@/assets/about-1.avif';
import about2 from '@/assets/about-2.avif';

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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary italic">
            Meet Julie & Brianna
          </h2>
          <p className="mt-2 font-serif text-xl md:text-2xl text-foreground uppercase tracking-wider">
            The Mother-Daughter Duo Behind Thought Rise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={about1}
                    alt="Julie Kerr and Brianna Collins"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={about2}
                    alt="ThoughtRise Founders"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
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
              <p className="font-serif text-2xl md:text-3xl text-primary italic">
                A little about us
              </p>
              <div className="h-0.5 w-full bg-primary/30 mt-1" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! We're Julie Kerr and Brianna Collins, a mother-daughter team with a shared passion for faith, personal growth, and helping others rise to their fullest potential. With backgrounds spanning ministry, entrepreneurship, and creative development, we've combined our unique gifts to create ThoughtRise.
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
