import React, { useEffect, useState } from 'react';
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

export default function ArchitectureStudioPortfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const works = [
    {
      name: 'jaloura main house',
      image: h01,
    },
    {
      name: 'jaloura main house',
      image: h02,
    },
    {
      name: 'jaloura main house',
      image: h03,
    },
    {
      name: 'jaloura main house',
      image: h04,
    },
    {
      name: 'jaloura main house',
      image: h05,
    },
    {
      name: 'jaloura main house',
      image: h06,
    },
    {
      name: 'jaloura main house',
      image: v01,
    },
    {
      name: 'jaloura main house',
      image: v02,
    },
    {
      name: 'jaloura main house',
      image: v03,
    },
    {
      name: 'jaloura main house',
      image: v04,
    },
    {
      name: 'jaloura main house',
      image: v05,
    },
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // const worksEl = document.querySelector('.gallery .works');

    // const totalHeight = worksEl.scrollHeight - worksEl.clientWidth;
    // const scrolled = window.scrollY;
    // const progress = (scrolled / totalHeight) * 100;
    // setScrollProgress(progress);
  };

  return (
    <div className="container">
      <header>
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
          Get in touch <span></span>
        </div>
      </header>

      <main>
        <section className="gallery">
          <div className="works">
            {works.map((work) => (
              <div className="work">
                <div className="image">
                  <img src={work.image} alt={work.image + ' image'} />
                </div>
                <div className="name">{work.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bottom">
          <div className="title">Works</div>
          <div className="scroll">
            <div className="text">Scroll down to explore</div>
            <div className="progress">({scrollProgress})</div>
          </div>
          <div className="links">
            <div className="link">in progress ↗</div>
            <div className="link">archive ↗</div>
          </div>
        </section>
      </main>
    </div>
  );
}
