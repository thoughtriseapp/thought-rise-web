import { FormEvent, useState } from 'react';
import { Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const subject = String(data.get('subject') || 'Thought Rise website message');
    const message = String(data.get('message') || '');
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:hello@thoughtriseapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-accent/30 via-secondary/40 to-accent/25 pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-narrow mx-auto text-center px-6">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Contact</p>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground mt-4">We’d love to hear from you.</h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Have a question, feedback, or just want to say hello? Send us a note.</p>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="max-w-2xl mx-auto px-6">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-border/60 bg-card p-7 md:p-10 shadow-sm space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input id="name" name="name" required className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                <input id="subject" name="subject" required className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea id="message" name="message" required rows={7} className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"><Mail className="w-4 h-4" />Send message</button>
              {sent && <p className="text-sm text-muted-foreground">Your email app should open with your message ready to send.</p>}
            </form>
            <p className="mt-6 text-center text-muted-foreground">Or email us directly at <a href="mailto:hello@thoughtriseapp.com" className="text-primary font-semibold hover:underline">hello@thoughtriseapp.com</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
