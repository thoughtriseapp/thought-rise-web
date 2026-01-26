import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.avif';
import testimonial2 from '@/assets/testimonial-2.avif';

const testimonials = [
  {
    quote: "ThoughtRise is a total game-changer for my mornings! It's the perfect mix of motivation and faith, with goals that help me start my day feeling inspired and ready to go.",
    author: "Taylor Wagner",
    title: "App User",
    image: testimonial1,
  },
  {
    quote: "I've tried many devotional apps, but ThoughtRise stands out. The combination of scripture-based affirmations and goal tracking keeps me grounded and focused every single day.",
    author: "Michelle Roberts",
    title: "App User",
    image: testimonial2,
  },
  {
    quote: "Starting my mornings with ThoughtRise has been transformational. I feel more connected to my faith and more intentional about my goals. Highly recommend!",
    author: "Sarah Johnson",
    title: "App User",
    image: testimonial1,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="section-padding bg-primary/10">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary italic">
            Our users said...
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Large User Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-primary/20 rounded-2xl" />
              </motion.div>
            </AnimatePresence>

            {/* Quote Content */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Large quote mark */}
                  <span className="text-6xl md:text-8xl text-primary/30 font-serif leading-none">"</span>
                  
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-serif -mt-8 ml-4">
                    {testimonials[current].quote}
                  </blockquote>
                  
                  <div className="mt-8 ml-4">
                    <p className="text-xl font-semibold text-foreground">
                      {testimonials[current].author}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[current].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-10 ml-4">
                <button
                  onClick={prev}
                  className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === current ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
