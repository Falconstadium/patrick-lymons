import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

export default function Contact() {
  const contactRef = useRef(null);
  const linkRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const linkTl = gsap.timeline();
      tl.from(contactRef.current, {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
        ease: "power2.out",
      });

      linkTl.from(linkRef.current, {
        autoAlpha: 0,
        y: -10,
        stagger: 0.1,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: contactRef.current,
        start: "top 90%",
        end: "bottom bottom",
        scrub: 1,
      });
      ScrollTrigger.create({
        animation: linkTl,
        trigger: linkRef.current,
        start: "top 90%",
        end: "bottom bottom",
      });

      SplitText.create(".split", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 90%",
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
    { scope: contactRef },
  );

  return (
    <div className="min-h-[75dvh] px-5 py-20" ref={contactRef} id="contact">
      <div className="mx-auto grid w-full max-w-xl place-items-center space-y-4">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="font-general split text-xs font-medium text-neutral-500 xl:text-sm">
            Contact
          </h1>
          <h2 className="font-general split text-3xl font-bold md:text-5xl">
            Let’s build your plan together!
          </h2>
          <p className="font-gambetta split text-sm lg:text-base">
            Have a question about training, nutrition, or which program fits you
            best? Reach out — I’ll help you find your next step forward.
          </p>
        </div>

        {/* Send Button */}
        <a
          href="https://www.instagram.com/patricklyons"
          target="_blank"
          rel="noopener noreferrer"
          ref={linkRef}
          className="font-general split rounded-lg bg-[#F9652F] px-5 py-2 text-sm font-medium shadow-lg transition-colors hover:bg-orange-600 active:bg-orange-600"
        >
          Send a Message
        </a>
      </div>
    </div>
  );
}
