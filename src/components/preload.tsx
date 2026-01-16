"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type LoaderProps = {
  onComplete: () => void;
};

export default function Preloader({ onComplete }: LoaderProps) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };

    gsap.to(obj, {
      val: 100,
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(loaderRef.current, {
          y: "-100%",
          duration: 1,
          rotate: "-1deg",
          ease: "power4.Out",
          onComplete,
        });
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-gray-200"
    >
      <p className="font-general animate-pulse text-sm font-semibold tracking-wide text-black uppercase">
        Patrick Lyons
      </p>
    </div>
  );
}
