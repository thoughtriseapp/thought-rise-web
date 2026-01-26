import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "ThoughtRise is a total game-changer for my mornings! It's the perfect mix of motivation and faith, with goals that help me start my day feeling inspired and ready to go.",
    author: "Taylor Wagner",
    title: "App User",
  },
  {
    quote: "I've tried many devotional apps, but ThoughtRise stands out. The combination of scripture-based affirmations and goal tracking keeps me grounded and focused every single day.",
    author: "Michelle Roberts",
    title: "App User",
  },
  {
    quote: "Starting my mornings with ThoughtRise has been transformational. I feel more connected to my faith and more intentional about my goals. Highly recommend!",
    author: "David Chen",
    title: "App User",
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
          <h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-primary">
            Our users said...
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border/50 min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current ? 'bg-primary w-6' : 'bg-primary/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
