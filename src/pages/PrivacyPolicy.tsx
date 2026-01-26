import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last Updated: January 2026
            </p>

            <div className="prose prose-lg max-w-4xl mx-auto space-y-8 text-foreground">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to ThoughtRise App. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our application.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Personal Data:</strong> Information that identifies you personally, such as your name, email address, and phone number, which you provide during registration or through app interactions.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Usage Data:</strong> Data on how you access and use the app, including your IP address, browser type, device information, and pages visited.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience, track user activity, and gather usage data.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the collected data to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Provide and maintain our services.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Notify you about changes to our app.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Allow you to participate in interactive features.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Offer customer support.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Analyze usage to improve our app.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Monitor and usage to detect and prevent technical issues.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  4. Sharing Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may share your information with:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Service Providers:</strong> Third-party companies that assist in app operations, such as hosting and analytics, who are obligated to protect your data.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  6. Your Data Protection Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Access:</strong> Request copies of your personal data.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Rectification:</strong> Request correction of inaccurate information.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Erasure:</strong> Request deletion of your personal data.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Restrict Processing:</strong> Request limited use of your data.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Data Portability:</strong> Request transfer of your data to another organization.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Withdraw Consent:</strong> Withdraw consent where we rely on it to process your data.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  7. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our app is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware of such data, we will take steps to delete it.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  9. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 text-muted-foreground">
                  <p><strong>ThoughtRise App</strong></p>
                  <p>Owners: Julie Kerr and Brianna Collins</p>
                  <p>Email: <a href="mailto:hello@thoughtriseapp.com" className="text-primary hover:underline">hello@thoughtriseapp.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  10. Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our app may contain links to third-party services not operated by us. We advise you to review their privacy policies, as we have no control over their content or practices.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  11. International Data Transfers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and maintained on servers located outside your jurisdiction, where data protection laws may differ. By using our app, you consent to such transfers.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  12. Consent
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using ThoughtRise App, you consent to our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  13. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy is governed by the laws of Georgia, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  14. Acknowledgment
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our app, you acknowledge that you have read and understand this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  15. Language
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy may be translated into other languages. In case of discrepancies, the English version prevails.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  16. Effective Date
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy is effective as of January 2026.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  17. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal data only as long as necessary for the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  18. Analytics
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party service providers to monitor and analyze app usage to improve functionality and user experience.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  19. Push Notifications
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ThoughtRise may send you push notifications to remind you to listen to each day's audio. These notifications are intended to support your consistency and engagement with the app's daily content. You can choose to opt out of receiving push notifications at any time by adjusting the notification settings on your mobile device.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  20. In-App Purchases
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If our app offers in-app purchases, this section will explain the process and how user payment information is handled.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  21. Social Media Integration
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If our app integrates with social media platforms, this section will explain how user data is shared in this context.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  22. Compliance with Laws
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We will disclose your personal data where required to do so by law or subpoena.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  23. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  24. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us by email: <a href="mailto:hello@thoughtriseapp.com" className="text-primary hover:underline">hello@thoughtriseapp.com</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
