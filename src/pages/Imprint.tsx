import { PageWrapper } from '../components/layout/PageWrapper';

export default function Imprint() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Imprint (Legal Disclosure)</h1>
          <div className="glass-panel p-8 rounded-2xl max-w-2xl text-gray-300 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Company Name</h2>
              <p>AbsolutData Ltd</p>
            </div>
            
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Registered Address</h2>
              <p>8 Clermont Place<br/>Romford, RM1 2EY<br/>United Kingdom</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white mb-2">Company Registration Number</h2>
              <p>8935569</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white mb-2">Contact Details</h2>
              <p>Email: <a href="mailto:tasnim.kumar@hotmail.com" className="text-[var(--color-primary)] hover:underline">tasnim.kumar@hotmail.com</a></p>
              <p>Phone: +44 7535 975867</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
