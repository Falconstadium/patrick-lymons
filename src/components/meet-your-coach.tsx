import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
  const aboutRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(aboutRef.current, {
      autoAlpha: 0,
      y: 100,
      stagger: 0.2,
      ease: 'power2.out',
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: aboutRef.current,
      start: 'top 50%',
      end: 'bottom bottom',
      scrub: 1,
    });
  });

  return (
    <section
      className="min-h-dvh grid gap-10 place-content-center place-items-center md:grid-cols-1 lg:grid-cols-2 lg:gap-0 max-w-5xl mx-auto px-4 py-20"
      ref={aboutRef}>
      {/* Grid 1 */}
      <div className="mx-auto md:mx-0 w-full md:w-80">
        <Image
          src={'/about-pic.png'}
          alt="The about picture"
          width={300}
          height={200}
          className="object-cover object-top shadow rounded-xl h-full w-full"
        />
      </div>

      {/* Grid 2 */}
      <div className="space-y-3">
        <div className="font-general">
          <h1 className="text-xs xl:text-sm text-neutral-500 font-medium">
            Meet your coach
          </h1>
          <h2 className="font-semibold text-3xl md:text-5xl">
            Hi, I&apos;m Patrick
          </h2>
        </div>
        <p className="font-gambetta text-sm lg:text-base">
          CEO of{' '}
          <a
            href="https://www.instagram.com/thelyonshred/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline">
            The Lyon Shred
          </a>{' '}
          with over 6 years of experience in the fitness industry, I’ve
          dedicated my career to helping people transform their bodies and their
          lives through sustainable training and nutrition. My approach goes
          beyond quick fixes—I focus on building strength, confidence, and
          long-term habits that fit seamlessly into your lifestyle.
        </p>
        <p className="font-gambetta text-sm lg:text-base">
          My mission is simple: to empower busy individuals to achieve their
          fitness goals without sacrificing balance in their lives. Whether
          you’re stepping into the gym for the first time or looking to break
          through plateaus, I’ll help you build a stronger, healthier version of
          yourself.
        </p>
      </div>
    </section>
  );
}
