import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';
import { initImageTrailOnPage } from './imageCursorTrail.js';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function ImageCursorTrail() {
  useEffect(() => {
    const cleanup = initImageTrailOnPage();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="experiment image-cursor-trail">
      <div data-trail="wrapper" className="trail-section">
        <h1 className="trail-heading">Cursor Image Trail</h1>
        <div className="trail-wrap">
          <div className="trail-list">
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9f69cd4f5ebc0676bf_cursor-trail-1.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9f5d1c4cf365a233ea_cursor-trail-2.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9f41234aeca6122868_cursor-trail-3.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9f26b40ce34b76bd14_cursor-trail-4.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9ff0e9944f7a772a8c_cursor-trail-5.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9f0bd979d3d6280fc8_cursor-trail-6.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9ff0cb7ef9ce6d4b4a_cursor-trail-7.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9f7bf12612bbb66235_cursor-trail-8.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9f916943fe31e14fe7_cursor-trail-9.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
            <div data-trail="item" className="trail-item">
              <img
                src="https://cdn.prod.website-files.com/679b7e7de9b9ad0339d5524e/679b8e9fcba222367b58fd97_cursor-trail-10.avif"
                alt=""
                className="trail-item__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
