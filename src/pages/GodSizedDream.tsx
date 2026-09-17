import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const scriptures = [
  { reference: 'Ephesians 3:20', thought: 'God is able to do far more than we can ask or imagine.', excerpt: '“Now to him who is able to do far more abundantly than all that we ask or think...”' },
  { reference: 'Proverbs 16:3', thought: 'Bring the work in front of you to God and place your plans in His hands.', excerpt: '“Commit your work to the LORD, and your plans will be established.”' },
  { reference: 'Proverbs 3:5–6', thought: 'Trust God beyond what you can see or understand, and let Him lead the way.', excerpt: '“Trust in the LORD with all your heart, and do not lean on your own understanding.”' },
  { reference: 'Philippians 3:13–14', thought: 'Keep reaching forward toward what God is calling you to pursue in Christ.', excerpt: '“...forgetting what lies behind and straining forward to what lies ahead...”' },
];

const GodSizedDream = () => {
  const [selectedScripture, setSelectedScripture] = useState<(typeof scriptures)[number] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-accent/30 via-secondary/40 to-accent/25 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-narrow mx-auto text-center relative z-10">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">God-sized dreams</p>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground leading-tight">What is a God-sized dream?</h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">It’s that bigger thing on your heart. Something that may stretch you beyond what you can do on your own and invite you to depend on God as you take the next step, while trusting Him with where it ultimately leads.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-6 space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">It doesn’t have to look “big.”</h2>
              <p>When we talk about a <strong className="text-foreground">God-sized dream</strong> at Thought Rise, we’re not necessarily talking about doing something huge.</p>
              <p className="mt-4">Maybe your dream is to start a business or ministry. Maybe it’s to write a book, go back to school, make a career change, restore something in your family, or finally take a step toward something that’s been on your heart for years.</p>
              <p className="mt-4">What makes a dream “God-sized” isn’t how impressive it looks to anyone else.</p>
              <p className="mt-4"><a href="https://holleygerth.com/category/god-sized-dreams/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Author Holley Gerth</a> has written quite a bit about God-sized dreams, and I love the way she puts it:</p>
            </div>

            <blockquote className="my-10 rounded-2xl bg-secondary/25 border border-border/50 p-7 md:p-10 text-center">
              <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">“God-sized dreams aren’t about goals…they’re about journeys. A thousand steps in His direction.”</p>
              <footer className="mt-4 text-sm font-semibold text-primary"><a href="https://holleygerth.com/category/god-sized-dreams/" target="_blank" rel="noopener noreferrer" className="hover:underline">Holley Gerth</a></footer>
            </blockquote>

            <div>
              <p>I think that distinction matters.</p>
              <p className="mt-4">A God-sized dream isn’t just another goal to accomplish. It’s something you pursue <strong className="text-foreground">with God</strong>. You take the next step you know to take, and then the next one, trusting Him as you go.</p>
              <p className="mt-4">And sometimes, the dream really <em>is</em> bigger than anything you can see yourself accomplishing on your own.</p>
              <p className="mt-4"><a href="https://www.markbatterson.com/books/chase-the-lion/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Mark Batterson</a> describes that kind of dream this way:</p>
            </div>

            <blockquote className="my-10 rounded-2xl bg-accent/25 border border-border/50 p-7 md:p-10 text-center">
              <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">“Our dreams should scare us. They should be so big that without God they would be impossible to achieve.”</p>
              <footer className="mt-4 text-sm font-semibold text-primary"><a href="https://www.markbatterson.com/books/chase-the-lion/" target="_blank" rel="noopener noreferrer" className="hover:underline">Mark Batterson, <em>Chase the Lion</em></a></footer>
            </blockquote>

            <p>Those two ideas belong together really well: <strong className="text-foreground">a dream that causes us to depend on God, pursued one faithful step at a time.</strong></p>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Why does it matter?</h2>
              <p>Because I don’t think the dream itself is the whole point. What God does in us while we pursue it matters too.</p>
              <p className="mt-4">Think about how often we see this in Scripture. Moses immediately saw everything he lacked when God called him to lead Israel. David was still a shepherd when he was anointed to be king. Peter had to actually step out of the boat. Again and again, God called ordinary people to take steps that required them to trust Him beyond what they could see.</p>
              <p className="mt-4">That doesn’t mean we dream up anything we want and expect God to make it happen. That’s not what we mean by a God-sized dream.</p>
              <p className="mt-4">There has to be room for surrender. We can bring God our hopes, ideas, abilities, fears, opportunities, and plans while still saying, <em>Lead me. Redirect me if You need to. And I’ll trust You with the outcome.</em></p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 my-10">
              {scriptures.map((scripture) => (
                <button key={scripture.reference} type="button" onClick={() => setSelectedScripture(scripture)} className="rounded-2xl border border-border/60 p-6 bg-card text-left transition-all hover:border-primary/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <p className="text-sm uppercase tracking-widest text-primary font-semibold">{scripture.reference}</p>
                  <p className="mt-3 text-foreground">{scripture.thought}</p>
                  <p className="mt-5 text-sm font-semibold text-primary">Read Scripture →</p>
                </button>
              ))}
            </div>

            <blockquote className="my-10 rounded-2xl bg-secondary/25 border border-border/50 p-7 md:p-10 text-center">
              <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">“Drawing prayer circles around our dreams isn’t just a mechanism whereby we accomplish great things for God. It’s a mechanism whereby God accomplishes great things in us.”</p>
              <footer className="mt-4 text-sm font-semibold text-primary"><a href="https://www.markbatterson.com/books/the-circle-maker/" target="_blank" rel="noopener noreferrer" className="hover:underline">Mark Batterson, <em>The Circle Maker</em></a></footer>
            </blockquote>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Does everyone have one?</h2>
              <p>Maybe. But I don’t think we need to put pressure on ourselves to come up with one.</p>
              <p className="mt-4">Scripture never tells us that every Christian has to identify one dramatic, lifelong dream. Our first calling is much simpler, and much bigger: <strong className="text-foreground">follow Jesus faithfully.</strong></p>
              <p className="mt-4">But I do think a lot of us have something that keeps coming back to us. A hope. A burden. An idea. An opportunity. Something we would love to do, build, change, create, restore, or become that feels a little bigger than where we are right now.</p>
              <p className="mt-4">And if you don’t know what yours is yet, you don’t need to manufacture one. Keep walking with Jesus. Pay attention to the gifts He’s given you, the needs that move your heart, the opportunities in front of you, and the desires you keep bringing back to Him in prayer.</p>
              <p className="mt-4">Your God-sized dream may become clearer over time. It may also change as you do.</p>
            </div>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">How do I know if a dream is from God?</h2>
              <p>This is where I think we need some humility. Just because we want something deeply doesn’t automatically mean God promised it to us.</p>
              <p className="mt-4">So bring the dream to Him. Pray about it. Hold it up against Scripture. Talk about it with wise people who know you and know Jesus. Pay attention to whether pursuing it is drawing you toward greater faithfulness, love, generosity, courage, service, and dependence on Him.</p>
              <p className="mt-4">And stay open-handed about the outcome.</p>
              <p className="mt-4">Sometimes faith means taking a courageous step forward. Sometimes it means waiting longer than we expected. And sometimes it means allowing God to reshape the dream into something we never saw coming.</p>
            </div>

            <div className="my-12 rounded-3xl bg-primary/10 p-8 md:p-10 text-center">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm">Thought Rise</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">Keep the dream in front of you. Hold the outcome loosely.</h2>
              <p className="mt-5 max-w-2xl mx-auto">That’s why your God-sized dream is part of the Thought Rise morning experience. You tell us the dream you want to keep in front of you. Thought Rise speaks it back to you, gives you questions to reflect on, and brings you motivation, practical tools, and Scripture to encourage you as you keep taking the next faithful step.</p>
              <p className="mt-4 max-w-2xl mx-auto">Not because every dream will unfold exactly the way we imagine, but because there’s value in moving forward with expectation while continuing to trust God with the outcome.</p>
              <Link to="/#features" className="inline-flex mt-7 text-primary font-semibold hover:underline">Explore the Thought Rise experience →</Link>
            </div>
          </div>
        </section>
      </main>

      {selectedScripture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/45 p-4" onClick={() => setSelectedScripture(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="scripture-title" className="relative w-full max-w-xl rounded-3xl bg-background p-7 md:p-10 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedScripture(null)} className="absolute right-5 top-4 text-2xl text-muted-foreground hover:text-foreground" aria-label="Close Scripture">×</button>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Scripture</p>
            <h2 id="scripture-title" className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-2">{selectedScripture.reference}</h2>
            <p className="font-heading text-2xl text-foreground leading-relaxed mt-6">{selectedScripture.excerpt}</p>
            <p className="mt-5 text-sm text-muted-foreground">English Standard Version (ESV)</p>
            <p className="mt-6 text-sm text-muted-foreground">Open your Bible or Bible app to read the complete passage in context.</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GodSizedDream;
