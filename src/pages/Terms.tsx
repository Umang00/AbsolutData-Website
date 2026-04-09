import { PageWrapper } from '../components/layout/PageWrapper';

export default function Terms() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
            <p><strong>Last Updated: {new Date().getFullYear()}</strong></p>
            <p>Welcome to the AbsolutData Ltd website. By accessing or using this site, you agree to comply with and be bound by the following terms.</p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Use of the Website</h2>
            <p>The content provided on this website is for general informational purposes only. AbsolutData Ltd reserves the right to modify or discontinue content without notice.</p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Intellectual Property</h2>
            <p>All materials contained on this site, including text, graphics, and logos, are the intellectual property of AbsolutData Ltd. Unauthorized reproduction is strictly prohibited.</p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Limitation of Liability</h2>
            <p>AbsolutData Ltd shall not be liable for any direct, indirect, or consequential damages resulting from the use or inability to use this website.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
