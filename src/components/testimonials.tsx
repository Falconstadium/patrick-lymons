"use client";

import { useGSAP } from "@gsap/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef, useState } from "react";

const data = [
  {
    id: 1,
    name: "Torey",
    testimonial:
      "I was looking for a change in my fitness routine, which wasn’t much at the time, and came across some of Patrick’s content and decided to reach out. I’m so glad I did! My wife and I both decided to kick off the new year with Patrick! If you are looking for a positive change in your lifestyle, the Lyon Shred is life changing!",
    link: "https://www.instagram.com/p/DE-yzuPPGoW/?img_index=1",
    ariaLabel: "Read more about Torey's testimonial",
    image: "/torey1.jpg",
  },
  {
    id: 2,
    name: "Aayush",
    testimonial:
      "Joining the Lyon Shred program has been a truly life-changing experience for me. As someone who was once extremely fragile and battling a brain tumor, I never imagined I would one day have the physique I always dreamed of. Building muscle seemed out of reach—but Lyon Shred proved me wrong",
    link: "https://www.instagram.com/p/DMQxhswvt10/?img_index=1",
    ariaLabel: "Read more about Aayush's testimonial",
    image: "/aayush.jpg",
  },
  {
    id: 3,
    name: "Matt",
    testimonial:
      "My experience with the Lyon Shred was phenomenal. Patrick was incredibly attentive every step of the way. He customized all my workouts and my meals based on the goals I had in mind. I went from 187lbs to 174lbs and saw immense progress throughout my time working with Patrick",
    link: "https://www.instagram.com/p/DE3RoaUPvz6/",
    ariaLabel: "Read more about Matt's testimonial",
    image: "/matt.jpg",
  },
  {
    id: 4,
    name: "Zak",
    testimonial:
      "Living a healthy and active lifestyle seems daunting, especially when the lifestyle you are accustomed to is the complete opposite. When I joined the Lyon Shred Community, I found a place that celebrated successes and understood failures. The program is customized, whether you have dietary restrictions or limited access to a fully equipped gym, Patrick works with you to create a plan that is sustainable and will move you toward your goals",
    link: "https://www.instagram.com/p/CdGZl42un4Z/?img_index=1",
    ariaLabel: "Read more about Zak's testimonial",
    image: "/zak.jpg",
  },
  {
    id: 5,
    name: "Andrew",
    testimonial:
      "Working with Patrick through his Lyon Shred program has been one of the most rewarding experiences of my fitness journey. Over the course of the program, I went from 200 pounds to 190 pounds—all while maintaining the same level of strength. But what stood out to me even more than the results was the process. I genuinely looked forward to every workout. Patrick’s gym sessions are challenging, intentional, and always rooted in progress, not punishment.",
    link: "https://www.instagram.com/p/DMOIlLLvsm6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    ariaLabel: "Read more about Andrew's testimonial",
    image: "/andrew.jpg",
  },
  {
    id: 6,
    name: "Kelly",
    testimonial:
      "“In December (2023) my son asked, “what would you like for Christmas?” I said, “I would love an XL bath robe since none of mine fit me and I want it big enough to cover everything!” Christmas morning we all started exchanging gifts. When it was my turn my son reached for his laptop and opened it and hit “play”. I couldn’t believe my eyes! It was Patrick Lyons! (I knew exactly who Patrick was because my son went through his program and the results were amazing!!!) ",
    link: "https://www.instagram.com/p/DFBVx2OP9GT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    ariaLabel: "Read more about Kelly's testimonial",
    image: "/kelly.jpg",
  },
  {
    id: 7,
    name: "Chad",
    testimonial:
      "We finished the 13 weeks with my weight loss at ~32 pounds and my wife at ~20 pounds. Most people would look at what we did and say “I can do that on my own”. You could, but having a coach, partner, and cheerleader for the journey is the key to success. Patrick’s guidance was spot on, enthusiastic and comforting throughout the process. I can hear his voice everyday in the gym and when putting the next meal together.",
    link: "https://www.instagram.com/p/DFBVx2OP9GT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    ariaLabel: "Read more about Chad's testimonial",
    image: "/chad.jpg",
  },
  {
    id: 8,
    name: "Christian",
    testimonial:
      "I actually did notice a difference, mostly with how my clothes fit! I think the program’s great for people who don’t have a plan when they go to the gym. It also helps motivate you once you have a plan laid out, which is awesome. 5 months after starting the program: I haven’t eaten nearly as bad as I used to, and I’m still unconsciously making healthier decisions now.",
    link: "https://www.instagram.com/p/DEnuX95vv2c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    ariaLabel: "Read more about Christian's testimonial",
    image: "/christian.jpg",
  },
  {
    id: 9,
    name: "Jonathen",
    testimonial:
      "Jonathen was one of the winners of the first ever $1000 Lyon Shred Transformation contest back in 2020, and he is a testament to what is possible to achieve in 3-6 months.",
    link: "https://www.instagram.com/p/DEdprxtvD5e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    ariaLabel: "Read more about Jonathen's testimonial",
    image: "/jonathenlazo.jpg",
  },
  {
    id: 10,
    name: "Grayson",
    testimonial:
      "For years I have been doing consistent weight training, but only recently had it really started to bother me that I wasn’t making progress. I couldn’t seem to figure out how to push myself. When I started Lyon Shred, I was gambling. Patrick wanted me to do the advanced program and show up to the gym 6 times a week. I followed his instructions and got what I was looking for. The program kicked my butt!",
    link: "https://www.instagram.com/p/CbKy4jAOxnB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    ariaLabel: "Read more about Grayson's testimonial",
    image: "/grayson.jpg",
  },
  {
    id: 11,
    name: "Jonathan",
    testimonial:
      "Although I’ve worked with other online coaches in the past, they were all just a one-and-done deal. After paying for and receiving a plan, there usually isn’t much more added value that followed. I always seemed like just another person in line making a purchase at a store; where after I’ve given my money and received my item, there was nothing else left in the relationship.",
    link: "https://www.instagram.com/p/DEiiRhwvSnj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    ariaLabel: "Read more about Jonathan's testimonial",
    image: "/Jonathan.jpg",
  },
];

