import React, { useEffect, useRef, useState } from 'react';
import h01 from './images/h01.jpeg';
import h02 from './images/h02.jpeg';
import h03 from './images/h03.jpeg';
import h04 from './images/h04.jpeg';
import h05 from './images/h05.jpeg';
import h06 from './images/h06.jpeg';
import v01 from './images/v01.jpg';
import v02 from './images/v02.jpg';
import v03 from './images/v03.jpg';
import v04 from './images/v04.jpg';
import v05 from './images/v05.jpg';
import './style.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CustomEase, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

export default function ArchitectureStudioPortfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const triggerRef = useRef(null);
  const worksRef = useRef(null);

  const works = [
    {
      name: 'vernon',
      image: h04,
    },
    {
      name: 'warraba 2',
      image: v05,
    },
    {
      name: 'Myrtle Pool House',
      image: v01,
    },
    {
      name: 'lloyd',
      image: h01,
    },
    {
      name: 'Clifton',
      image: h02,
    },
    {
      name: 'upper cairns terrace',
      image: v04,
    },
    {
      name: 'mowbray',
      image: v02,
    },
    {
      name: 'tooth',
      image: h03,
    },
    {
      name: 'ozanne',
      image: h05,
    },
    {
      name: 'hawken',
      image: v03,
    },
    {
      name: 'Haig',
      image: h06,
    },
  ];

  useGSAP(() => {
    const trigger = triggerRef.current;
    const section = worksRef.current;

    const totalWidth = section.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(section, {
      x: -(totalWidth - viewportWidth),
			ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: () => `${totalWidth - viewportWidth}`,
        pin: true,
        pinSpacing: false,
        scrub: true,
        anticipatePin: 1,
        markers: true,
        onUpdate: (self) => {
          setScrollProgress(Math.round(self.progress * 100));
        },
      },
    });
  });

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleScroll = () => {
    // const worksEl = document.querySelector('.gallery .works');
    // const totalHeight = worksEl.scrollHeight - worksEl.clientWidth;
    // const scrolled = window.scrollY;
    // const progress = (scrolled / totalHeight) * 100;
    // setScrollProgress(progress);
  };

  return (
    <div className="architecture-studio-portfolio" ref={triggerRef}>
      <header className="grid">
        <div className="name">OH Architecture</div>

        <nav>
          <ul>
            <li>
              <a href="">Works,</a>
            </li>
            <li>
              <a href="">Studio,</a>
            </li>
            <li>
              <a href="">Process,</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
          </ul>
        </nav>

        <div className="contact">
          <div className="button">
            Get in touch <span></span>
          </div>
        </div>
      </header>

      <main>
        <section className="gallery">
          <div className="works" ref={worksRef}>
            {works.map((work, index) => (
              <div className="work" key={index}>
                <div className="image">
                  <img src={work.image} alt={work.image + ' image'} />
                </div>
                <div className="name">{work.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bottom grid">
          <div className="title">Works</div>
          <div className="scroll">
            <div className="text">Scroll down to explore</div>
            <div className="progress">
              ({scrollProgress}
              <span>%</span>)
            </div>
          </div>
          <div className="links">
            <div className="buttons">
              <div className="link">in progress ↗</div>
              <div className="link">archive ↗</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
