import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function CursorTrailWithBoundaries() {
  let xTo,
    yTo,
    contentWidth,
    contentHeight,
    contentX,
    contentY,
    cursorWidth,
    cursorHeight;

  const duration = 0.7;
  const ease = 'power4.out';

  useGSAP(() => {
    const content = document.querySelector('.content');
    const cursor = document.querySelector('.cursor');

    contentWidth = content.offsetWidth;
    contentHeight = content.offsetHeight;
    contentX = content.getBoundingClientRect().left;
    contentY = content.getBoundingClientRect().top;

    cursorWidth = cursor.offsetWidth;
    cursorHeight = cursor.offsetHeight;

    xTo = gsap.quickTo('.cursor', 'x', { duration, ease });
    yTo = gsap.quickTo('.cursor', 'y', { duration, ease });

    gsap.set('.cursor', {
      x: contentX + contentWidth / 2 - cursorWidth / 2,
      y: contentY + contentHeight / 2 - cursorHeight / 2,
    });
  });

  const handleMouseMove = (e) => {
    xTo(e.clientX - cursorWidth / 2);
    yTo(e.clientY - cursorHeight / 2);
  };

  const handleMouseLeave = () => {
    setTrailPosition();
  };

  const setTrailPosition = () => {
    xTo(contentX + contentWidth / 2 - cursorWidth / 2);
    yTo(contentY + contentHeight / 2 - cursorHeight / 2);
  };

  return (
    <div className="experiment cursor-trail-with-boundaries">
      <h1>Cursor Trail with Boundaries</h1>

      <div
        className="content"
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="cursor">(Some info)</div>
      </div>
    </div>
  );
}
