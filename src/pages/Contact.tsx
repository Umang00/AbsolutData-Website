import { useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Button } from '../components/ui/Components';
import { Mail, MapPin, Phone, Briefcase, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      description: formData.get('description')
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Failed to send message');

      toast.success('Inquiry Sent Successfully', {
        description: 'Thank you for reaching out. Our team will get back to you shortly.',
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      toast.error('Submission Failed', {
        description: error.message || 'There was an issue sending your message. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Col: Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">A Trusted Partner</h2>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                We welcome conversations with organisations seeking a trusted partner in technology, risk, and transformation. 
                Whether you are exploring a strategic initiative, addressing operational challenges, or seeking specialist expertise, AbsolutData Ltd is ready to support you.
              </p>

              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="glass-panel p-4 rounded-xl mt-1">
                    <MapPin className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Registered Address</h4>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      8 Clermont Place<br />
                      Romford, RM1 2EY<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="glass-panel p-4 rounded-xl mt-1">
                    <Mail className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                    <a href="mailto:tasnim.kumar@hotmail.com" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                      tasnim.kumar@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="glass-panel p-4 rounded-xl mt-1">
                    <Phone className="text-[var(--color-primary)] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Telephone</h4>
                    <a href="tel:+447535975867" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                      +44 7535 975867
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="glass-panel p-4 rounded-xl mt-1">
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

            {/* Right Col: Functional Form */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl w-full">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <Send className="text-[var(--color-primary)]" />
                Send an Inquiry
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">How can we help?</label>
                  <textarea 
                    id="description" 
                    name="description" 
                    required
                    rows={5}
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-transparent transition-all resize-none"
                    placeholder="Describe your inquiry..."
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full h-14 text-lg">
                  {loading ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
