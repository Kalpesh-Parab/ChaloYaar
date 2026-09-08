import React, { useEffect, useRef } from 'react';
import cliffImg from '../../assets/cliff-edge.png';
import rappellerImg from '../../assets/rappeller.png';

export default function ScrollDescender() {
  const climberRef = useRef(null);
  const ropeLineRef = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updatePosition = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollable <= 0) {
        tickingRef.current = false;
        return;
      }

      const progress = Math.min(1, Math.max(0, scrollY / totalScrollable));

      // Descent bounds: 8vh down to 82vh
      const startY = window.innerHeight * 0.08;
      const endY = window.innerHeight * 0.82;
      const currentY = startY + progress * (endY - startY);

      if (climberRef.current) {
        climberRef.current.style.transform = `translate3d(0, ${currentY}px, 0)`;
      }

      if (ropeLineRef.current) {
        ropeLineRef.current.setAttribute('y2', currentY + 12);
      }

      tickingRef.current = false;
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(updatePosition);
        tickingRef.current = true;
      }
    };

    const onResize = () => {
      window.requestAnimationFrame(updatePosition);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    updatePosition();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <aside
      aria-hidden="true"
      className="fixed right-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 lg:w-56 z-40 pointer-events-none select-none overflow-hidden"
    >
      {/* 1. Mountain Cliff Artwork */}
      <div className="absolute left-15 top-0 bottom-0 w-full h-full pointer-events-none">
        <img
          src={cliffImg}
          alt=""
          className="w-full h-full object-cover object-center filter drop-shadow-[-3px_0_8px_rgba(0,0,0,0.35)] opacity-70"
        />
      </div>

      {/* 2. Dynamic Hanging Rope */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <line
          ref={ropeLineRef}
          x1="65%"
          y1="0"
          x2="65%"
          y2="60"
          stroke="#0A0D0C"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
      </svg>

      {/* 3. Single Rappeller */}
      <div
        ref={climberRef}
        className="absolute top-0 right-[15%] z-20 flex flex-col items-center will-change-transform"
        style={{ transform: 'translate3d(0, 8vh, 0)' }}
      >
        <img
          src={rappellerImg}
          alt="Climber Descending"
          className="w-9 h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-lg"
        />
      </div>
    </aside>
  );
}