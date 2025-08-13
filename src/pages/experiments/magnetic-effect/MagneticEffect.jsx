import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function CursorTrailWithBoundaries() {
  const duration = 0.7;
  const ease = 'power4.out';

  useGSAP(() => {
    const content = document.querySelector('.content');
    const cursor = document.querySelector('.cursor');

    const xTo = gsap.quickTo('.cursor', 'x', { duration, ease });
    const yTo = gsap.quickTo('.cursor', 'y', { duration, ease });

    const handleMouseMove = (e) => {
      const { height, width, left, top } = cursor.getBoundingClientRect();
      xTo(e.clientX - (left + width / 2));
      yTo(e.clientY - (top + height / 2));
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    content.addEventListener('mousemove', handleMouseMove);
    content.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      content.removeEventListener('mousemove', handleMouseMove);
      content.removeEventListener('mouseleave', handleMouseLeave);
    };
  });

  return (
    <div className="experiment magnetic-effect">
      <h1>Magnetic Effect</h1>

      <div className="content">
        <div className="cursor">(Some info)</div>
      </div>
    </div>
  );
}
