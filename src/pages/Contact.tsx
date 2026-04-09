import { PageWrapper } from '../components/layout/PageWrapper';
import { Button } from '../components/ui/Components';
import { Mail, MapPin, Phone, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-24 pb-16 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Engage With Us. Let’s Start a Conversation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Col: Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">A Trusted Partner</h2>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                We welcome conversations with organisations seeking a trusted partner in technology, risk, and transformation. 
                Whether you are exploring a strategic initiative, addressing operational challenges, or seeking specialist expertise, AbsolutData Ltd is ready to support you.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="glass-panel p-4 rounded-xl h-fit">
                    <MapPin className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Registered Address</h4>
                    <p className="text-[var(--color-text-muted)]">
                      8 Clermont Place<br />
                      Romford, RM1 2EY<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="glass-panel p-4 rounded-xl h-fit">
                    <Mail className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                    <a href="mailto:tasnim.kumar@hotmail.com" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                      tasnim.kumar@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="glass-panel p-4 rounded-xl h-fit">
                    <Phone className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Telephone</h4>
                    <a href="tel:+447535975867" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                      +44 7535 975867
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="glass-panel p-4 rounded-xl h-fit">
                    <Briefcase className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Company Registry</h4>
                    <p className="text-[var(--color-text-muted)]">
                      Reg No: 8935569
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Mailto Form Mockup */}
            <div className="glass-panel p-8 md:p-12 rounded-3xl h-fit">
              <h3 className="text-2xl font-bold mb-6 text-white">Send an Inquiry</h3>
              <p className="text-[var(--color-text-muted)] mb-8">
                Reach out to us directly via email. Click the button below to open your default mail client and compose a message to our team.
              </p>
              
              <div className="bg-black/20 border border-[var(--color-primary)]/20 rounded-xl p-6 mb-8 text-center space-y-4">
                <Mail className="w-12 h-12 text-[var(--color-primary)] mx-auto opacity-80" />
                <h4 className="font-semibold text-white text-lg">tasnim.kumar@hotmail.com</h4>
                <p className="text-sm text-gray-400">We typically respond within 24 hours.</p>
              </div>

              <a href="mailto:tasnim.kumar@hotmail.com?subject=Strategic%20Technology%20Inquiry" className="block w-full">
                <Button className="w-full h-14 text-lg">
                  Open Email Client
                </Button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
