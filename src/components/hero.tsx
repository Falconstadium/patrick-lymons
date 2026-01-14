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
          stagger: 0.1,
        });
      },
    });
  });

  return (
    <section
      className="max-w-5xl mx-auto grid gap-8 lg:gap-0 place-content-center place-items-center md:grid-cols-1 lg:grid-cols-2 px-4 py-12"
      ref={loaderRef}>
      {/* Grid 1 */}
      <div className="grid gap-4 place-items-center lg:place-items-start split">
        <h1 className="font-semibold font-general text-4xl md:text-5xl lg:text-6xl">
          Transform your body, transform your life
        </h1>
        <p className="text-sm lg:text-base font-gambetta">
          I help busy people turn their fitness goals into reality.
          <br /> Your transformation starts with a single conversation.
        </p>
        <p className="text-sm font-gambetta font-medium uppercase text-yellow-700">
          6+ Years Coaching Experience
        </p>
      </div>

      {/* Grid 2 */}
      <div className="mx-auto md:mx-0 w-full md:w-96">
        <Image
          src={'/patrick-pic.jpg'}
          width={300}
          height={400}
          loading="eager"
          alt="The hero picture"
          className="object-cover object-top shadow rounded-xl h-full w-full"
        />
      </div>
    </section>
  );
}
