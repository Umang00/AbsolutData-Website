import { PageWrapper } from '../components/layout/PageWrapper';
import { ShieldAlert, Info, Scale } from 'lucide-react';

export default function Imprint() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Imprint & Legal Disclosure</h1>
            <p className="text-[var(--color-text-muted)] tracking-wide">Mandatory corporate disclosure pursuant to UK digital standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-[var(--color-primary)]/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none" />
              <Info className="text-[var(--color-primary)] w-8 h-8 mb-6" />
              <h2 className="text-xl font-bold text-white mb-6">Corporate Details</h2>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <strong className="block text-gray-400 mb-1 tracking-wider uppercase text-xs">Entity Name</strong>
                  AbsolutData Ltd
                </div>
                <div>
                  <strong className="block text-gray-400 mb-1 tracking-wider uppercase text-xs">Company Registration Number</strong>
                  8935569 (Registered in England and Wales)
                </div>
                <div>
                  <strong className="block text-gray-400 mb-1 tracking-wider uppercase text-xs">Registered Headquarters</strong>
                  8 Clermont Place<br />
                  Romford, RM1 2EY<br />
                  United Kingdom
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-[var(--color-primary)]/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none" />
              <ShieldAlert className="text-[var(--color-primary)] w-8 h-8 mb-6" />
              <h2 className="text-xl font-bold text-white mb-6">Direct Contact</h2>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <strong className="block text-gray-400 mb-1 tracking-wider uppercase text-xs">Primary Email</strong>
                  <a href="mailto:tasnim.kumar@hotmail.com" className="text-[var(--color-primary)] hover:underline">tasnim.kumar@hotmail.com</a>
                </div>
                <div>
                  <strong className="block text-gray-400 mb-1 tracking-wider uppercase text-xs">Telephone</strong>
                  +44 7535 975867
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 text-xs text-gray-400">
                  Business hours are Monday through Friday, 09:00 - 17:00 (GMT). 
                  Inquiries are typically addressed within 24 operational hours.
                </div>
              </div>
            </div>

          </div>

          <div className="glass-panel p-8 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="text-gray-400 w-6 h-6" />
              <h2 className="text-xl font-bold text-white">Disclaimer of Liability</h2>
            </div>
            <div className="text-gray-400 space-y-4 text-sm leading-relaxed">
              <p>
                <strong>Content Liability:</strong> As a service provider, we are responsible for our own content on these pages under general UK laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected.
              </p>
              <p>
                <strong>Link Liability:</strong> Our site may contain links to external third-party websites, over whose content we have no influence. Therefore, we cannot accept any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.
              </p>
              <p>
                <strong>Copyright:</strong> The content and works published on this website are governed by the copyright laws of the United Kingdom. Any duplication, processing, distribution or any form of utilization beyond the scope of copyright law shall require the prior written consent of the author or authors in question.
              </p>
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
