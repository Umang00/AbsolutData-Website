import { PageWrapper } from '../components/layout/PageWrapper';
import { Card } from '../components/ui/Components';
import { Users, Lightbulb, Target, Handshake } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Lightbulb className="text-[var(--color-primary)] w-8 h-8 mb-4"/>, title: "Clarity in complexity", desc: "Translating technical challenges into actionable strategies." },
    { icon: <Target className="text-[var(--color-primary)] w-8 h-8 mb-4"/>, title: "Precision in execution", desc: "Delivering with discipline, quality, and accountability." },
    { icon: <Handshake className="text-[var(--color-primary)] w-8 h-8 mb-4"/>, title: "Long-term partnership", desc: "Building enduring relationships based on trust and results." }
  ];

  const peopleTraits = [
    "Intellectual curiosity",
    "Technical excellence",
    "Commercial awareness",
    "A commitment to delivering impact"
  ];

  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-24 pb-16 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-[var(--color-primary)] max-w-2xl mx-auto">
            A Partner in Technology-Led Transformation
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl text-gray-300 leading-relaxed text-center mb-16">
              At AbsolutData Ltd, we believe that successful organisations are those that can adapt, scale, and innovate with confidence.
            </p>
            <p className="text-[var(--color-text-muted)] text-lg mb-8">
              Since 2017, we have supported businesses across sectors in addressing complex IT challenges. We do this by bringing together advisory insight, legal rigour, and engineering capability under one unified approach.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Work Is Defined By</h2>
            <div className="h-1 w-16 bg-[var(--color-primary)] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Card key={v.title} delay={i * 0.1} className="items-center text-center">
                {v.icon}
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-[var(--color-text-muted)]">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 md:p-16 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Users className="w-16 h-16 text-[var(--color-primary)] mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our People</h2>
              <p className="text-gray-300 mb-6">
                Our team comprises highly skilled professionals with deep domain expertise across consulting, software engineering, IT operations, and legal frameworks.
              </p>
              <p className="text-gray-300 mb-6">
                We operate with a collaborative model. We bring together the right expertise for each engagement to ensure depth, agility, and precision.
              </p>
            </div>
            
            <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-white">Our Talent Network Demonstrates:</h3>
              <ul className="space-y-4">
                {peopleTraits.map((trait) => (
                  <li key={trait} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full shrink-0" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
