import { motion } from 'framer-motion';
import { Wrench, Paintbrush, Sparkles, Scissors, Truck, Check } from 'lucide-react';

const services = [
  {
    title: 'Deep Cleaning',
    icon: Sparkles,
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    desc: 'Thorough clean, deodorize, and sanitize for all materials.'
  },
  {
    title: 'Unyellowing',
    icon: Scissors,
    img: 'https://images.unsplash.com/photo-1536840362354-88f808b04a60?q=80&w=1600&auto=format&fit=crop',
    desc: 'Midsole whitening and oxidation removal for a fresh look.'
  },
  {
    title: 'Reglue',
    icon: Wrench,
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
    desc: 'Professional bonding for soles and separated parts.'
  },
  {
    title: 'Repaint',
    icon: Paintbrush,
    img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop',
    desc: 'Color restoration and custom repaint using premium paints.'
  },
  {
    title: 'Premium Care',
    icon: Sparkles,
    img: 'https://images.unsplash.com/photo-1593011957391-cede88c2ee32?q=80&w=1600&auto=format&fit=crop',
    desc: 'Full treatment package for high-end leather and limited pairs.'
  }
];

export default function ServicesPricing() {
  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Services
        </motion.h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, img, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-zinc-900/80 border border-white/10 shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-sm">
                  <Icon className="h-4 w-4 text-amber-400" />
                  {title}
                </div>
              </div>
              <div className="p-5">
                <p className="text-white/70 text-sm min-h-[48px]">{desc}</p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-black hover:bg-amber-400 transition"
                >
                  Order via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <section id="how" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold"
          >
            How It Works
          </motion.h3>

          <ol className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { step: 'Order via WhatsApp', desc: 'Tell us your shoe type & issue.' },
              { step: 'Pick Up / Drop Off', desc: 'Pick up (Jabodetabek) or courier to us.' },
              { step: 'Process by Afix Team', desc: 'Handled by professionals with premium tools.' },
              { step: 'Shoes Delivered', desc: 'Quality checked and safely delivered back.' },
            ].map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl bg-zinc-900/80 border border-white/10 p-6"
              >
                <div className="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-black font-semibold shadow-lg">{i + 1}</div>
                <h4 className="mt-2 font-semibold">{s.step}</h4>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Price list */}
        <section id="prices" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold"
          >
            Price List
          </motion.h3>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-xl">
            <div className="grid grid-cols-5 text-left text-sm">
              <div className="col-span-2 px-4 py-3 text-white/60">Category</div>
              <div className="px-4 py-3 text-white/60">Deep Cleaning</div>
              <div className="px-4 py-3 text-white/60">Reglue</div>
              <div className="px-4 py-3 text-white/60">Repaint</div>
            </div>
            {[
              { cat: 'Sneakers', clean: 'IDR 80k - 120k', reglue: 'IDR 70k - 150k', repaint: 'IDR 150k - 300k' },
              { cat: 'Leather Shoes', clean: 'IDR 120k - 180k', reglue: 'IDR 100k - 200k', repaint: 'IDR 250k - 450k' },
              { cat: 'Heels', clean: 'IDR 90k - 140k', reglue: 'IDR 80k - 160k', repaint: 'IDR 160k - 300k' },
              { cat: 'Boots', clean: 'IDR 150k - 220k', reglue: 'IDR 150k - 300k', repaint: 'IDR 300k - 600k' },
            ].map((r, idx) => (
              <div key={r.cat} className={`grid grid-cols-5 text-sm ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                <div className="col-span-2 px-4 py-4 font-medium">{r.cat}</div>
                <div className="px-4 py-4 text-white/80">{r.clean}</div>
                <div className="px-4 py-4 text-white/80">{r.reglue}</div>
                <div className="px-4 py-4 text-white/80">{r.repaint}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-white/60 flex items-start gap-2">
            <Check className="h-4 w-4 text-amber-400 mt-0.5" /> Price varies based on condition and material. Contact us for exact quote.
          </div>
        </section>
      </div>
    </section>
  );
}
