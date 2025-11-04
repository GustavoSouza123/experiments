import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  ScrollTrigger,
  CustomEase,
  SplitText,
  ScrambleTextPlugin,
} from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, ScrambleTextPlugin);

export default function HoverEffects() {
  useGSAP(() => {
    let chars = SplitText.create('.chars-mask span', {
      type: 'chars',
    });
  });

  const scrambleTextRef = useRef(null);
  const scrambleText2Ref = useRef(null);

  return (
    <div className="experiment hover-effects">
      <h1>Hover Effects</h1>

      <div className="content">
        <div className="group">
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

          {/* <hr /> */}

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

          {/* <hr /> */}

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

          {/* <hr /> */}

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

          {/* <hr /> */}

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

          {/* <hr /> */}

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

          {/* <hr /> */}
        </div>

        {/* fourth */}
        <div
          className="link link-chars"
          onMouseEnter={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 1.3,
                ease: CustomEase.create('custom', '0.19, 1, 0.22, 1'),
              },
            });

            tl.to(
              '.chars-mask span:first-child div',
              { yPercent: -100, stagger: 0.05 },
              '0'
            );

            tl.to(
              '.chars-mask span:last-child div',
              { yPercent: -100, stagger: 0.05 },
              '0'
            );
          }}
          onMouseLeave={(e) => {
            let tl = gsap.timeline({
              defaults: {
                duration: 1.3,
                ease: CustomEase.create('custom', '0.19, 1, 0.22, 1'),
              },
            });

            tl.to(
              '.chars-mask span:first-child div',
              { yPercent: 0, stagger: 0.05 },
              '0'
            );

            tl.to(
              '.chars-mask span:last-child div',
              { yPercent: 0, stagger: 0.05 },
              '0'
            );
          }}
        >
          <div className="mask chars-mask">
            <span>smooth</span>
            <span>smooth</span>
          </div>
        </div>

        {/* fifth */}
        <div
          className="link scramble"
          onMouseEnter={(e) => {
            gsap.to('.link.scramble .text', {
              duration: 1,
              ease: 'power2.out',
              scrambleText: {
                text: scrambleTextRef.current.innerHTML,
                chars: 'upperCase',
                // chars: '!@#$%^&*',
                revealDelay: 0.1,
                speed: 1,
              },
            });
          }}
        >
          <div className="text" ref={scrambleTextRef}>
            SCRAMBLING
          </div>
        </div>

        {/* sixth */}
        <div
          className="link scramble2"
          onMouseEnter={(e) => {
            gsap.to('.link.scramble2 .text', {
              duration: 1,
              ease: 'power2.out',
              scrambleText: {
                text: scrambleText2Ref.current.innerHTML,
                // chars: 'lowerCase',
								chars: 'Az',
                revealDelay: 0.1,
                speed: 1,
              },
            });
          }}
        >
          <div className="text" ref={scrambleText2Ref}>
            letters
          </div>
        </div>
      </div>
    </div>
  );
}
