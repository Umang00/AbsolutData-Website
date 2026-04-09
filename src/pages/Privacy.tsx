import { PageWrapper } from '../components/layout/PageWrapper';

export default function Privacy() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
            <p><strong>Last Updated: {new Date().getFullYear()}</strong></p>
            <p>At AbsolutData Ltd, we are committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal information.</p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>When you contact us via our website, we may collect your name, email address, and the contents of your message. We use this exclusively to respond to your inquiries.</p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect personal data against accidental or unlawful destruction, loss, or unauthorized access.</p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Contact</h2>
            <p>If you have any questions regarding how we handle your data, please contact us at tasnim.kumar@hotmail.com.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
