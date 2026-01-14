import { IconArrowUp } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function ScrollBtn() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Calculate the stroke dashoffset for the circle
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-6 size-10 md:size-12 lg:size-14 bg-neutral-200 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 z-50 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-label="Scroll to top">
      {/* Progress Circle */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 60 60">
        {/* Background circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="3"
        />
        {/* Progress circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-150"
        />
      </svg>

      {/* Arrow Icon */}
      <IconArrowUp stroke={2.5} size={20} />
    </button>
  );
}
