import { useGSAP } from '@gsap/react';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useRef, useState } from 'react';

export default function Faq() {
  const faqRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(faqRef.current, {
      autoAlpha: 0,
      y: 100,
      stagger: 0.2,
      ease: 'power2.out',
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: faqRef.current,
      start: 'top center',
      end: 'bottom bottom',
      scrub: 1,
    });

    gsap.from('.split', {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
    });
  });

  const faqs = [
    {
      id: 1,
      question: 'What should I expect during my first session?',
      answer:
        'Your first session is about clarity, not pressure. We’ll assess your goals, movement, and current fitness level, then start building a plan tailored to your body and lifestyle.',
    },
    {
      id: 2,
      question: 'How often should I train each week?',
      answer:
        'Most clients see great results training 3–4 times per week. We’ll find the right balance so you progress consistently without burning out.',
    },
    {
      id: 3,
      question: 'Is nutrition coaching included?',
      answer:
        'Yes. You’ll get practical, sustainable nutrition guidance that supports your training — no extreme diets, just habits that work long-term.',
    },
    {
      id: 4,
      question: 'How long will it take to see results?',
      answer:
        'Most clients feel stronger and more confident within 2–4 weeks, with visible results in 6–12 weeks when consistent.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="min-h-[75dvh] grid gap-10 place-content-center place-items-center md:grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto px-4 py-20"
      ref={faqRef}>
      {/* Grid 1 */}
      <div className="space-y-4">
        <h1 className="font-general text-xs font-semibold text-neutral-500">
          FAQ
        </h1>
        <h2 className="font-general font-semibold text-3xl md:text-5xl">
          Frequently
          <br /> Asked Questions
        </h2>
        <p className="font-gambetta text-sm">
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
            className="bg-white rounded shadow overflow-hidden transition-all duration-500 hover:shadow-xl">
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none group">
              <span className="font-medium pr-8 transition-colors font-general text-sm">
                {faq.question}
              </span>
              {openIndex === faq.id ? (
                <IconMinus stroke={2} size={18} />
              ) : (
                <IconPlus stroke={2} size={18} />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === faq.id
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}>
              <p className="pb-6 px-4 text-neutral-500 font-gambetta text-sm split">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
