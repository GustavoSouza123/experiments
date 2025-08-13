import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function MagneticEffect() {
  const cursor = useRef(null);
  const duration = 0.7;
  const ease = 'power4.out';
  const magneticStrength = 1;

  useGSAP(() => {
    const xTo = gsap.quickTo(cursor.current, 'x', { duration, ease });
    const yTo = gsap.quickTo(cursor.current, 'y', { duration, ease });

    const handleMouseMove = (e) => {
      const { height, width, left, top } =
        cursor.current.getBoundingClientRect();

      xTo((e.clientX - (left + width / 2)) * magneticStrength);
      yTo((e.clientY - (top + height / 2)) * magneticStrength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    cursor.current.addEventListener('mousemove', handleMouseMove);
    cursor.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cursor.current.removeEventListener('mousemove', handleMouseMove);
      cursor.current.removeEventListener('mouseleave', handleMouseLeave);
    };
  });

  return (
    <div className="experiment magnetic-effect">
      <h1>Magnetic Effect</h1>

      <div className="cursor" ref={cursor}>
        (Some info)
      </div>
    </div>
  );
}
