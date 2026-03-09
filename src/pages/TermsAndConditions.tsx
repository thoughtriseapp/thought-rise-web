import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-4">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last Updated: 3/9/2026
            </p>

            <div className="prose prose-lg max-w-4xl mx-auto space-y-8 text-foreground">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Thought Rise App ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  2. Description of Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Thought Rise App provides daily audio content designed to support personal growth and well-being. The App delivers guided sessions that users can listen to as part of their daily routine.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  3. User Accounts
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>You must provide accurate and complete information when creating an account.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>You are responsible for maintaining the confidentiality of your account credentials.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>You are responsible for all activities that occur under your account.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>You must notify us immediately of any unauthorized use of your account.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  4. Acceptable Use
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree not to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Use the App for any unlawful purpose or in violation of these Terms.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Copy, modify, distribute, or create derivative works from our content.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Attempt to reverse engineer or extract source code from the App.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Interfere with or disrupt the App's functionality or servers.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Share your account credentials with others.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content in the App, including but not limited to audio recordings, text, graphics, logos, and software, is the property of Thought Rise App and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  6. Donations
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>The App is free to use. You may choose to support Thought Rise through voluntary donations.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Donations are processed through the App Store or Google Play Store.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Donations are non-refundable unless required by applicable law.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Donations do not unlock additional features; they simply support the continued development of the App.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  7. Disclaimer of Warranties
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the App will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  8. Health Disclaimer
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content provided in Thought Rise App is for informational and personal development purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Thought Rise App and its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  10. Indemnification
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Thought Rise App, its owners, employees, and affiliates from any claims, damages, losses, or expenses arising out of your use of the App or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  11. Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate your access to the App at any time, with or without cause, and with or without notice. Upon termination, your right to use the App will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  12. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the App after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  13. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  14. Dispute Resolution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  15. Severability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  16. Entire Agreement
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Thought Rise App regarding your use of the App.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  17. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 text-muted-foreground">
                  <p><strong>Thought Rise App</strong></p>
                  <p>Owners: Julie Kern and Brianna Collins</p>
                  <p>Email: <a href="mailto:hello@thoughtriseapp.com" className="text-primary hover:underline">hello@thoughtriseapp.com</a></p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
