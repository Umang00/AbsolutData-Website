import { useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Button } from '../components/ui/Components';
import { Mail, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_contact_bg.png" 
            alt="Digital Interface Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/80 via-[var(--color-bg-dark)]/40 to-[var(--color-bg-dark)] mix-blend-multiply" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
          >
            Initiate Engagement
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light"
          >
            Direct access to our senior advisory and engineering leadership to discuss your strategic imperatives.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Info */}
            <div className="col-span-1 lg:col-span-4 space-y-12 pr-0 lg:pr-4">
              
              <div className="pt-2">
                <h2 className="text-3xl font-bold mb-6 text-white">Direct Channels</h2>
                <div className="space-y-8">
                  <div className="flex gap-5 items-center group">
                    <div className="glass-panel p-4 rounded-xl transition-colors group-hover:border-[var(--color-primary)]/50">
                      <Mail className="text-[var(--color-primary)] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Email</h4>
                      <a href="mailto:tasnim.kumar@hotmail.com" className="text-lg text-white hover:text-[var(--color-primary)] transition-colors">
                        tasnim.kumar@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5 items-center group">
                    <div className="glass-panel p-4 rounded-xl transition-colors group-hover:border-[var(--color-primary)]/50">
                      <Phone className="text-[var(--color-primary)] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Telephone</h4>
                      <a href="tel:+447535975867" className="text-lg text-white hover:text-[var(--color-primary)] transition-colors">
                        +44 7535 975867
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Col: Functional Form */}
            <div className="col-span-1 lg:col-span-7">
              <div className="glass-panel p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/10 relative overflow-hidden bg-black/40">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 blur-[80px] rounded-full pointer-events-none" />
                
                <h3 className="text-3xl font-bold mb-2 text-white">Secure Inquiry</h3>
                <p className="text-gray-400 mb-10 font-light">All communications are treated with strict confidentiality.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full bg-[var(--color-bg-dark)]/80 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Corporate Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full bg-[var(--color-bg-dark)]/80 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Executive Summary of Requirements</label>
                    <textarea 
                      id="description" 
                      name="description" 
                      required
                      rows={6}
                      className="w-full bg-[var(--color-bg-dark)]/80 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-transparent transition-all resize-none"
                      placeholder="Outline the scope of your inquiry, commercial objectives, or technical challenges..."
                    />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full h-14 text-lg mt-4 flex items-center justify-center gap-3">
                    {loading ? 'Initiating Dispatch...' : 'Submit Transmission'}
                    {!loading && <Send size={20} />}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
