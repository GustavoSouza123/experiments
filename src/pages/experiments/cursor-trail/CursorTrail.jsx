import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function CursorTrail() {
  let xTo;
  let yTo;

  const cursorWidth = 18;
  const cursorHeight = 18;
  const duration = 0.7;
  const ease = 'power4.out';

  useGSAP(() => {
    gsap.set('.cursor', { width: cursorWidth, height: cursorHeight });

    xTo = gsap.quickTo('.cursor', 'x', { duration, ease });
    yTo = gsap.quickTo('.cursor', 'y', { duration, ease });
  });

  const handleMouseMove = (e) => {
    xTo(e.clientX - cursorWidth / 2);
    yTo(e.clientY - cursorHeight / 2);
  };

  const handleMouseEnter = () => {
    gsap.to('.cursor', {
      width: cursorWidth,
      height: cursorHeight,
      duration,
      ease,
    });
  };

  const handleMouseLeave = () => {
    gsap.to('.cursor', { width: 0, height: 0, duration, ease });
  };

  return (
    <div
      className="experiment cursor-trail"
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <h1>Cursor Trail</h1>

      <div className="cursor"></div>
    </div>
  );
}
