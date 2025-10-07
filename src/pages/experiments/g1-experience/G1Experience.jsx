import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function G1Experience() {
  const sideMenuRef = useRef(null);
  const maskRef = useRef(null);
  const circleRefs = useRef([]);
  const titleRef = useRef(null);
  const textRefs = useRef([]);

  useGSAP(() => {
    let tl = gsap.timeline({
      defaults: {
        // ease: CustomEase.create('custom', 'M0,0 C0.19,1 0.22,1 1,1'),
        ease: CustomEase.create('custom', 'M0,0 C0.22,1 0.36,1 1,1'),
        duration: 1.5,
      },
    });

    tl.from(
      maskRef.current,
      {
        yPercent: -100,
      },
      '0.5'
    ).from(
      circleRefs.current,
      {
        scale: 0,
        stagger: 0.2,
      },
      '<0.1'
    );

    SplitText.create(titleRef.current, {
      type: 'chars',
      mask: 'chars',
      charsClass: 'char++',

      onSplit: (self) => {
        tl.from(
          self.chars,
          {
            yPercent: 100,
            stagger: 0.05,
          },
          '>-1'
        );
      },
    });

    SplitText.create(textRefs.current, {
      type: 'words',
      mask: 'words',
      wordsClass: 'word++',

      onSplit: (self) => {
        tl.from(
          self.words,
          {
            yPercent: 100,
            stagger: 0.2,
          },
          '>-1.25'
        );
      },
    });

    tl.from(
      sideMenuRef.current,
      {
        xPercent: 100,
      },
      '<'
    );
  });

  return (
    <div className="experiment g1-experience">
      <div className="content">
        <div className="hero">
          <div className="top grid">
            <div className="title" ref={titleRef}>
              G1 Experience
            </div>
            <div className="edition">
              <div
                className="text"
                ref={(el) => el && !textRefs.current.includes(el) && textRefs.current.push(el)}
              >
                3rd
              </div>
              <div
                className="text"
                ref={(el) => el && !textRefs.current.includes(el) && textRefs.current.push(el)}
              >
                edition
              </div>
            </div>
            <div className="mask" ref={maskRef}></div>
          </div>
          <div className="bottom">
            <div
              className="circle"
              ref={(el) => el && !circleRefs.current.includes(el) && circleRefs.current.push(el)}
            ></div>
            <div
              className="circle"
              ref={(el) => el && !circleRefs.current.includes(el) && circleRefs.current.push(el)}
            ></div>
          </div>
        </div>
      </div>
      <div className="side-menu" ref={sideMenuRef}>
        <div className="menu-toggle">
          <span></span>
          <span></span>
        </div>
        <div className="content">
          <div className="title">
            <span>G1</span> <span>Experience</span>
          </div>
          <div className="bottom">
            <nav>
              <ul>
                <li>
                  <a href="">Schedule</a>
                </li>
                <li>
                  <a href="">Talks</a>
                </li>
                <li>
                  <a href="">Exhibition</a>
                </li>
              </ul>
            </nav>
            <div className="cta">Get Tickets</div>
          </div>
        </div>
      </div>
    </div>
  );
}
