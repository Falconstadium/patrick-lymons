import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
  useGSAP(() => {
    gsap.from("#nav", {
      autoAlpha: 0,
      y: -100,
      duration: 1,
      ease: "power3.Out",
    });
    gsap.from("#btn", {
      autoAlpha: 0,
      y: -100,
      duration: 1,
      ease: "power4.Out",
    });
  });

  return (
    <header role="banner">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        role="navigation"
      >
        <Link href={"/"} className="font-gambetta font-bold" id="nav">
          Patrick
        </Link>

        <a
          id="btn"
          href="#contact"
          className="font-general rounded-md bg-[#F9652F] px-5 py-2 text-xs font-medium shadow-lg transition-colors duration-300 ease-in-out hover:bg-orange-500 lg:text-sm"
        >
          Contact me
        </a>
      </nav>
    </header>
  );
}
