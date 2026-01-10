import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function HeroImage() {
  const images = [
    '/hero-pic.png',
    '/about-pic.png',
    '/howworks-pic.png',
    '/method-pic.png',
  ];

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from('.hero-item', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      });
    },
    { scope: container }
  );

  const indexRef = useRef(0);

  const lastX = useRef(0);
  const lastY = useRef(0);

  const [distanceTresShold, setDistanceTresShold] = useState(
    window.innerWidth < 900 ? 90 : 150
  );

  const createTrail = (x: number, y: number) => {
    const img = document.createElement('img');
    img.className =
      'absolute inset-0 opacity-0 w-56 h-72 object-cover rounded-lg pointer-events-none';
    img.src = images[indexRef.current];

    indexRef.current = (indexRef.current + 1) % images.length;

    if (container.current) {
      container.current.appendChild(img);
    }

    gsap.set(img, {
      x,
      y,
      scale: 0,
      opacity: 0,
      rotation: gsap.utils.random(-20, 20),
    });

    gsap.to(img, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.to(img, {
      scale: 0.2,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        img.remove();
      },
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      const dx = e.clientX - lastX.current;
      const dy = e.clientY - lastY.current;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > distanceTresShold) {
        createTrail(e.clientX, e.clientY);
        lastX.current = e.clientX;
        lastY.current = e.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [distanceTresShold]);

  useEffect(() => {
    const handleSize = () => {
      setDistanceTresShold(window.innerWidth < 900 ? 90 : 150);
    };

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('mousemove', handleSize);
  }, []);

  return (
    <section
      ref={container}
      className="relative flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6 space-y-4">
        <p className="hero-item text-sm tracking-widest uppercase text-yellow-700 font-medium font-gambetta">
          6+ Years Coaching Experience
        </p>

        <h1 className="hero-item text-4xl md:text-6xl font-extrabold font-general">
          Transform
          <br />
          your body,
          <br />
          transform
          <br />
          your life
        </h1>

        <p className="hero-item font-gambetta">
          I help busy people turn their fitness goals into reality.
          <br />
          Your transformation starts with a single conversation.
        </p>

        <button className="hero-item mt-8 px-8 py-4 bg-[#E63946] hover:bg-red-600 transition rounded-full font-semibold font-general">
          Apply for Coaching
        </button>
      </div>
    </section>
  );
}
