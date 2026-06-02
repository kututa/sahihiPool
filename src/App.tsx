import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import ScrollTop from '@/components/ScrollTop';
import HeroSlider from '@/sections/HeroSlider';
import QuickStrip from '@/sections/QuickStrip';
import About from '@/sections/About';
import Services from '@/sections/Services';
import PoolModels from '@/sections/PoolModels';
import Reasons from '@/sections/Reasons';
import Testimonials from '@/sections/Testimonials';
import CTABanner from '@/sections/CTABanner';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <Navbar />
      <main>
        <HeroSlider />
        <QuickStrip />
        <About />
        <Services />
        <PoolModels />
        <Reasons />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
