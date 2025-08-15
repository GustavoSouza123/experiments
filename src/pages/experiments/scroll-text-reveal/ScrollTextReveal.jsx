import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function TextReveal() {
  useGSAP(() => {
    const tl = gsap.timeline({
      // defaults: {
      //   ease: 'power2.out',
      // },
    });

    SplitText.create('.paragraph.p1', {
      type: 'words',
      autoSplit: true,
      onSplit: (self) => {
        gsap.from(self.words, {
          autoAlpha: 0.2,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.scroll-text-reveal',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      },
    });
  });

  return (
    <div className="experiment scroll-text-reveal">
      <h1>Scroll Text Reveal</h1>

      <div className="content">
        <div className="paragraph p1">
          <span className="indent"></span>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus volutpat fringilla molestie.
          Nulla vitae aliquam justo. Nullam eu consequat arcu. Ut at
          sollicitudin ex, vitae malesuada ligula. Maecenas nec nisl orci. Nunc
          pharetra a mauris a molestie. Morbi fringilla nulla ac ipsum tristique
          tempus.
        </div>
      </div>
    </div>
  );
}
