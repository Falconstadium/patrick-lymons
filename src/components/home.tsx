'use client';

import { useState } from 'react';
import Contact from './contact';
import Faq from './faq';
import Footer from './footer';
import Hero from './hero';
import HowWorks from './how-it-works';
import About from './meet-your-coach';
import Method from './method';
import Navbar from './navbar';
import Preloader from './preload';
import Testimonials from './testimonials';
import ScrollBtn from './ui/scroll-button';

function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <div className="min-h-dvh grid grid-rows-[auto_1fr]">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Method />
          <HowWorks />
          <Faq />
          <Testimonials />
          <Contact />
          <Footer />
          <ScrollBtn />
        </>
      )}
    </>
  );
}

export default HomePage;
