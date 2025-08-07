import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function HoverEffects() {
  useGSAP(() => {
    // const tl = gsap.timeline({
    //   defaults: {
    //     ease: 'power2.out',
    //   },
    // });
  });

  return (
    <div className="experiment hover-effects">
      <h1>Hover Effects</h1>

      <div className="content">
        <div
          className="link"
          onMouseEnter={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.3,
                ease: 'power1.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: -100 }, '0');
          }}
          onMouseLeave={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.3,
                ease: 'power1.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: 0 }, '0');
          }}
        >
          <div className="mask">
            <span>Hover me</span>
            <span>Hover me</span>
          </div>
        </div>

        <hr />

        <div
          className="link"
          onMouseEnter={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.3,
                ease: 'power1.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: -100 }, '0');
          }}
          onMouseLeave={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.3,
                ease: 'power1.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: 0 }, '0');
          }}
        >
          <div className="mask">
            <span>Hover me</span>
            <span>Hover me</span>
          </div>
        </div>
      </div>
    </div>
  );
}
