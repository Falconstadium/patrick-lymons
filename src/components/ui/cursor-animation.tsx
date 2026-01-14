import { useRef } from 'react';

export default function CursorAnimation() {
  const containerRef = useRef(null);

  return <div ref={containerRef}>CursorAnimation</div>;
}