export default function Testimonials() {
  const [product] = useState(data);

  const [slide, setSlide] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const nextSlide = () => {
    if (slide !== product.length) {
      setSlide(slide + 1);
    } else {
      setSlide(1);
    }
    setDirection("left");
  };
  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    } else {
      setSlide(product.length);
    }
    setDirection("right");
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

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(testimonialRef.current, {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: testimonialRef.current,
        start: "top 60%",
        end: "bottom bottom",
        scrub: 1,
      });

      SplitText.create(".split", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            scrollTrigger: {
              trigger: testimonialRef.current,
              start: "top 60%",
              end: "bottom bottom",
            },
            y: 100,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.05,
          });
        },
      });
    },
    { scope: testimonialRef },
  );

  return (
    <section
      className="mx-auto grid min-h-dvh max-w-4xl grid-cols-1 place-content-center place-items-center gap-8 px-4 py-20 lg:py-12"
      ref={testimonialRef}
    >
      {/* Grid 1 */}
      <div className="font-general mr-auto space-y-3">
        <h1 className="split text-xs font-medium text-neutral-500 xl:text-sm">
          Testimonials
        </h1>
        <h2 className="split text-3xl font-semibold md:text-5xl">
          Real transformations
        </h2>
        <p className="font-gambetta split text-sm lg:text-base">
          What my clients have to say about their journey
        </p>
      </div>

      {/* Grid 2 */}
      <div className="mx-auto w-full max-w-2xl space-y-2">
        {/* buttons */}
        <div className="flex items-center justify-end gap-2 pr-4">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <IconArrowLeft
              stroke={2}
              size={25}
              className="rounded-full bg-blue-600 p-1 text-white transition-colors hover:bg-blue-400 active:bg-blue-400"
            />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <IconArrowRight
              stroke={2}
              size={25}
              className="rounded-full bg-blue-600 p-1 text-white transition-colors hover:bg-blue-400 active:bg-blue-400"
            />
          </button>
        </div>
        {product.map((testi) => (
          <div
            className={`grid h-112 space-y-4 overflow-hidden rounded-2xl bg-neutral-50 shadow lg:h-60 lg:grid-cols-2 lg:space-x-4 ${
              slide === testi.id ? "relative" : "hidden"
            } ${
              direction === "left"
                ? "animate-slideInLeft"
                : "animate-slideInRight"
            }`}
            key={testi.id}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="space-y-3 py-4 pl-4">
              <h5 className="font-general text-sm font-medium lg:text-base">
                {testi.name}
              </h5>
              <p className="font-gambetta text-sm">
                {testi.testimonial.length > 350
                  ? `${testi.testimonial.slice(0, 300)}...`
                  : testi.testimonial}
                <a
                  href={testi.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label=""
                  className="text-sm font-medium hover:underline active:underline"
                >
                  {" "}
                  Read more
                </a>
              </p>
            </div>
            <div>
              <Image
                src={`${testi.image}`}
                alt="image"
                width={400}
                height={400}
                className="h-full w-full object-cover object-top shadow"
              />
            </div>
          </div>
        ))}
        {/* Counter */}
        <div className="font-general split text-center text-xs text-gray-500">
          {slide} / {product.length}
        </div>
      </div>
    </section>
  );
}
