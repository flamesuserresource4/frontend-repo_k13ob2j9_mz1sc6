import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#how', label: 'How It Works' },
  { href: '#prices', label: 'Price List' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
      scrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-600 shadow-lg" />
            <div className="text-white font-semibold tracking-wide">Afix Shoes</div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-black shadow/50 shadow-amber-500/30 hover:bg-amber-400 transition"
            >
              <MessageCircle className="h-4 w-4" /> Chat WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-black shadow/50 shadow-amber-500/30 hover:bg-amber-400 transition"
            >
              <MessageCircle className="h-4 w-4" /> Chat WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
