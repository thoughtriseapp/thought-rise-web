import { motion } from 'framer-motion';
import iphoneMockup from '@/assets/iphone-mockup.avif';
import appStoreBadge from '@/assets/app-store-badge.avif';
import googlePlayBadge from '@/assets/google-play-badge.avif';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-secondary/40 to-accent/25" />
      <motion.div animate={{ x: [0, 120, -60, 0], y: [0, -80, 50, 0], scale: [1, 1.4, 0.85, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-1/4 -left-1/4 w-[70vw] h-[60vh] bg-accent/45 blur-[80px]" />
      <motion.div animate={{ x: [0, -80, 50, 0], y: [0, -50, 30, 0], scale: [1, 0.8, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute top-10 -right-1/4 w-[60vw] h-[50vh] bg-primary/35 blur-[100px]" />

      <div className="container-narrow mx-auto pt-24 pb-20 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="order-3 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-8 bg-secondary/20 rounded-full blur-2xl" />
              <img src={iphoneMockup} alt="Thought Rise app on iPhone" className="relative z-10 w-64 md:w-80 lg:w-96 drop-shadow-xl animate-float rounded-[2.5rem]" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="order-1 lg:order-2 text-center lg:text-left w-full">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">A personalized, Scripture-centered way to start your day with Jesus</p>
            <h1 className="font-heading font-semibold leading-tight tracking-wide text-foreground text-4xl sm:text-5xl lg:text-6xl">
              Start your day with something <span className="text-primary">made for you.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              Thought Rise helps you begin each morning with Jesus through Scripture, prayer, and a personalized experience created to encourage you for the day ahead.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="https://apps.apple.com/us/app/thought-rise/id6741752730" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105"><img src={appStoreBadge} alt="Download Thought Rise on the App Store" className="h-12 md:h-14 w-auto" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.thoughtrise.mobile.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-105"><img src={googlePlayBadge} alt="Get Thought Rise on Google Play" className="h-12 md:h-14 w-auto" /></a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Free to download.</p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H0Z" fill="hsl(var(--background))" /></svg>
      </div>
    </section>
  );
};

export default Hero;
