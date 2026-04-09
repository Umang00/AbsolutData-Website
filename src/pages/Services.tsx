import { PageWrapper } from '../components/layout/PageWrapper';
import { Card } from '../components/ui/Components';
import { Shield, Scale, Server, Code, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "advisory",
      icon: <Shield className="w-12 h-12 text-[var(--color-primary)] mb-6" />,
      title: "Technology Advisory",
      desc: "We provide strategic guidance to help organisations make informed, future-ready technology decisions—ensuring alignment with business objectives, regulatory expectations, and market dynamics.",
      features: ["Strategic Roadmaps", "Digital Transformation", "Technology Due Diligence"]
    },
    {
      id: "legal",
      icon: <Scale className="w-12 h-12 text-[var(--color-primary)] mb-6" />,
      title: "IT Legal & Contracting",
      desc: "Our expertise spans the structuring, drafting, and governance of IT contracts—helping clients reduce exposure, strengthen compliance, and establish robust commercial frameworks.",
      features: ["Contract Negotiation", "Compliance Governance", "Risk Mitigation"]
    },
    {
      id: "managed",
      icon: <Server className="w-12 h-12 text-[var(--color-primary)] mb-6" />,
      title: "Managed IT & Administration",
      desc: "We deliver resilient, secure, and scalable IT operations—allowing organisations to focus on growth while we ensure continuity, performance, and control.",
      features: ["Infrastructure Management", "Cloud Operations", "Cybersecurity Admin"]
    },
    {
      id: "software",
      icon: <Code className="w-12 h-12 text-[var(--color-primary)] mb-6" />,
      title: "Custom Software Engineering",
      desc: "We design and build bespoke solutions tailored to complex business requirements—prioritising scalability, security, and long-term sustainability.",
      features: ["Bespoke Platforms", "System Integration", "Scalable Architecture"]
    }
  ];

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-24 pb-16 bg-white/[0.02] border-b border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-primary)]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Our Core Capabilities</h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
            Operating at the intersection of strategy, legal frameworks, and engineering excellence.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((svc, i) => (
            <Card key={svc.id} delay={i * 0.15} className="md:flex-row gap-8 items-start md:items-center">
              <div className="md:w-1/3 shrink-0 glass-panel bg-white/5 p-8 rounded-2xl flex flex-col items-center text-center w-full">
                {svc.icon}
                <h2 className="text-2xl font-bold text-white">{svc.title}</h2>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {svc.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {svc.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-[var(--color-text-muted)]">
                      <ArrowRight size={16} className="text-[var(--color-primary)]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
