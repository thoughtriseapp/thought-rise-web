import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">Meet Thought Rise</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mt-3">See what Thought Rise is all about.</h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">Take a few minutes to hear why we created Thought Rise and how this personalized, Scripture-centered experience can become part of your morning with Jesus.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.7, delay: 0.15 }} className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-border/50 bg-secondary/20 aspect-video">
            {isPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/0QIvALHw8Sc?autoplay=1&rel=0"
                title="Thought Rise introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="group absolute inset-0 w-full h-full text-left overflow-hidden"
                aria-label="Play Thought Rise introduction video"
              >
                <img
                  src="https://i.ytimg.com/vi/0QIvALHw8Sc/maxresdefault.jpg"
                  alt="Thought Rise video"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-background/95 text-primary shadow-xl transition-transform duration-200 group-hover:scale-105">
                    <Play className="w-9 h-9 md:w-11 md:h-11 ml-1" fill="currentColor" />
                  </span>
                </span>
              </button>
            )}
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
