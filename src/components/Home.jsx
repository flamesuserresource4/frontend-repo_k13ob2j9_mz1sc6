import { motion } from 'framer-motion';
import { Star, CheckCircle, Sparkles } from 'lucide-react';

const heroImg =
  'https://images.unsplash.com/photo-1622194991020-6a78f88e05c9?q=80&w=2000&auto=format&fit=crop';

const beforeImg =
  'https://images.unsplash.com/photo-1607872152897-2f3a9b5944c9?q=80&w=1600&auto=format&fit=crop';
const afterImg =
  'https://images.unsplash.com/photo-1620799139507-85ae88f0f582?q=80&w=1600&auto=format&fit=crop';

export default function Home() {
  return (
    <section id="home" className="pt-16 bg-black text-white">
      {/* Hero */}
      <div className="relative">
        <img
          src={heroImg}
          alt="Premium shoe repair"
          className="h-[78vh] w-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                Premium Shoes Repair & Cleaning Service
              </h1>
              <p className="mt-4 text-white/80 text-lg">
                Restore, Refresh, and Revive your favorite shoes with expert care.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-500 text-black px-6 py-3 font-medium shadow-lg shadow-amber-500/30 hover:bg-amber-400 transition"
                >
                  Order via WhatsApp
                </a>
                <a
                  href="#prices"
                  className="rounded-full border border-white/20 px-6 py-3 font-medium hover:border-white/40 hover:bg-white/5 transition"
                >
                  Price List
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-400" /> 4.9/5 Trusted by customers</div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-400" /> Craftsmanship Guaranteed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature highlights */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: 'Repair', desc: 'Reglue, stitch, sole fix, and more.' },
            { title: 'Deep Clean', desc: 'Sanitized, deodorized, and refreshed.' },
            { title: 'Repaint', desc: 'Color restoration and premium finish.' },
          ].map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <Sparkles className="h-5 w-5 text-amber-400" />
              </div>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Before After */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl"
          >
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Before</h3>
              <span className="text-xs text-white/60">Deep Clean + Repair</span>
            </div>
            <img src={beforeImg} alt="Before" className="w-full h-72 object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl"
          >
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">After</h3>
              <span className="text-xs text-white/60">Like new finish</span>
            </div>
            <img src={afterImg} alt="After" className="w-full h-72 object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Fast Process',
              desc: 'Efficient turnaround with careful handling.',
            },
            {
              title: 'Professional Team',
              desc: 'Experienced artisans & modern tools.',
            },
            {
              title: 'Nationwide Service',
              desc: 'Pick-up in Jabodetabek, drop-off for other cities.',
            },
          ].map((b) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 shadow-xl"
            >
              <h4 className="text-lg font-semibold">{b.title}</h4>
              <p className="mt-2 text-white/70 text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-zinc-900/60 border border-white/10 p-6 md:p-10 shadow-2xl">
          <div className="flex items-center gap-2 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400" />
            ))}
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {[
              'My sneakers look brand new! Fast and professional.',
              'Amazing repaint job on my leather shoes. Premium finish.',
              'Pickup was convenient. Great communication and results.',
            ].map((t, idx) => (
              <motion.blockquote
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-black/30 border border-white/10 p-5"
              >
                “{t}”
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to repair your shoes? Chat us now.</h3>
            <p className="text-white/70 mt-2">We’ll assess your shoes and recommend the best treatment.</p>
          </div>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-amber-500 text-black px-6 py-3 font-medium shadow-lg shadow-amber-500/30 hover:bg-amber-400 transition"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
