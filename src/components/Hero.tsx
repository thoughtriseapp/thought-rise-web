import { motion } from 'framer-motion';
import iphoneMockup from '@/assets/iphone-mockup.avif';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-70" />
      
      {/* Decorative blob shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/30 blob-shape blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/20 blob-shape blur-2xl" />

      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            <div className="relative">
              {/* Decorative circle behind phone */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-br from-accent/40 to-secondary/60 rounded-full blur-sm" />
              <img
                src={iphoneMockup}
                alt="ThoughtRise App on iPhone"
                className="relative z-10 w-64 md:w-80 lg:w-96 drop-shadow-2xl animate-float"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-wide uppercase">
              Elevate Your Days,
              <br />
              <span className="text-primary">Transform Your</span>
              <br />
              Mornings.
            </h1>
            
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ThoughtRise is a devotional app designed to align your mindset with purpose. Receive daily scripture, motivational content, and goal tracking tools that help you start each day grounded and focused on what matters most.
            </p>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--secondary))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
