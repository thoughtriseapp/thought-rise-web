import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Research from '@/components/Research';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Research />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
