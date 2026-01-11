import { useGSAP } from '@gsap/react';
import {
  IconArrowBackUpDouble,
  IconBackpack,
  IconSettings,
} from '@tabler/icons-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

export default function Method() {
  const methodRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(methodRef.current, {
      autoAlpha: 0,
      y: 100,
      stagger: 0.2,
      ease: 'power2.out',
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: methodRef.current,
      start: 'top center',
      end: 'bottom bottom',
      scrub: 1,
    });
  });

  return (
    <section
      className="max-w-4xl mx-auto grid gap-8 lg:gap-0 place-content-center place-items-center md:grid-cols-1 lg:grid-cols-2 px-4 py-20 min-h-dvh"
      ref={methodRef}>
      {/* Grid 1 */}
      <div className="space-y-4">
        <h1 className="font-general font-medium text-xs text-neutral-500">
          Method
        </h1>
        <h2 className="font-semibold font-general text-3xl md:text-5xl">
          Real training for real results
        </h2>
        <p className="text-sm lg:text-base font-gambetta">
          No shortcuts. No gimmicks. Just honest work and a plan built
          specifically for you. I train the way I believe in, and my clients see
          it in the mirror.
        </p>
        <div className="grid gap-2 font-gambetta text-sm">
          <p className="flex items-center gap-2">
            <IconBackpack stroke={2} size={16} />
            Personalized programming tailored to your goals
          </p>
          <p className="flex items-center gap-2">
            <IconSettings stroke={2} size={16} />
            Progressive overload that builds lasting strength
          </p>
          <p className="flex items-center gap-2">
            <IconArrowBackUpDouble
              stroke={2}
              size={16}
              className="rotate-180"
            />
            Accountability that keeps you moving forward
          </p>
        </div>
      </div>

      {/* Grid 2 */}
      <div className="mx-auto md:mx-0 w-full md:w-80">
        <Image
          src={'/method-pic.png'}
          width={300}
          height={200}
          alt="The method picture"
          className="object-cover object-top shadow rounded-xl h-full w-full"
        />
      </div>
    </section>
  );
}
