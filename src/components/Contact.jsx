import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-zinc-900/70 border border-white/10 p-6 shadow-xl">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="mt-2 text-white/70 text-sm">We’re happy to help assess your shoes and suggest the best treatment.</p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-white/80"><Phone className="h-4 w-4 text-amber-400" /> +62 812-3456-7890</div>
              <div className="flex items-center gap-3 text-white/80"><MapPin className="h-4 w-4 text-amber-400" /> Jakarta, Indonesia</div>
              <div className="flex items-center gap-3 text-white/80"><Clock className="h-4 w-4 text-amber-400" /> Mon–Sun: 09.00 – 20.00</div>
            </div>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-medium text-black hover:bg-amber-400 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl aspect-video">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.654961347909!2d106.816666!3d-6.175387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e5df8b4f2f%3A0x77c6c5b0f2!2sJakarta!5e0!3m2!1sen!2sid!4v1610000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-12 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Afix Shoes Repair & Cleaning. All rights reserved.
        </div>
      </div>
    </section>
  );
}
