import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const loaderRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    gsap.from(loaderRef.current, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power1.out',
    });

    SplitText.create('.split', {
      type: 'lines, words',
      mask: 'lines',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          duration: 1,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });
  });

  return (
    <section
      className="max-w-4xl mx-auto grid gap-8 place-content-center place-items-center md:grid-cols-2 px-4 py-8"
      ref={loaderRef}>
      <div className="grid place-content-center place-items-center md:place-items-start gap-2 split">
        <h1 className="font-semibold font-general text-4xl sm:text-5xl md:text-5xl lg:text-6xl w-48 md:w-60 lg:w-80 leading-none">
          Transform your body, transform your life
        </h1>
        <p className="text-sm md:text-base font-gambetta">
          I help busy people turn their fitness goals into reality. Your
          transformation starts with a single conversation.
        </p>
        <p className="text-sm font-gambetta tracking-widest uppercase text-yellow-700">
          6+ Years Coaching Experience
        </p>
      </div>
      <div className="mx-auto md:mx-0">
        <Image
          src={'/hero-pic.png'}
          width={300}
          height={200}
          loading="eager"
          alt="The hero picture"
          className="object-cover shadow rounded-xl h-full w-72"
        />
      </div>
    </section>
  );
}
