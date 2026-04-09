import { PageWrapper } from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_about_bg.png" 
            alt="Global Corporate Background" 
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
            About AbsolutData Ltd
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light"
          >
            Engineering competitive advantage through rigorous technology advisory and precise execution.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full mb-6" />
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  To empower global enterprises to navigate digital complexity safely and strategically. We act as the critical bridge between ambitious business objectives and the complex technological architectures required to achieve them.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Approach</h2>
                <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full mb-6" />
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  We reject isolated thinking. Every solution we deliver evaluates the architectural integrity, legal compliance boundaries, and long-term commercial viability of the system. Our multi-disciplinary approach ensures that our clients don't just survive technical shifts, but define them.
                </p>
              </div>
            </div>

            <div className="glass-panel p-10 lg:p-16 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 blur-[50px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full" />
              
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">The AbsolutData Difference</h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex flex-col gap-2">
                  <span className="text-[var(--color-primary)] font-bold tracking-wider text-sm uppercase">01 / Strategic Precision</span>
                  <span className="text-gray-300">We align every line of code and contract clause directly to enterprise goals.</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-[var(--color-primary)] font-bold tracking-wider text-sm uppercase">02 / Regulatory Fluency</span>
                  <span className="text-gray-300">Deep integration of IT law and compliance from day zero of architecture design.</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-[var(--color-primary)] font-bold tracking-wider text-sm uppercase">03 / Engineering Excellence</span>
                  <span className="text-gray-300">Scalable, secure, and resilient systems capable of absorbing enterprise demands.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership / History Footer Note */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl text-white font-bold mb-6">Established In 2017</h3>
            <p className="text-lg text-white font-light leading-relaxed">
              Based in the United Kingdom, AbsolutData Ltd has quietly powered the digital infrastructure and risk management strategies for complex organizations requiring zero-compromise partnerships.
            </p>
        </div>
      </section>
    </PageWrapper>
  );
}
