'use client';

import { useGSAP } from '@gsap/react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Torey',
    testimonial:
      'I was looking for a change in my fitness routine, which wasn’t much at the time, and came across some of Patrick’s content and decided to reach out. I’m so glad I did! My wife and I both decided to kick off the new year with Patrick! If you are looking for a positive change in your lifestyle, the Lyon Shred is life changing!',
    link: 'https://www.instagram.com/p/DE-yzuPPGoW/?img_index=1',
    ariaLabel: "Read more about Torey's testimonial",
  },
  {
    id: 2,
    name: 'Aayush',
    testimonial:
      'Joining the Lyon Shred program has been a truly life-changing experience for me. As someone who was once extremely fragile and battling a brain tumor, I never imagined I would one day have the physique I always dreamed of. Building muscle seemed out of reach—but Lyon Shred proved me wrong',
    link: 'https://www.instagram.com/p/DE3RoaUPvz6/',
    ariaLabel: "Read more about Aayush's testimonial",
  },
  {
    id: 3,
    name: 'Matt',
    testimonial:
      'My experience with the Lyon Shred was phenomenal. Patrick was incredibly attentive every step of the way. He customized all my workouts and my meals based on the goals I had in mind. I went from 187lbs to 174lbs and saw immense progress throughout my time working with Patrick',
    link: 'https://www.instagram.com/p/DE3RoaUPvz6/',
    ariaLabel: "Read more about Matt's testimonial",
  },
  {
    id: 4,
    name: 'Preston',
    testimonial:
      'I’ve had the privilege of knowing Patrick since elementary school. He is one of the smartest and hardest working individuals I have ever met. I was able to see first hand his fitness journey and the work he put in to achieving his goals. He spent many hours physically and mentally changing his lifestyle and has now dedicated his life to helping others achieve their goals',
    link: 'https://www.instagram.com/p/CmXDtb_uZ10/?img_index=1',
    ariaLabel: "Read more about Preston's testimonial",
  },
  {
    id: 5,
    name: 'Zak',
    testimonial:
      'Living a healthy and active lifestyle seems daunting, especially when the lifestyle you are accustomed to is the complete opposite. When I joined the Lyon Shred Community, I found a place that celebrated successes and understood failures. The program is customized, whether you have dietary restrictions or limited access to a fully equipped gym, Patrick works with you to create a plan that is sustainable and will move you toward your goals',
    link: 'https://www.instagram.com/p/CdGZl42un4Z/?img_index=1',
    ariaLabel: "Read more about Zak's testimonial",
  },
];

export default function Testimonials() {
  const [product] = useState(data);

  const [slide, setSlide] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  const nextSlide = () => {
    if (slide !== product.length) {
      setSlide(slide + 1);
    } else {
      setSlide(1);
    }
    setDirection('left');
  };
  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    } else {
      setSlide(product.length);
    }
    setDirection('right');
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const testimonialRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(testimonialRef.current, {
      autoAlpha: 0,
      y: 100,
      stagger: 0.2,
      ease: 'power2.out',
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: testimonialRef.current,
      start: 'top 90%',
      end: 'bottom bottom',
      scrub: 1,
    });
  });

  return (
    <section
      className="min-h-[75dvh] grid gap-8 place-content-center place-items-center grid-cols-1 max-w-4xl mx-auto px-4"
      ref={testimonialRef}>
      {/* Grid 1 */}
      <div className="font-general space-y-3 mr-auto">
        <h1 className="text-xs xl:text-sm text-neutral-500 font-medium">
          Testimonials
        </h1>
        <h2 className="font-semibold text-3xl md:text-5xl">
          Real transformations
        </h2>
        <p className="font-gambetta text-sm lg:text-base">
          What my clients have to say about their journey
        </p>
      </div>

      {/* Grid 2 */}
      <div className="w-full max-w-xl mx-auto space-y-2">
        {/* buttons */}
        <div className="flex items-center justify-end gap-2 pr-4">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial">
            <IconArrowLeft
              stroke={2}
              size={25}
              className="bg-blue-600 p-1 rounded-full text-white transition-colors hover:bg-blue-400 active:bg-blue-400"
            />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial">
            <IconArrowRight
              stroke={2}
              size={25}
              className="bg-blue-600 p-1 rounded-full text-white transition-colors hover:bg-blue-400 active:bg-blue-400"
            />
          </button>
        </div>
        {product.map((testi) => (
          <div
            className={`py-3 px-4 bg-neutral-50 shadow rounded space-y-4 flex flex-col justify-between w-full h-auto ${
              slide === testi.id ? 'relative' : 'hidden'
            } ${
              direction === 'left'
                ? 'animate-slideInLeft'
                : 'animate-slideInRight'
            }`}
            key={testi.id}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <p className="text-sm font-gambetta">
              {testi.testimonial.slice(0, 300)}...
              <a
                href={testi.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label=""
                className="font-medium text-sm hover:underline active:underline">
                Read more
              </a>
            </p>
            <h5 className="font-general text-xs lg:text-sm font-medium">
              {testi.name}
            </h5>
          </div>
        ))}
        {/* Counter */}
        <div className="text-center text-xs font-general text-gray-500">
          {slide} / {product.length}
        </div>
      </div>
    </section>
  );
}
