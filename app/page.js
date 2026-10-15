import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Platforms from '@/components/Platforms';
import ValueProps from '@/components/ValueProps';
import UnderManagement from '@/components/UnderManagement';
import Manage from '@/components/Manage';
import Design from '@/components/Design';
import DesignGallery from '@/components/DesignGallery';
import Support from '@/components/Support';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Platforms />
      <ValueProps />
      <UnderManagement />
      <Manage />
      <Design />
      <DesignGallery />
      <Support />
      <Stats />
      <Process />
      <Testimonials />
      <About />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
      <Chat />
    </main>
  );
}
