import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const loaderRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    gsap.from(loaderRef.current, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power1.out",
    });

    SplitText.create(".split", {
      type: "lines, words",
      mask: "lines",
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
      className="mx-auto grid max-w-5xl place-content-center place-items-center gap-8 px-4 py-12 md:grid-cols-1 lg:grid-cols-2 lg:gap-0"
      ref={loaderRef}
    >
      {/* Grid 1 */}
      <div className="split grid place-items-center gap-4 lg:place-items-start">
        <h1 className="font-general text-4xl font-semibold md:text-5xl lg:text-6xl">
          Transform your body, transform your life
        </h1>
        <div className="space-y-4 text-center lg:text-start">
          <p className="font-gambetta text-sm lg:text-base">
            I help busy people turn their fitness goals into reality. Your
            transformation starts with a single conversation.
          </p>
          <p className="font-gambetta text-sm font-medium text-yellow-700 uppercase">
            6+ Years Coaching Experience
          </p>
        </div>
      </div>

      {/* Grid 2 */}
      <div className="mx-auto w-full md:mx-0 md:w-96">
        <Image
          src={"/patrick-pic.jpg"}
          width={300}
          height={400}
          loading="eager"
          alt="The hero picture"
          className="h-full w-full rounded-xl object-cover object-top shadow"
        />
      </div>
    </section>
  );
}
