import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import howItWorks1 from '@/assets/how-it-works-1.jpg';
import howItWorks2 from '@/assets/how-it-works-2.jpg';
import howItWorks3 from '@/assets/how-it-works-3.jpg';
const features = [{
  number: '01',
  title: 'Daily Motivation',
  description: 'Start each day with curated motivational content. Uplifting messages, affirmations, and inspirational quotes tailored to your preferences.',
  image: howItWorks1
}, {
  number: '02',
  title: 'Scripture-Based Affirmations',
  description: 'Grounded in faith, our scripture-based affirmations help you connect with your spiritual side. Start your morning with purpose and God\'s Word.',
  image: howItWorks2
}, {
  number: '03',
  title: 'Goal Reminders',
  description: 'Stay on track with personalized goal reminders. Set and achieve your goals with daily check-ins and encouragement to keep you focused.',
  image: howItWorks3
}];
const Features = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.1
  });
  return <section id="features" className="section-padding bg-background">
      <div ref={ref} className="container-narrow mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isVisible ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">What exactly is Thought Rise?</h2>
          
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => <motion.div key={feature.number} initial={{
          opacity: 0,
          y: 40
        }} animate={isVisible ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 40
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} className="group text-center">
              {/* Feature Image - Square image in circle container */}
              <div className="relative mb-6 mx-auto w-48 h-48 md:w-56 md:h-56">
                <div className="w-full h-full overflow-hidden rounded-full">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                {/* Number badge */}
                <span className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center bg-primary/70 text-primary-foreground text-base font-semibold rounded-full shadow-lg">
                  {feature.number}
                </span>
              </div>

              {/* Feature Content */}
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Features;