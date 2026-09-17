import { Link } from 'react-router-dom';
import { BookOpen, Heart, Sparkles, MessageCircleHeart, HandHeart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import howItWorks from '@/assets/how-it-works-3.jpg';

const steps = [
  { icon: Heart, title: 'Settle in.', text: 'Thought Rise greets you by name and gives you a moment to slow down with gratitude, intentional breathing, and a simple stretch before the day gets moving.' },
  { icon: BookOpen, title: 'Turn to Scripture.', text: 'A Scripture-based affirmation prepares your heart, followed by Scripture and a short devotional centered on a biblical theme we explore throughout the week.' },
  { icon: Sparkles, title: 'Come back to your God-sized dream.', text: 'Thought Rise reminds you of the dream you chose, gives you something meaningful to reflect on, and brings Scripture, encouragement, and practical tools to help you keep moving forward.' },
  { icon: MessageCircleHeart, title: 'Speak truth over your day.', text: 'Hear the three personal affirmations you chose for yourself. You can change them anytime as your circumstances, priorities, or season changes.' },
  { icon: HandHeart, title: 'Before you go, pray.', text: 'Your morning closes with prayer and a personal send-off designed to leave you encouraged, focused, and ready to step into your day.' },
];

const Experience = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/30 via-secondary/40 to-accent/25 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-narrow mx-auto text-center px-6">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">The Thought Rise Experience</p>
          <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground mt-4">A few intentional minutes with Jesus. Made personal to you.</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Thought Rise brings Scripture, reflection, your God-sized dream, personal affirmations, and prayer together in one guided morning experience designed to help you start the day centered on Jesus.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-5">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="flex gap-5 md:gap-7 p-6 md:p-8 rounded-2xl bg-secondary/20 border border-border/50">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full"><Icon className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold">0{index + 1}</p>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-1">{title}</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
                  {index === 2 && <Link to="/what-is-a-god-sized-dream" className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">What do we mean by a God-sized dream? →</Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/15">
        <div className="container-narrow mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-[2rem] shadow-lg aspect-[4/5]">
              <img src={howItWorks} alt="A quiet morning for reflection and journaling" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm">Make it your own</p>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mt-3">Thought Rise pairs beautifully with journaling.</h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">Thought Rise is designed to help you slow down and reflect. Keeping a journal nearby gives you a place to capture a Scripture that stands out, something you’re grateful for, a thought about your God-sized dream, or whatever God brings to mind during your morning.</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">You don’t need a journal to use Thought Rise. Some mornings you may simply listen. Other mornings you may want to pause, write, pray, or sit with something a little longer. The experience is yours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background text-center">
        <div className="container-narrow mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground">The goal isn’t to keep you in the app.</h2>
          <p className="font-heading text-2xl md:text-3xl text-primary mt-4">It’s to help you step into your day differently.</p>
          <p className="mt-6 text-muted-foreground text-lg">Rooted in Scripture. Focused on Jesus. Encouraged for whatever is ahead.</p>
          <Link to="/#contact" className="inline-flex mt-8 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">Start with Thought Rise →</Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Experience;
