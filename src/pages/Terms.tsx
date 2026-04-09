import { PageWrapper } from '../components/layout/PageWrapper';

export default function Terms() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions of Service</h1>
            <p className="text-[var(--color-text-muted)] tracking-wide">Effective Date: March {new Date().getFullYear()}</p>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8 [&_section]:space-y-4">
            
            <section>
              <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and AbsolutData Ltd ("Company," "we," "us," or "our"). 
              </p>
              <p>
                By accessing this site, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the site and you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
              </p>
              <p>
                The Content and the Marks are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United Kingdom and international copyright conventions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 marker:text-[var(--color-primary)]">
                <li>All registration or inquiry information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not access the Site through automated or non-human means without authorization.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">4. Prohibited Activities</h2>
              <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
              <p>As a user of the Site, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400 marker:text-[var(--color-primary)]">
                <li>Systematically retrieve data or other content from the Site to create or compile a database or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
                <li>Use any information obtained from the Site in order to harass, abuse, or harm another person or entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">5. Limit of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or consulting services, even if we have been advised of the possibility of such damages.
              </p>
              <p>
                Our total liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the six (6) month period prior to any cause of action arising.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">6. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws of the United Kingdom. AbsolutData Ltd and yourself irrevocably consent that the courts of the United Kingdom shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">7. Contact Information</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <div className="pl-6 border-l-2 border-[var(--color-primary)]/50 glass-panel p-4 rounded-r-lg mt-4 text-sm font-mono text-gray-300">
                AbsolutData Ltd<br />
                8 Clermont Place<br />
                Romford, RM1 2EY<br />
                Email: tasnim.kumar@hotmail.com
              </div>
            </section>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
