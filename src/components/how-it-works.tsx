import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

export default function HowWorks() {
  const worksRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(worksRef.current, {
      autoAlpha: 0,
      y: 100,
      stagger: 0.2,
      ease: 'power2.out',
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: worksRef.current,
      start: 'top 70%',
      end: 'bottom bottom',
      scrub: 1,
    });
  });

  return (
    <section
      className="min-h-dvh grid gap-10 place-content-center place-items-center md:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto px-4 py-20"
      ref={worksRef}>
      {/* Grid 1 */}
      <div className="space-y-3 mx-auto md:mx-0">
        <h1 className="font-general font-medium text-neutral-500 text-xs xl:text-sm">
          How it works
        </h1>
        <h2 className="font-general font-semibold text-3xl md:text-5xl">
          Your path to lasting results
        </h2>
        <p className="font-gambetta text-sm lg:text-base">
          Every transformation starts with structure. Here’s how we turn goals
          into real progress — one step at a time.
        </p>
        <div className="w-full md:w-80">
          <Image
            src={'/howworks-pic.png'}
            alt="how it works picture"
            width={300}
            height={200}
            className="object-cover object-top rounded-xl shadow w-full h-full md:h-60"
          />
        </div>
      </div>

      {/* Grid 2 */}
      <div className="space-y-4">
        <div className="space-y-1 font-general">
          <span className="text-xs text-neutral-400">01</span>
          <h3 className="font-medium text-lg md:text-xl">Discovery message</h3>
          <p className="font-gambetta text-sm">
            We’ll explore your goals, challenges, and lifestyle to create the
            right approach.
          </p>
        </div>
        <div className="space-y-1 font-general">
          <span className="text-xs text-neutral-400">02</span>
          <h3 className="font-medium text-lg md:text-xl">Personalized Plan</h3>
          <p className="font-gambetta text-sm">
            Training and nutrition tailored to your lifestyle — realistic,
            flexible, and sustainable.
          </p>
        </div>
        <div className="space-y-1 font-general">
          <span className="text-xs text-neutral-400">03</span>
          <h3 className="font-medium text-lg md:text-xl">
            Lifestyle Integration
          </h3>
          <p className="font-gambetta text-sm">
            We adapt your plan as your schedule, lifestyle, and needs shift
          </p>
        </div>
        <div className="space-y-1 font-general">
          <span className="text-xs text-neutral-400">04</span>
          <h3 className="font-medium text-lg md:text-xl">Long-Term Balance</h3>
          <p className="font-gambetta text-sm">
            Progress doesn’t end here — we’ll refine, celebrate, and keep
            building together
          </p>
        </div>
      </div>
    </section>
  );
}
