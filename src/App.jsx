import Navbar from './components/Navbar';
import Home from './components/Home';
import ServicesPricing from './components/ServicesPricing';
import Contact from './components/Contact';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      <Navbar />
      <main>
        <Home />
        <ServicesPricing />
        <Contact />
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-amber-500 text-black px-5 py-3 font-medium shadow-xl shadow-amber-500/30 hover:bg-amber-400 transition"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="h-5 w-5" /> Chat
      </a>
    </div>
  );
}

export default App;
