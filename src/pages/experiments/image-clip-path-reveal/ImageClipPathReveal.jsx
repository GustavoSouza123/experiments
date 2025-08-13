import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';
import image from './image.png';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function ImageClipPathReveal() {
  useGSAP(() => {
    let tl = gsap.timeline({
      defaults: {
        duration: 2,
        ease: CustomEase.create('custom', '0.62,0.05,0.01,0.99'),
      },
    });

    tl.fromTo(
      'img',
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', scale: 1.5 },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        scale: 1,
      },
      0.5
    );
  });

  return (
    <div className="experiment image-clip-path-reveal">
      <h1>Image Clip Path Reveal</h1>

      <div className="content">
        <img src={image} alt="Monet's image" />
      </div>
    </div>
  );
}
