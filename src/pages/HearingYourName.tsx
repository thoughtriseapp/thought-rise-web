import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import hearingYourName from '@/assets/thought-rise-morning.png';

const HearingYourName = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary/20">
          <div className="container-narrow mx-auto px-6 text-center max-w-4xl">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Hearing Your Name</p>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold text-foreground mt-4">There’s something different about hearing your own name.</h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">Your brain recognizes it. Scripture gives names remarkable significance. And your name can remind you of one of the most personal truths in the Bible: you are known by God.</p>
          </div>
        </section>

        <section className="bg-background">
          <div className="container-narrow mx-auto px-6 pt-10 md:pt-14">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-lg border border-border/40">
              <img src={hearingYourName} alt="A quiet morning with a Bible, journal, and coffee" className="w-full h-64 md:h-96 object-cover" />
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto px-6 max-w-4xl space-y-14">
            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm">Your brain notices</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">Your name isn’t just another word.</h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>Researchers have found that hearing your own name is processed differently from hearing other names. Brain-imaging studies show distinct responses to a person’s own name, including activity in regions associated with self-related processing.</p>
                <p>Other research has found that our own name can capture attention even when we aren’t actively listening for it. It makes sense: from our earliest years, our name becomes one of the sounds most closely connected to us.</p>
                <div className="mt-7 rounded-2xl bg-secondary/30 border border-border/50 p-6">
                  <h3 className="font-heading text-2xl font-semibold text-foreground">There’s science behind this, too.</h3>
                  <p className="mt-3">Studies using fMRI and EEG have found that the brain responds differently to a person’s own name, including when the name is not the focus of attention.</p>
                  <div className="mt-4 flex flex-col gap-2 text-sm font-semibold">
                    <a className="text-primary hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/16959226/" target="_blank" rel="noreferrer">Brain activation when hearing one’s own and others’ names (2006) →</a>
                    <a className="text-primary hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/26374785/" target="_blank" rel="noreferrer">How the Non-attending Brain Hears Its Owner’s Name (2016) →</a>
                    <a className="text-primary hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/7555920/" target="_blank" rel="noreferrer">P300 in response to the subject’s own name (1995) →</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm">Names in Scripture</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">In the Bible, names often carried meaning.</h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>In the biblical world, a name could say something about identity, family, circumstances, hope, or a person’s story. Scripture sometimes draws our attention to the meaning of a name, and at pivotal moments God even gives someone a new one.</p>
                <p>Abram becomes Abraham as God confirms His covenant. Sarai becomes Sarah. After wrestling with God, Jacob is given the name Israel. And in the New Testament, Jesus tells Simon that he will be called Cephas, or Peter.</p>
                <p>That doesn’t mean every biblical name determined a person’s destiny. But it does show us that names are woven deeply into the way Scripture tells the story of people, identity, calling, and relationship.</p>
              </div>
            </div>

            <div className="rounded-3xl bg-secondary/30 border border-border/50 p-7 md:p-10">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm">Known by name</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">And then Scripture gets deeply personal.</h2>
              <div className="mt-6 space-y-7">
                <blockquote>
                  <p className="font-heading text-2xl md:text-3xl text-foreground">“Fear not, for I have redeemed you; I have called you by name, you are mine.”</p>
                  <p className="mt-2 text-sm font-semibold text-primary">Isaiah 43:1</p>
                </blockquote>
                <blockquote>
                  <p className="font-heading text-2xl md:text-3xl text-foreground">“The sheep hear his voice, and he calls his own sheep by name and leads them out.”</p>
                  <p className="mt-2 text-sm font-semibold text-primary">John 10:3</p>
                </blockquote>
                <p className="text-muted-foreground leading-relaxed">God tells Moses, “I know you by name” in Exodus 33:17. Again and again, Scripture gives us a picture of a God who does not relate to His people as an anonymous crowd. He knows them personally.</p>
              </div>
            </div>

            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm">Why Thought Rise uses your name</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3">Your morning with Jesus shouldn’t feel anonymous.</h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>That’s why hearing your own name is such an important part of the Thought Rise experience. Thought Rise greets you by name and speaks to you personally throughout the Thought Rise experience.</p>
                <p>We’re not suggesting that an app speaking your name is the same as God speaking your name. Instead, we hope that hearing it catches your attention and reminds you that the truths of Scripture aren’t merely truths for somebody else.</p>
                <p className="font-heading text-2xl text-foreground">You are not anonymous to God. You are seen. You are known. You are called by name.</p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HearingYourName;
