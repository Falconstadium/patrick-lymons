import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Navbar() {
  useGSAP(() => {
    gsap.from('#nav', {
      autoAlpha: 0,
      y: -10,
      duration: 1,
      ease: 'power3.inOut',
    });
  });

  return (
    <header>
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold font-gambetta" id="nav">
          Patrick
        </h1>
        <a
          href="#contact"
          className="rounded-md duration-300 py-2 px-5 bg-[#E63946] text-white transition-colors ease-in-out text-sm font-semibold font-general hover:bg-red-600">
          Contact me
        </a>
      </nav>
    </header>
  );
}
