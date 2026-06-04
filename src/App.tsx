import { Suspense, lazy } from 'react';
import { useHead } from '@unhead/react';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import ScrollTop from '@/components/ScrollTop';
import QuickStrip from '@/sections/QuickStrip';
import About from '@/sections/About';
import Services from '@/sections/Services';
import PoolModels from '@/sections/PoolModels';
import Reasons from '@/sections/Reasons';
import CTABanner from '@/sections/CTABanner';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

const HeroSlider = lazy(() => import('@/sections/HeroSlider'));
const Testimonials = lazy(() => import('@/sections/Testimonials'));

function App() {
  useHead({
    title: 'Sahihi Pools — Kenya\'s Trusted Pool Engineers',
    meta: [
      { name: 'description', content: 'Professional pool construction, repair and maintenance across Kenya.' },
      { property: 'og:title', content: 'Sahihi Pools' },
      { property: 'og:description', content: 'Professional pool construction and maintenance — domestic & commercial.' },
      { property: 'og:image', content: '/images/hero1.jpg' },
    ],
    link: [
      { rel: 'canonical', href: 'https://sahihipools.example/' }
    ]
  })

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