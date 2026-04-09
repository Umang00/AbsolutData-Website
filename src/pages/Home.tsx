import { PageWrapper } from '../components/layout/PageWrapper';
import { Button, Card } from '../components/ui/Components';
import { motion } from 'framer-motion';
import { Shield, Scale, Server, Code, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      <section className="relative pt-24 pb-32 overflow-hidden flex items-center min-h-[85vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_bg.png" 
            alt="Abstract Technology Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark)]/40 via-transparent to-[var(--color-bg-dark)] mix-blend-multiply" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-2xl"
          >
            Strategic <span className="text-[var(--color-primary)]">Technology.</span><br />
            Trusted <span className="text-[var(--color-primary)]">Execution.</span><br />
            Measurable <span className="text-[var(--color-primary)]">Impact.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 drop-shadow-md font-light"
          >
            We partner with organisations to navigate complexity, mitigate risk, and unlock value through technology.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/services">
              <Button className="w-full sm:w-auto gap-2 h-14 text-lg px-8">
                Explore Services <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full sm:w-auto h-14 text-lg px-8">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)] font-bold mb-6">Strategic Foundation</h2>
          <p className="text-2xl md:text-3xl leading-relaxed text-gray-200 font-light">
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
      <section className="py-24 relative overflow-hidden bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-center">
          <h2 className="text-4xl font-bold mb-4">Why AbsolutData Ltd?</h2>
          <p className="text-xl text-[var(--color-text-muted)] italic mb-16 max-w-2xl mx-auto">
            "We don't just implement technology—we enable strategic advantage."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyUs.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center gap-4"
              >
                <CheckCircle2 className="w-10 h-10 text-[var(--color-primary)]" />
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-[var(--color-text-muted)] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-panel p-10 md:p-16 rounded-[2rem] border border-[var(--color-primary)]/20 shadow-[0_0_50px_rgba(0,212,255,0.05)]">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to accelerate your transformation?</h3>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Whether you are exploring a strategic initiative, addressing operational challenges, or seeking specialist expertise, we are ready to support you.
            </p>
            <Link to="/contact">
              <Button className="h-14 px-10 text-lg">Contact Our Experts</Button>
            </Link>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
}
