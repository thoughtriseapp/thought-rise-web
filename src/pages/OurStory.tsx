import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import aboutFounders from '@/assets/about-founders.jpg';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-accent/30 via-secondary/40 to-accent/25 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-narrow mx-auto text-center relative z-10 px-6">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Our Story</p>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground leading-tight">It started on Mother’s Day.</h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Thought Rise began with a quiet morning of prayer, an idea we couldn’t shake, and a mother and daughter who realized they had exactly the right mix of gifts to build it together.</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="relative flex justify-center lg:sticky lg:top-28">
                <div className="aspect-square max-w-md w-full overflow-hidden rounded-2xl shadow-xl">
                  <img src={aboutFounders} alt="Julie Kern and Brianna Collins, the mother-daughter team behind Thought Rise" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Meet the mother-daughter team behind Thought Rise.</h2>
                <p>We’re Julie Kern and Brianna Collins, a mother-daughter team who share a love for Jesus and a desire to help others begin their mornings rooted in truth, reminded of who they are and whose they are, and encouraged for whatever the day holds.</p>
                <p>On Mother’s Day 2024, Julie was spending a quiet morning in prayer at one of her favorite beach spots when the beginnings of Thought Rise started taking shape.</p>
                <p>The idea was deeply personal: what if there were a morning experience that could actually speak to you by name? One that brought together gratitude, Scripture, personalized affirmations, prayer, and reminders of the God-sized dream you don’t want to lose sight of?</p>
                <p>When Julie shared the idea with Brianna, something clicked. Julie had spent more than 20 years in software development before becoming an entrepreneur. Brianna was already using her creativity as a Christian designer and business owner. Our backgrounds were very different, but suddenly they made a lot of sense together.</p>
                <p>So we started building.</p>
                <p>Thought Rise has grown since that first conversation, but the heart behind it really hasn’t changed. We want it to feel less like another thing to check off your morning list and more like a few intentional minutes with Jesus that are personal to you.</p>
                <p className="font-heading text-2xl text-foreground">Our prayer is that Thought Rise becomes a bright spot in your morning, helping you grow in your love for Jesus and step into your day remembering the truth of who you are and what God may be inviting you toward.</p>\n                <div className="flex items-end gap-8 md:gap-12 pt-2 text-foreground">
                  <div className="w-36 md:w-44"><img src={julieSignature} alt="Julie" className="w-full h-auto" /></div>
                  <div className="w-44 md:w-52"><img src={briannaSignature} alt="Brianna" className="w-full h-auto" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
