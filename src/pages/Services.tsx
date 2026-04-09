import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowRight } from 'lucide-react';

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
      {/* Header */}
      <section className="pt-24 pb-16 bg-white/[0.02] border-b border-white/5 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Our Core Capabilities</h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto font-light">
            Operating at the intersection of strategy, legal frameworks, and engineering excellence.
          </p>
        </div>
      </section>

      {/* Services List with Images */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((svc, i) => (
            <div key={svc.id} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={svc.image} 
                  alt={svc.title} 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" 
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
