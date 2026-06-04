import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import ScrollTop from '@/components/ScrollTop';
import React, { Suspense, lazy } from 'react';
const HeroSlider = lazy(() => import('@/sections/HeroSlider'));
import QuickStrip from '@/sections/QuickStrip';
import About from '@/sections/About';
import Services from '@/sections/Services';
import PoolModels from '@/sections/PoolModels';
import Reasons from '@/sections/Reasons';
const Testimonials = lazy(() => import('@/sections/Testimonials'));
import CTABanner from '@/sections/CTABanner';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-[320px] bg-white" />}>
          <HeroSlider />
        </Suspense>
        <QuickStrip />
        <About />
        <Services />
        <PoolModels />
        <Reasons />
        <Suspense fallback={<div className="min-h-[220px] bg-white" />}>
          <Testimonials />
        </Suspense>
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
