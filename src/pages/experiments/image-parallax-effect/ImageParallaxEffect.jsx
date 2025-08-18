import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';
import image from './image.png';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function ImageParallaxEffect() {
  useGSAP(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.image',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      .fromTo(
        '.image img',
        { yPercent: -25, ease: 'none' },
        { yPercent: 25, ease: 'none' }
      );
  });

  return (
    <div className="experiment image-parallax-effect">
      <h1>Image parallax effect</h1>

      <div className="image">
        <img src={image} alt="Image" />
      </div>
    </div>
  );
}
