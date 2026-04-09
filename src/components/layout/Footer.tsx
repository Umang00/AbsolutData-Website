import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg-dark)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Logo className="h-10 w-auto" mode="brand" />
              <span className="text-xl font-bold tracking-tight text-white">AbsolutData Ltd</span>
            </div>
            <p className="text-[var(--color-text-muted)] max-w-sm mb-6">
              Strategic Technology. Trusted Execution. Measurable Impact.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[var(--color-text-muted)]">
                <MapPin size={20} className="text-[var(--color-primary)] shrink-0 mt-1" />
                <span>8 Clermont Place<br />Romford, RM1 2EY<br />United Kingdom</span>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text-muted)]">
                <Phone size={20} className="text-[var(--color-primary)] shrink-0" />
                <a href="tel:+447535975867" className="hover:text-[var(--color-primary)] transition-colors">+44 7535 975867</a>
              </li>
              <li className="flex items-center gap-3 text-[var(--color-text-muted)]">
                <Mail size={20} className="text-[var(--color-primary)] shrink-0" />
                <a href="mailto:tasnim.kumar@hotmail.com" className="hover:text-[var(--color-primary)] transition-colors">tasnim.kumar@hotmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[var(--color-text-muted)] text-sm">
            © {new Date().getFullYear()} AbsolutData Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-[var(--color-text-muted)] hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[var(--color-text-muted)] hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/imprint" className="text-[var(--color-text-muted)] hover:text-white transition-colors">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
