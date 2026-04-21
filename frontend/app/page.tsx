import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Solutions from '@/components/sections/Solutions';
import Technology from '@/components/sections/Technology';
import Industries from '@/components/sections/Industries';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Technology />
      <Industries />
      <Contact />
      <Footer />
    </main>
  );
}
