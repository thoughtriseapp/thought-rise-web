import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Target } from 'lucide-react';
import iphoneMockup from '@/assets/iphone-mockup.avif';
import appStoreBadge from '@/assets/app-store-badge.avif';
import googlePlayBadge from '@/assets/google-play-badge.avif';

const valueProps = [
  {
    icon: BookOpen,
    title: 'Scripture Affirmations',
    description: 'Faith-based daily encouragement'
  },
  {
    icon: Sparkles,
    title: 'Powerful Motivation',
    description: 'Start each morning inspired'
  },
  {
    icon: Target,
    title: 'Goal Reminders',
    description: 'Stay focused on your dreams'
  }
];

const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Base background - ensures no pure white areas */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-secondary/40 to-accent/25" />
      
      {/* Flowing ambient blobs - faster, more intense */}
      <motion.div 
        animate={{ 
          x: [0, 120, -60, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.4, 0.85, 1],
          borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "50% 50% 40% 60% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[60vh] bg-accent/45 blur-[80px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 50, 0],
          y: [0, -50, 30, 0],
          scale: [1, 0.8, 1.2, 1],
          borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 50% 50% / 50% 40% 60% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-10 -right-1/4 w-[60vw] h-[50vh] bg-primary/35 blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, 70, -90, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
          borderRadius: ["50% 50% 40% 60% / 40% 60% 40% 60%", "40% 60% 60% 40% / 60% 40% 60% 40%", "60% 40% 50% 50% / 50% 50% 50% 50%", "50% 50% 40% 60% / 40% 60% 40% 60%"]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/4 left-1/4 w-[45vw] h-[40vh] bg-highlight/20 blur-[70px]" 
      />
      {/* Bottom-left coverage blob to prevent white blending */}
      <motion.div 
        animate={{ 
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.9, 1],
          borderRadius: ["50% 50% 60% 40% / 50% 40% 60% 50%", "40% 60% 50% 50% / 60% 50% 40% 50%", "60% 40% 40% 60% / 40% 60% 50% 50%", "50% 50% 60% 40% / 50% 40% 60% 50%"]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 -left-1/4 w-[50vw] h-[40vh] bg-secondary/50 blur-[90px]" 
      />

      <div className="container-narrow mx-auto pt-24 pb-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Headline - order 1 on mobile */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="order-1 lg:order-2 text-center lg:text-left w-full">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-wide">
              <span className="text-foreground text-6xl lg:whitespace-nowrap">Elevate Your Days,</span>
              <br />
              <span className="text-primary text-6xl">Transform Your Mornings.</span>
            </h1>

            {/* Description - desktop only */}
            <p className="hidden lg:block mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">Thought Rise is a revolutionary Christian app that greets you by name and delivers a personalized audio experience designed to uplift and inspire. </p>

            {/* App Store Buttons - desktop only */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="hidden lg:flex mt-8 flex-wrap gap-4">
              <a href="https://apps.apple.com/us/app/thought-rise/id6741752730" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105">
                <img src={appStoreBadge} alt="Download on the App Store" className="h-12 md:h-14 w-auto" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.thoughtrise.mobile.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105">
                <img src={googlePlayBadge} alt="Get it on Google Play" className="h-12 md:h-14 w-auto" />
              </a>
            </motion.div>
          </motion.div>

          {/* App Store Buttons - mobile only, order 2 */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex lg:hidden order-2 flex-wrap gap-4 justify-center">
            <a href="https://apps.apple.com/us/app/thought-rise/id6741752730" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105">
              <img src={appStoreBadge} alt="Download on the App Store" className="h-12 w-auto" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.thoughtrise.mobile.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105">
              <img src={googlePlayBadge} alt="Get it on Google Play" className="h-12 w-auto" />
            </a>
          </motion.div>

          {/* iPhone Mockup - order 3 on mobile, order 1 on desktop */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative order-3 lg:order-1 flex justify-center mt-4 lg:mt-0">
            <div className="relative">
              {/* Very subtle glow behind phone */}
              <div className="absolute inset-0 -m-8 bg-secondary/20 rounded-full blur-2xl" />
              <img src={iphoneMockup} alt="ThoughtRise App on iPhone" className="relative z-10 w-64 md:w-80 lg:w-96 drop-shadow-xl animate-float rounded-[2.5rem]" />
            </div>
          </motion.div>

          {/* Description - mobile only, order 4 */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="order-4 lg:hidden text-center">
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              ThoughtRise is a devotional app that helps you start your day with purpose and intent. With daily scripture-based motivation, this app pushes you to a specific mindset, a focused heart, and a productive day. Align your morning with God's Word and see the positive effects in your life.
            </p>
          </motion.div>
        </div>

        {/* Value Props Strip - flows naturally after hero content */}
        <div className="mt-16 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            const totalItems = valueProps.length;
            const cycleDuration = 1.5; // seconds per item
            const totalCycleDuration = cycleDuration * totalItems;
            
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="flex flex-col items-center text-center py-8 px-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/30"
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4"
                  animate={{
                    scale: [1, 1, 1.15, 1.1, 1.15, 1.1, 1, 1, 1],
                    rotate: [0, 0, -3, 3, -2, 2, 0, 0, 0],
                  }}
                  transition={{
                    duration: totalCycleDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [
                      0,
                      index / totalItems,
                      (index / totalItems) + 0.05,
                      (index / totalItems) + 0.1,
                      (index / totalItems) + 0.15,
                      (index / totalItems) + 0.2,
                      (index / totalItems) + 0.25,
                      (index + 1) / totalItems,
                      1
                    ],
                  }}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-serif text-lg font-semibold text-foreground tracking-wide mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>;
};
export default Hero;