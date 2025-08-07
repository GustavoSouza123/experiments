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

    let chars = SplitText.create('.chars-mask span', {
      type: 'chars',
    });
  });

  return (
    <div className="experiment hover-effects">
      <h1>Hover Effects</h1>

      <div className="content">
        {/* first */}
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
            <span>power1.out 0.3s</span>
            <span>power1.out 0.3s</span>
          </div>
        </div>

        <hr />

        <div
          className="link"
          onMouseEnter={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.5,
                ease: 'power2.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: -100 }, '0');
          }}
          onMouseLeave={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.5,
                ease: 'power2.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: 0 }, '0');
          }}
        >
          <div className="mask">
            <span>
              <strong>power2.out 0.5s</strong>
            </span>
            <span>
              <strong>power2.out 0.5s</strong>
            </span>
          </div>
        </div>

        <hr />

        <div
          className="link"
          onMouseEnter={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.7,
                ease: 'power3.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: -100 }, '0');
          }}
          onMouseLeave={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.7,
                ease: 'power3.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: 0 }, '0');
          }}
        >
          <div className="mask">
            <span>power3.out 0.7s</span>
            <span>power3.out 0.7s</span>
          </div>
        </div>

        <hr />

        <div
          className="link"
          onMouseEnter={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.7,
                ease: 'power4.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: -100 }, '0');
          }}
          onMouseLeave={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.7,
                ease: 'power4.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: 0 }, '0');
          }}
        >
          <div className="mask">
            <span>power4.out 0.7s</span>
            <span>power4.out 0.7s</span>
          </div>
        </div>

        <hr />

        {/* second */}
        <div
          className="link"
          onMouseEnter={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 1,
                ease: 'expo.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: -100 }, '0');
          }}
          onMouseLeave={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 1,
                ease: 'expo.out',
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: 0 }, '0');
          }}
        >
          <div className="mask">
            <span>expo.out 1s</span>
            <span>expo.out 1s</span>
          </div>
        </div>

        <hr />

        {/* third */}
        <div
          className="link"
          onMouseEnter={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 1,
                ease: CustomEase.create('custom', '0.19, 1, 0.22, 1'),
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: -100 }, '0');
          }}
          onMouseLeave={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 1,
                ease: CustomEase.create('custom', '0.19, 1, 0.22, 1'),
              },
            });

            tl.to(e.target.firstChild.children, { yPercent: 0 }, '0');
          }}
        >
          <div className="mask">
            <span>custom bezier</span>
            <span>custom bezier</span>
          </div>
        </div>

        <hr />

        {/* fourth */}
        <div
          className="link link-chars"
          onMouseEnter={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.5,
                ease: 'power2.out',
              },
            });

            tl.to(
              '.chars-mask span:first-child div',
              { yPercent: -100, stagger: 0.03 },
              '0'
            );

            tl.to(
              '.chars-mask span:last-child div',
              { yPercent: -100, stagger: 0.03 },
              '0'
            );
          }}
          onMouseLeave={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 0.5,
                ease: 'power2.out',
              },
            });

            tl.to(
              '.chars-mask span:first-child div',
              { yPercent: 0, stagger: 0.03 },
              '0'
            );

            tl.to(
              '.chars-mask span:last-child div',
              { yPercent: 0, stagger: 0.03 },
              '0'
            );
          }}
        >
          <div className="mask chars-mask">
            <span>smoooooth</span>
            <span>smoooooth</span>
          </div>
        </div>
      </div>
    </div>
  );
}
