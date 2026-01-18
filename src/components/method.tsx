import { useGSAP } from "@gsap/react";
import {
  IconArrowBackUpDouble,
  IconBackpack,
  IconSettings,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";

export default function Method() {
  const methodRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(methodRef.current, {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: methodRef.current,
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
              trigger: methodRef.current,
              start: "top 40%",
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
    { scope: methodRef },
  );

  return (
    <section
      className="mx-auto grid min-h-dvh max-w-4xl place-content-center place-items-center gap-8 px-4 py-20 md:grid-cols-1 lg:grid-cols-2 lg:gap-0"
      ref={methodRef}
    >
      {/* Grid 1 */}
      <div className="space-y-4">
        <h1 className="font-general split text-xs font-medium text-neutral-500">
          Method
        </h1>
        <h2 className="font-general split text-3xl font-semibold md:text-5xl">
          Real training for real results
        </h2>
        <p className="font-gambetta split text-sm lg:text-base">
          No shortcuts. No gimmicks. Just honest work and a plan built
          specifically for you. I train the way I believe in, and my clients see
          it in the mirror.
        </p>
        <div className="font-gambetta grid gap-2 text-sm">
          <p className="split flex items-center gap-2">
            <IconBackpack stroke={2} size={16} />
            Personalized programming tailored to your goals
          </p>
          <p className="split flex items-center gap-2">
            <IconSettings stroke={2} size={16} />
            Progressive overload that builds lasting strength
          </p>
          <p className="split flex items-center gap-2">
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
      <div className="mx-auto w-full md:mx-0 md:w-80">
        <Image
          src={"/method-pic.png"}
          width={300}
          height={200}
          alt="The method picture"
          className="h-full w-full rounded-xl object-cover object-top shadow"
        />
      </div>
    </section>
  );
}
