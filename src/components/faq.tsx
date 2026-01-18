import { useGSAP } from "@gsap/react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";

export default function Faq() {
  const faqRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(faqRef.current, {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: faqRef.current,
        start: "top center",
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
              trigger: faqRef.current,
              start: "top center",
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
    { scope: faqRef },
  );

  const faqs = [
    {
      id: 1,
      question: "How often should I train each week?",
      answer:
        "Clients train anywhere from 3-6 times per week, with the sweet spot being 5 for most clients",
    },
    {
      id: 2,
      question: "Is nutrition coaching included?",
      answer:
        "Yes. You’ll get practical, sustainable nutrition guidance that supports your training — no extreme diets, just habits that work long-term.",
    },
    {
      id: 3,
      question: "How long will it take to see results?",
      answer:
        "Most clients feel stronger and more confident within 2–4 weeks, with visible results in 6–12 weeks when consistent.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="mx-auto grid min-h-[75dvh] max-w-5xl place-content-center place-items-center gap-10 px-4 py-20 md:grid-cols-1 lg:grid-cols-2"
      ref={faqRef}
    >
      {/* Grid 1 */}
      <div className="space-y-3">
        <h1 className="font-general split text-xs font-semibold text-neutral-500 xl:text-sm">
          FAQ
        </h1>
        <h2 className="font-general split text-3xl font-semibold md:text-5xl">
          Frequently
          <br /> Asked Questions
        </h2>
        <p className="font-gambetta split text-sm lg:text-base">
          If you’re new here or wondering what to expect, these answers will
          guide you through how coaching works, what’s included, and how we
          tailor every plan to your needs.
        </p>
      </div>

      {/* Grid 2 */}
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="overflow-hidden rounded bg-white shadow transition-all duration-500 hover:shadow-xl"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="group flex w-full items-center justify-between px-4 py-3 text-left focus:outline-none"
            >
              <span className="font-general pr-8 text-sm font-medium transition-colors">
                {faq.question}
              </span>
              {openIndex === faq.id ? (
                <IconMinus stroke={2} size={18} />
              ) : (
                <IconPlus stroke={2} size={18} />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === faq.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-gambetta px-4 pb-6 text-sm text-neutral-700">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
