import { motion } from 'framer-motion';
import iphoneMockup from '@/assets/iphone-mockup.avif';
import appStoreBadge from '@/assets/app-store-badge.avif';
import googlePlayBadge from '@/assets/google-play-badge.avif';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-70" />
      
      {/* Decorative blob shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/30 blob-shape blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/20 blob-shape blur-2xl" />

      <div className="container-narrow mx-auto pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
              <span className="text-foreground">Elevate Your Days,</span>
              <br />
              <span className="text-primary">Transform Your Mornings.</span>
            </h1>

            {/* Description - desktop only */}
            <p className="hidden lg:block mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">Thought Rise is a revolutionary Christian app that greets you by name and delivers a personalized audio experience designed to uplift and inspire. With daily scripture-based affirmations, powerful motivation, and goal-focused reminders, Thought Rise helps you stay connected to your faith while pursuing your dreams. Let every morning begin with encouragement tailored just for you!</p>

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
              {/* Decorative circle behind phone */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-br from-accent/40 to-secondary/60 rounded-full blur-sm" />
              <img src={iphoneMockup} alt="ThoughtRise App on iPhone" className="relative z-10 w-64 md:w-80 lg:w-96 drop-shadow-2xl animate-float" />
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