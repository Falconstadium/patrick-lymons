import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Navbar() {
  useGSAP(() => {
    gsap.from('#nav', {
      autoAlpha: 0,
      y: -100,
      duration: 1,
      ease: 'power3.Out',
    });
  });

  return (
    <header role="banner">
      <nav
        className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"
        role="navigation">
        <Link href={'/'} className="font-bold font-gambetta" id="nav">
          Patrick
        </Link>

        <a
          href="#contact"
          className="rounded-md duration-300 py-2 px-5 bg-[#F9652F] transition-colors ease-in-out text-xs lg:text-sm font-medium font-general shadow-lg hover:bg-orange-500">
          Contact me
        </a>
      </nav>
    </header>
  );
}
