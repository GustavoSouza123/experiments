import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function G1Experience() {
  useGSAP(() => {});

  return (
    <div className="experiment g1-experience">
      <div className="content">
        <div className="hero">
          <div className="top grid">
            <div className="title">G1 Experience</div>
            <div className="edition">
              <div className="text">3rd</div>
              <div className="text">edition</div>
            </div>
          </div>
          <div className="bottom">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div className="side-menu">
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
