import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import Features from '@/components/Features';
import Research from '@/components/Research';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Newsletter />
      <Features />
      <Research />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
