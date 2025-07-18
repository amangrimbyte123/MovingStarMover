import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import QuoteForm from '@/components/sections/QuoteForm';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Description from '@/components/sections/Description';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Description/>
      <Services />
      <About />
      <QuoteForm />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
