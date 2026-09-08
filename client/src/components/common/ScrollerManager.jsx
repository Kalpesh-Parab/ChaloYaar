import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import rappellerImg from '../../assets/rappeller.png';
import cliffImg from '../../assets/cliff-edge.png';
import paragliderImg from '../../assets/paraglider.png';
import roverImg from '../../assets/overland-4x4.png';
import ziplinerImg from '../../assets/zipliner.png';

export default function ScrollerManager() {
  const location = useLocation();
  const actorRef = useRef(null);
  const secondaryRef = useRef(null);
  const tickingRef = useRef(false);

  const isAboutPage = location.pathname === '/about';
  const isCustomPage = location.pathname === '/custom-trip';
  const isFaqPage = location.pathname === '/faq';
  const isDefaultCliff = !isAboutPage && !isCustomPage && !isFaqPage;

  useEffect(() => {
    const updateMotion = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollable <= 0) {
        tickingRef.current = false;
        return;
      }

      const progress = Math.min(1, Math.max(0, scrollY / totalScrollable));

      // 1. ABOUT US: Paraglider drifting diagonally across screen
      if (isAboutPage && actorRef.current) {
        const startX = window.innerWidth * 0.05;
        const endX = window.innerWidth * 0.75;
        const startY = window.innerHeight * 0.12;
        const endY = window.innerHeight * 0.78;

        const currentX = startX + progress * (endX - startX);
        const currentY = startY + progress * (endY - startY);
        const swayAngle = Math.sin(progress * Math.PI * 4) * 6;

        actorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${swayAngle}deg)`;
      }

      // 2. CUSTOM TRIPS: 4x4 Rover crawling across bottom terrain
      else if (isCustomPage && actorRef.current) {
        const startX = window.innerWidth * 0.02;
        const endX = window.innerWidth * 0.92;
        const currentX = startX + progress * (endX - startX);
        const tiltAngle = Math.sin(progress * Math.PI * 8) * 4;

        actorRef.current.style.transform = `translate3d(${currentX}px, 0, 0) rotate(${tiltAngle}deg)`;
      }

      // 3. FAQ PAGE: Zipliner sliding diagonally down a steel cable
      else if (isFaqPage && actorRef.current) {
        const startX = window.innerWidth * 0.05;
        const endX = window.innerWidth * 0.95;
        const startY = window.innerHeight * 0.13;
        const endY = window.innerHeight * 0.13;

        const currentX = startX + progress * (endX - startX);
        const currentY = startY + progress * (endY - startY);

        actorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      // 4. DEFAULT: Cliff Rappeller on right edge
      else if (isDefaultCliff && actorRef.current) {
        const startY = window.innerHeight * 0.08;
        const endY = window.innerHeight * 0.82;
        const currentY = startY + progress * (endY - startY);

        actorRef.current.style.transform = `translate3d(0, ${currentY}px, 0)`;

        if (secondaryRef.current) {
          secondaryRef.current.setAttribute('y2', currentY + 12);
        }
      }

      tickingRef.current = false;
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(updateMotion);
        tickingRef.current = true;
      }
    };

    const onResize = () => {
      window.requestAnimationFrame(updateMotion);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    updateMotion();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [location.pathname, isAboutPage, isCustomPage, isFaqPage, isDefaultCliff]);

  return (
    <>
      {/* 1. ABOUT US: Paraglider */}
      {isAboutPage && (
        <div
          ref={actorRef}
          aria-hidden="true"
          className="fixed top-0 left-0 z-30 pointer-events-none select-none will-change-transform opacity-75"
          style={{ transform: 'translate3d(5vw, 12vh, 0)' }}
        >
          <img
            src={paragliderImg}
            alt=""
            className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-md scale-300"
          />
        </div>
      )}

      {/* 2. CUSTOM TRIPS: 4x4 Rover */}
      {isCustomPage && (
        <div
          aria-hidden="true"
          className="fixed bottom-2 left-0 right-0 h-16 z-30 pointer-events-none select-none border-b-2 border-dashed border-coal-950/20"
        >
          <div
            ref={actorRef}
            className="absolute bottom-1 left-0 will-change-transform"
            style={{ transform: 'translate3d(2vw, 0, 0)' }}
          >
            <img
              src={roverImg}
              alt=""
              className="w-20 h-12 sm:w-28 sm:h-16 object-contain drop-shadow-lg scale-350"
            />
          </div>
        </div>
      )}

      {/* 3. FAQ PAGE: Zipliner with Top Cable */}
      {isFaqPage && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-30 pointer-events-none select-none overflow-hidden"
        >
          <svg className="absolute inset-0 w-full h-full">
            <line
              x1="0%"
              y1="15vh"
              x2="100%"
              y2="15vh"
              stroke="#0A0D0C"
              strokeWidth="2"
              strokeDasharray="6 3"
              strokeOpacity="0.4"
            />
          </svg>

          <div
            ref={actorRef}
            className="absolute top-0 left-0 will-change-transform"
            style={{ transform: 'translate3d(5vh, 5vh, 0)' }}
          >
            <img
              src={ziplinerImg}
              alt=""
              className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-md"
            />
          </div>
        </div>
      )}

      {/* 4. DEFAULT: Cliff Rappeller on the Right Edge */}
      {isDefaultCliff && (
        <aside
          aria-hidden="true"
          className="fixed right-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 lg:w-56 z-40 pointer-events-none select-none overflow-hidden"
        >
          <div className="absolute left-15 top-0 bottom-0 w-full h-full pointer-events-none">
            <img
              src={cliffImg}
              alt=""
              className="w-full h-full object-cover object-center filter drop-shadow-[-3px_0_8px_rgba(0,0,0,0.35)] opacity-60"
            />
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <line
              ref={secondaryRef}
              x1="65%"
              y1="0"
              x2="65%"
              y2="60"
              stroke="#0A0D0C"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
          </svg>

          <div
            ref={actorRef}
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
      )}
    </>
  );
}