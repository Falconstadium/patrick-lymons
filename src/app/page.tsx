'use client';

import { useState } from 'react';
import Contact from '../components/contact';
import Faq from '../components/faq';
import Footer from '../components/footer';
import Hero from '../components/hero';
import HowWorks from '../components/how-it-works';
import About from '../components/meet-your-coach';
import Method from '../components/method';
import Navbar from '../components/navbar';
import Preloader from '../components/preload';
import ScrollBtn from '../components/scroll-button';

export default function Home() {
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
          <Contact />
          <Footer />
          <ScrollBtn />
        </>
      )}
    </>
  );
}
