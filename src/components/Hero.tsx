import { motion } from 'framer-motion';
import iphoneMockup from '@/assets/iphone-mockup.avif';
import appStoreBadge from '@/assets/app-store-badge.avif';
import googlePlayBadge from '@/assets/google-play-badge.avif';
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

      <div className="container-narrow mx-auto pt-24 pb-16 relative z-10">
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
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>;
};
export default Hero;