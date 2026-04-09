import { PageWrapper } from '../components/layout/PageWrapper';
import { Button, Card } from '../components/ui/Components';
import { motion } from 'framer-motion';
import { Shield, Scale, Server, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const capabilities = [
    {
      icon: <Shield className="w-10 h-10 text-[var(--color-primary)] mb-4" />,
      title: "Technology Advisory",
      desc: "Strategic guidance for future-ready tech decisions aligned with business goals and regulations."
    },
    {
      icon: <Scale className="w-10 h-10 text-[var(--color-primary)] mb-4" />,
      title: "IT Legal & Contracting",
      desc: "Structuring and governance of IT contracts to reduce exposure and strengthen compliance."
    },
    {
      icon: <Server className="w-10 h-10 text-[var(--color-primary)] mb-4" />,
      title: "Managed IT & Admin",
      desc: "Resilient, secure, and scalable IT operations ensuring continuity and control."
    },
    {
      icon: <Code className="w-10 h-10 text-[var(--color-primary)] mb-4" />,
      title: "Custom Software",
      desc: "Bespoke engineering tailored to complex requirements prioritising scalability."
    }
  ];

  const whyUs = [
    { title: "Established Expertise", desc: "Delivering trusted solutions since 2017." },
    { title: "Integrated Approach", desc: "Combining advisory, legal, and technical capabilities." },
    { title: "Client-Centric", desc: "Focused on measurable outcomes, not just outputs." },
    { title: "Globally Minded", desc: "UK-based, operating with international standards." }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Abstract background gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            Strategic <span className="text-[var(--color-primary)]">Technology.</span><br />
            Trusted <span className="text-[var(--color-primary)]">Execution.</span><br />
            Measurable <span className="text-white">Impact.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl mx-auto mb-12"
          >
            We partner with organisations to navigate complexity, mitigate risk, and unlock value through technology.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/services">
              <Button className="w-full sm:w-auto gap-2">
                Explore Services <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full sm:w-auto">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl leading-relaxed text-gray-300">
            As a UK-based advisory and technology firm, we operate at the intersection of strategy, legal frameworks, and engineering excellence—delivering solutions that are not only technically sound, but commercially and operationally aligned.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Capabilities</h2>
            <div className="h-1 w-20 bg-[var(--color-primary)] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <Card key={cap.title} delay={i * 0.1}>
                {cap.icon}
                <h3 className="text-xl font-bold mb-3 text-white">{cap.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{cap.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary)]/10 to-transparent -z-10 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Why AbsolutData Ltd?</h2>
              <p className="text-xl text-[var(--color-primary)] italic mb-10 border-l-4 border-[var(--color-primary)] pl-6 py-2 glass-panel">
                "We don't just implement technology—we enable strategic advantage."
              </p>
              
              <div className="space-y-8">
                {whyUs.map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-[var(--color-text-muted)]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="glass-panel p-8 md:p-12 rounded-3xl relative">
                <div className="absolute -top-6 -left-6 text-6xl text-[var(--color-primary)]/20">"</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Ready to accelerate your transformation?</h3>
                <p className="text-center text-gray-400 mb-8">
                  Whether you are exploring a strategic initiative, addressing operational challenges, or seeking specialist expertise, we are ready to support you.
                </p>
                <div className="flex justify-center">
                  <Link to="/contact">
                    <Button>Get in Touch</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
