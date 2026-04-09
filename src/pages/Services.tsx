import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      id: "advisory",
      image: "/images/service_tech_advisory.png",
      title: "Technology Advisory",
      desc: "We provide strategic guidance to help organisations make informed, future-ready technology decisions—ensuring alignment with business objectives, regulatory expectations, and market dynamics.",
      features: ["Strategic Roadmaps", "Digital Transformation", "Technology Due Diligence"]
    },
    {
      id: "legal",
      image: "/images/service_it_legal.png",
      title: "IT Legal & Contracting",
      desc: "Our expertise spans the structuring, drafting, and governance of IT contracts—helping clients reduce exposure, strengthen compliance, and establish robust commercial frameworks.",
      features: ["Contract Negotiation", "Compliance Governance", "Risk Mitigation"]
    },
    {
      id: "managed",
      image: "/images/service_managed_it.png",
      title: "Managed IT & Administration",
      desc: "We deliver resilient, secure, and scalable IT operations—allowing organisations to focus on growth while we ensure continuity, performance, and control.",
      features: ["Infrastructure Management", "Cloud Operations", "Cybersecurity Admin"]
    },
    {
      id: "software",
      image: "/images/service_software.png",
      title: "Custom Software Engineering",
      desc: "We design and build bespoke solutions tailored to complex business requirements—prioritising scalability, security, and long-term sustainability.",
      features: ["Bespoke Platforms", "System Integration", "Scalable Architecture"]
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_services_bg.png" 
            alt="Abstract Technology Architecture" 
            className="w-full h-full object-cover opacity-60"
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
            Capabilities Arsenal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl mx-auto font-light"
          >
            Operating at the intersection of strategy, legal frameworks, and engineering excellence.
          </motion.p>
        </div>
      </section>

      {/* Services List with Images */}
      <section className="py-24 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => (
            <div key={svc.id} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
                <div className="absolute inset-0 bg-[var(--color-primary)]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={svc.image} 
                  alt={svc.title} 
                  className="w-full aspect-video object-contain transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block px-4 py-2 rounded-full glass-panel text-[var(--color-primary)] text-sm font-bold tracking-wider uppercase mb-2">
                  0{i + 1}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{svc.title}</h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  {svc.desc}
                </p>
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">Key Priorities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-gray-200">
                        <ArrowRight size={18} className="text-[var(--color-primary)] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
