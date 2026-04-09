import { PageWrapper } from '../components/layout/PageWrapper';

export default function Privacy() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-[var(--color-text-muted)] tracking-wide">Last Updated: March {new Date().getFullYear()}</p>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8 [&_section]:space-y-4">
            
            <section>
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p>
                AbsolutData Ltd ("we," "us," or "our"), a company registered and domiciled in
                the United Kingdom, takes the protection of your personal data very seriously. This privacy policy explains
                how we collect, use, store, and protect your personal data when you visit our website 
                or interact with our advisory and engineering services.
              </p>
              <p>
                We process personal data in strict compliance with the UK General Data Protection Regulation (UK GDPR),
                the Data Protection Act 2018, and other relevant data protection legislation.
              </p>
              <p>
                By using our Website, you acknowledge the practices described in this policy. If you do not agree,
                please discontinue use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">2. Data Controller Contact</h2>
              <p>The data controller responsible for processing your personal data is:</p>
              <div className="pl-6 border-l-2 border-[var(--color-primary)]/50 glass-panel p-4 rounded-r-lg mt-4 text-sm font-mono">
                AbsolutData Ltd<br />
                8 Clermont Place<br />
                Romford, RM1 2EY<br />
                United Kingdom<br />
                Email: tasnim.kumar@hotmail.com
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">3. Information We Collect</h2>
              <p>We may collect and process the following categories of data:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 marker:text-[var(--color-primary)]">
                <li>
                  <strong className="text-gray-200">Identity & Contact Data:</strong> Information that identifies you directly, such as
                  your name, corporate email address, and phone number, provided when you contact
                  us or submit an inquiry form.
                </li>
                <li>
                  <strong className="text-gray-200">Technical & Usage Data:</strong> Non-identifiable technical information collected automatically,
                  including IP address, browser type, device identifiers, and geographic telemetry relevant to site optimization.
                </li>
                <li>
                  <strong className="text-gray-200">Communication Data:</strong> The raw content of messages, briefs, and attachments you send us via forms
                  or direct email communication.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">4. Core Purposes of Data Processing</h2>
              <p>We process your data exclusively for the following functional purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 marker:text-[var(--color-primary)]">
                <li>To provide, operate, and maintain the security of our technological infrastructure.</li>
                <li>To evaluate and respond to your strategic inquiries and support requests.</li>
                <li>To analyze usage patterns strictly to optimize the user experience and interface design.</li>
                <li>To prevent fraud, network abuse, or compromise of our systems.</li>
                <li>To comply with binding legal obligations and mandatory regulatory requirements in the United Kingdom.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">5. Legal Basis for Processing (UK GDPR)</h2>
              <p>We process personal data solely where we have established a lawful basis:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 marker:text-[var(--color-primary)]">
                <li><strong className="text-gray-200">Consent:</strong> Where you have given explicit consent (e.g., submitting an inquiry form).</li>
                <li><strong className="text-gray-200">Contractual Necessity:</strong> Where processing is necessary to perform or enter into an advisory contract.</li>
                <li><strong className="text-gray-200">Legitimate Interests:</strong> Where processing serves our business interests, balanced rigorously against your rights (e.g., analytics, cybersecurity).</li>
                <li><strong className="text-gray-200">Legal Obligation:</strong> Where processing is unconditionally required by applicable UK law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">6. Third-Party Sharing and Transfers</h2>
              <p>
                We do not sell, rent, or lease your personal data. We may share your data with trusted third-party sub-processors only in the
                following exact circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 marker:text-[var(--color-primary)]">
                <li>With infrastructure providers (e.g., Vercel, Resend) bound by stringent contractual data protection obligations.</li>
                <li>Where unilaterally required by law, regulation, or a valid subpoena by a UK governmental authority.</li>
                <li>To protect our intellectual property, operational safety, or the safety of our ecosystem.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">7. Security & Retention</h2>
              <p>
                We implement enterprise-grade technical and organizational measures to protect your personal data against
                unauthorized access, alteration, or destruction. However, no internet-based transmission protocol is 100% secure.
              </p>
              <p>
                We retain personal data only for as long as functionally necessary to fulfill the purposes described in this policy,
                or up to 7 years to satisfy UK corporate and tax requirements. When data is no longer needed, it is cryptographically destroyed or irreversibly anonymized.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">8. Your Statutory Rights</h2>
              <p>
                Under the UK GDPR, you retain profound control over your personal data. You possess the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 marker:text-[var(--color-primary)]">
                <li>Access your personal data (Subject Access Request).</li>
                <li>Request rectification of inaccurate or incomplete data.</li>
                <li>Request erasure defining your "Right to be Forgotten".</li>
                <li>Demand restriction of active processing activities.</li>
                <li>Exercise your right to data portability.</li>
                <li>Object to specific processing modalities.</li>
                <li>Withdraw your operational consent at any time.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact the Data Controller directly at{" "}
                <a href="mailto:tasnim.kumar@hotmail.com" className="text-[var(--color-primary)] hover:underline">tasnim.kumar@hotmail.com</a>.
              </p>
            </section>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
