import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container px-4 py-32 max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">1. General</h2>
            <p>This Privacy Policy describes how we collect, use, and protect personal data of users of this website.</p>
            <p className="mt-3">Data Controller: AMAI Creative Studio LLC</p>
            <p className="mt-3">By using this website, you agree to this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">2. Data We Collect</h2>
            <p>The site may automatically collect the following data:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>IP address</li>
              <li>Browser and device information</li>
              <li>Cookies</li>
              <li>Site activity data</li>
            </ul>
            <p className="mt-3">You may also voluntarily share data when reaching out via messaging platforms (e.g., Telegram).</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">3. How We Use Your Data</h2>
            <p>Personal data is used for:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Communicating with you</li>
              <li>Providing our services</li>
              <li>Processing inquiries</li>
              <li>Analytics and site improvement</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">4. Third-Party Sharing</h2>
            <p>Data may be shared with third parties in the following cases:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>When using analytics services (e.g., Google Analytics)</li>
              <li>When you reach out via messaging platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">5. Cookies</h2>
            <p>We use cookies for:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Proper site functionality</li>
              <li>Analytics</li>
              <li>Improving user experience</li>
            </ul>
            <p className="mt-3">You can disable cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">6. Data Protection</h2>
            <p>We take reasonable measures to protect personal data from loss, unauthorized access, and disclosure.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Request information about your data</li>
              <li>Request modification or deletion of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
            <p>We reserve the right to update this Privacy Policy without prior notice.</p>
            <p className="mt-3">The current version is always available on this website.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;