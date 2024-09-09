'use client'

// cursor effect script

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const CursorEffects = () => {
  const [refresh, setRefresh] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    // Function to handle cursor movement
    const handleMouseMove = (e) => {
      const bigBallRadius = 20;
      const smallBallRadius = 9;

      gsap.to($bigBall, {
        duration: 0.6,
        x: e.pageX - bigBallRadius,
        y: e.pageY - bigBallRadius,
        ease: 'power3.out',
      });

      gsap.to($smallBall, {
        duration: 0.15,
        x: e.pageX - smallBallRadius,
        y: e.pageY - smallBallRadius,
        ease: 'power3.out',
      });
    };

    // Function to handle mouse hover
    const onMouseHover = () => {
      gsap.to($bigBall, {
        duration: 0.3,
        scale: 2,
        ease: 'power2.out',
      });
    };

    // Function to handle mouse hover out
    const onMouseHoverOut = () => {
      gsap.to($bigBall, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out',
      });
    };

    // Add event listeners
    document.body.addEventListener('mousemove', handleMouseMove);
    $hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onMouseHover);
      el.addEventListener('mouseleave', onMouseHoverOut);
    });

    // Clean up function
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      $hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseHover);
        el.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, [refresh]); // Re-run the effect when `refresh` changes

  // Refresh the component when pathname changes
  useEffect(() => {
    setRefresh((prev) => prev + 1); // Trigger re-render by updating state
  }, [pathname]); // Watch for pathname changes

  return (
    <>
      <div className="cursor__ball cursor__ball--big">
        <svg height="50" width="50">
          <circle cx="25" cy="25" r="20" strokeWidth="2"></circle>
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small">
        <svg height="20" width="20">
          <circle cx="10" cy="10" r="9" strokeWidth="1"></circle>
        </svg>
      </div>
    </>
  );
};

export default CursorEffects;
