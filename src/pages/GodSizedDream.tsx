import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GodSizedDream = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-accent/30 via-secondary/40 to-accent/25 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-narrow mx-auto text-center relative z-10">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">God-sized dreams</p>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground leading-tight">What is a God-sized dream?</h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">It’s the bigger thing you believe God may be inviting you to pursue faithfully, one step at a time, while depending on Him more than your own ability and trusting Him with the outcome.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-6 space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">It doesn’t have to look “big.”</h2>
              <p>A God-sized dream is not defined by how impressive it looks to other people. It might be starting a ministry or business. It might also be writing the book you can’t stop thinking about, rebuilding something in your family, serving people in a way that stretches you, creating something meaningful, or taking a faithful step into a new season.</p>
              <p className="mt-4">Author Holley Gerth, who has written extensively about God-sized dreams, makes an important distinction: big or small, what matters is not the apparent size of the dream but the God we are trusting as we pursue it.</p>
            </div>

            <blockquote className="my-10 rounded-2xl bg-secondary/25 border border-border/50 p-7 md:p-10 text-center">
              <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">“Our dreams should scare us. They should be so big that without God they would be impossible to achieve.”</p>
              <footer className="mt-4 text-sm font-semibold text-primary">Mark Batterson, <em>Chase the Lion</em></footer>
            </blockquote>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Why does it matter?</h2>
              <p>Because the dream itself isn’t the whole point. What happens in you while you pursue it matters too.</p>
              <p className="mt-4">Scripture repeatedly shows people being called beyond what they could accomplish by themselves. Moses saw his limitations when God called him to lead Israel. David was a shepherd before he was a king. Peter had to step out of the boat. Paul described pressing toward what was ahead and making it his ambition to carry the gospel where Christ had not been named.</p>
              <p className="mt-4">The pattern is not “dream anything you want and God will make it happen.” It is surrender: bring your desires, abilities, opportunities, fears, and plans to God, then remain willing for Him to lead, redirect, grow, or even change the dream.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 my-10">
              <div className="rounded-2xl border border-border/60 p-6 bg-card"><p className="text-sm uppercase tracking-widest text-primary font-semibold">Ephesians 3:20</p><p className="mt-3 text-foreground">God is able to do immeasurably more than we ask or imagine, according to His power at work within us.</p></div>
              <div className="rounded-2xl border border-border/60 p-6 bg-card"><p className="text-sm uppercase tracking-widest text-primary font-semibold">Proverbs 16:3</p><p className="mt-3 text-foreground">Commit what you do to the Lord. Our plans belong in His hands.</p></div>
              <div className="rounded-2xl border border-border/60 p-6 bg-card"><p className="text-sm uppercase tracking-widest text-primary font-semibold">Proverbs 3:5–6</p><p className="mt-3 text-foreground">Trust the Lord rather than depending entirely on your own understanding, and allow Him to direct your path.</p></div>
              <div className="rounded-2xl border border-border/60 p-6 bg-card"><p className="text-sm uppercase tracking-widest text-primary font-semibold">Philippians 3:13–14</p><p className="mt-3 text-foreground">Paul describes reaching forward and pressing on toward the goal of God’s call in Christ.</p></div>
            </div>

            <blockquote className="my-10 rounded-2xl bg-accent/25 border border-border/50 p-7 md:p-10 text-center">
              <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">“Drawing prayer circles around our dreams isn’t just a mechanism whereby we accomplish great things for God. It’s a mechanism whereby God accomplishes great things in us.”</p>
              <footer className="mt-4 text-sm font-semibold text-primary">Mark Batterson, <em>The Circle Maker</em></footer>
            </blockquote>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Does everyone have one?</h2>
              <p>We don’t believe every Christian has to identify one dramatic, lifelong “God-sized dream.” Scripture doesn’t command us to do that. Our first calling is to follow Jesus faithfully.</p>
              <p className="mt-4">But many of us do have something that keeps tugging at our hearts: a hope, burden, idea, opportunity, or direction that seems bigger than where we are right now. Sometimes it is enormous. Sometimes it is quiet. Sometimes it changes with the season.</p>
              <p className="mt-4">And sometimes you may not know what yours is yet. That’s okay. You don’t have to manufacture one. Keep walking with Jesus, paying attention to the gifts He has given you, the needs that move you, the opportunities in front of you, and the desires you keep bringing back to Him in prayer.</p>
            </div>

            <blockquote className="my-10 rounded-2xl bg-secondary/25 border border-border/50 p-7 md:p-10 text-center">
              <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">“God-sized dreams aren’t about goals…they’re about journeys. A thousand steps in His direction.”</p>
              <footer className="mt-4 text-sm font-semibold text-primary">Holley Gerth</footer>
            </blockquote>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">How do I know if a dream is from God?</h2>
              <p>We should hold that question with humility. A strong desire is not automatically a promise from God. A God-sized dream should never require us to ignore Scripture in order to pursue it.</p>
              <p className="mt-4">Bring it to God in prayer. Test it against Scripture. Ask whether it points you toward love, faithfulness, service, generosity, courage, and greater dependence on Jesus. Invite wise believers who know you well to speak into it. And stay willing to surrender both the timeline and the outcome.</p>
              <p className="mt-4">Sometimes faith looks like taking a courageous step forward. Sometimes it looks like waiting. Sometimes it looks like letting God reshape the dream entirely.</p>
            </div>

            <div className="my-12 rounded-3xl bg-primary/10 p-8 md:p-10 text-center">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm">Thought Rise</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">Keep the dream in front of you without trying to control the outcome.</h2>
              <p className="mt-5 max-w-2xl mx-auto">In Thought Rise, you choose the God-sized dream you want to keep before you. We’ll speak it back to you, give you questions to reflect on, and bring you encouragement, practical tools, and Scripture as you keep taking the next faithful step.</p>
              <Link to="/#features" className="inline-flex mt-7 text-primary font-semibold hover:underline">Explore the Thought Rise experience →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GodSizedDream;
