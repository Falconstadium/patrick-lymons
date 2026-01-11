'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

export default function Contact() {
  const contactRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(contactRef.current, {
      autoAlpha: 0,
      y: 100,
      stagger: 0.2,
      ease: 'power2.out',
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: contactRef.current,
      start: 'top 90%',
      end: 'bottom bottom',
      scrub: 1,
    });
  });

  return (
    <div className="min-h-[75dvh] py-20 px-5" ref={contactRef} id="contact">
      <div className="max-w-xl w-full space-y-4 mx-auto grid place-items-center">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="font-general font-medium text-xs xl:text-sm text-neutral-500">
            Contact
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold font-general">
            Let’s build your plan together!
          </h2>
          <p className="font-gambetta text-sm lg:text-base">
            Have a question about training, nutrition, or which program fits you
            best? Reach out — I’ll help you find your next step forward.
          </p>
        </div>

        {/* Send Button */}
        <button
          onClick={() => window.open('https://ig.me/m/patricklyons', '_blank')}
          className="text-white bg-[#E63946] font-medium font-general text-sm py-2 px-5 rounded-lg transition-colors shadow-lg hover:bg-red-600 active:bg-red-600">
          Send a Message
        </button>
      </div>
    </div>
  );
}
