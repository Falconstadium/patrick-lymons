import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(aboutRef.current, {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: aboutRef.current,
        start: "top 40%",
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
              trigger: aboutRef.current,
              start: "top 50%",
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
    { scope: aboutRef },
  );

  return (
    <section
      className="mx-auto grid min-h-dvh max-w-5xl place-content-center place-items-center gap-10 px-4 py-20 md:grid-cols-1 lg:grid-cols-2 lg:gap-0"
      ref={aboutRef}
    >
      {/* Grid 1 */}
      <div className="mx-auto w-full md:mx-0 md:w-80">
        <Image
          src={"/about-pic.png"}
          alt="The about picture"
          width={300}
          height={200}
          className="h-full w-full rounded-xl object-cover object-top shadow"
        />
      </div>

      {/* Grid 2 */}
      <div className="space-y-3">
        <h1 className="font-general split text-xs font-medium text-neutral-500 xl:text-sm">
          Meet your coach
        </h1>
        <h2 className="font-general split text-3xl font-semibold md:text-5xl">
          Hi, I&apos;m Patrick
        </h2>
        <p className="font-gambetta text-sm lg:text-base">
          CEO of{" "}
          <a
            href="https://www.instagram.com/thelyonshred/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            The Lyon Shred
          </a>{" "}
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
