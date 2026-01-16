import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Contact() {
  const contactRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(contactRef.current, {
      autoAlpha: 0,
      y: 100,
      stagger: 0.2,
      ease: "power2.out",
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: contactRef.current,
      start: "top 90%",
      end: "bottom bottom",
      scrub: 1,
    });
  });

  return (
    <div className="min-h-[75dvh] px-5 py-20" ref={contactRef} id="contact">
      <div className="mx-auto grid w-full max-w-xl place-items-center space-y-4">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="font-general text-xs font-medium text-neutral-500 xl:text-sm">
            Contact
          </h1>
          <h2 className="font-general text-3xl font-bold md:text-5xl">
            Let’s build your plan together!
          </h2>
          <p className="font-gambetta text-sm lg:text-base">
            Have a question about training, nutrition, or which program fits you
            best? Reach out — I’ll help you find your next step forward.
          </p>
        </div>

        {/* Send Button */}
        <a
          href="https://ig.me/m/patricklyons"
          target="_blank"
          rel="noopener noreferrer"
          className="font-general rounded-lg bg-[#F9652F] px-5 py-2 text-sm font-medium shadow-lg transition-colors hover:bg-orange-600 active:bg-orange-600"
        >
          Send a Message
        </a>
      </div>
    </div>
  );
}
