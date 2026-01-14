'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

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
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(loaderRef.current, {
          y: '-100%',
          duration: 1,
          borderBottomLeftRadius: '25%',
          borderBottomRightRadius: '25%',
          ease: 'power4.inOut',
          onComplete,
        });
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 bg-gray-200 flex items-center justify-center">
      <p className="text-sm font-bold tracking-wide animate-pulse font-general text-black uppercase">
        Patrick Lyons
      </p>
    </div>
  );
}
