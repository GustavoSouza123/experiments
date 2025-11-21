import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, CustomEase, SplitText } from 'gsap/all';
import './style.scss';
import { initDirectionalListHover } from './directionalListHover';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export default function DirectionalListHover() {
  useEffect(() => {
    initDirectionalListHover();
  }, []);

  return (
    <div className="experiment directional-list-hover">
      <div data-directional-hover="" data-type="y" className="directional-list">
        <div className="directional-list__info">
          <div className="directional-list__col-award">
            <p className="direcitonal-list__eyebrow">Award</p>
          </div>
          <div className="directional-list__col-client">
            <p className="direcitonal-list__eyebrow">Client</p>
          </div>
          <div className="directional-list__col-year">
            <p className="direcitonal-list__eyebrow">Year</p>
          </div>
        </div>
        <div className="directional-list__collection">
          <div className="directional-list__list">
            <a
              data-directional-hover-item=""
              href="https://www.flowfest.co.uk/"
              target="_blank"
              className="directional-list__item"
            >
              <div data-directional-hover-tile="" className="directional-list__hover-tile"></div>
              <div className="directional-list__border is--item"></div>
              <div className="directional-list__col-award">
                <p className="direcitonal-list__p">Site of the Day</p>
              </div>
              <div className="directional-list__col-client">
                <p className="direcitonal-list__p">FlowFest</p>
              </div>
              <div className="directional-list__col-year">
                <p className="direcitonal-list__p">2025</p>
              </div>
            </a>
            <a
              data-directional-hover-item=""
              href="https://www.osmo.supply/"
              target="_blank"
              className="directional-list__item"
            >
              <div data-directional-hover-tile="" className="directional-list__hover-tile"></div>
              <div className="directional-list__border is--item"></div>
              <div className="directional-list__col-award">
                <p className="direcitonal-list__p">Product Honors</p>
              </div>
              <div className="directional-list__col-client">
                <p className="direcitonal-list__p">Osmo</p>
              </div>
              <div className="directional-list__col-year">
                <p className="direcitonal-list__p">2025</p>
              </div>
            </a>
            <a
              data-directional-hover-item=""
              href="https://brand.docusign.com/"
              target="_blank"
              className="directional-list__item"
            >
              <div data-directional-hover-tile="" className="directional-list__hover-tile"></div>
              <div className="directional-list__border is--item"></div>
              <div className="directional-list__col-award">
                <p className="direcitonal-list__p">Site of the Day</p>
              </div>
              <div className="directional-list__col-client">
                <p className="direcitonal-list__p">Docusign Brand</p>
              </div>
              <div className="directional-list__col-year">
                <p className="direcitonal-list__p">2024</p>
              </div>
            </a>
            <a
              data-directional-hover-item=""
              href="https://aanstekelijk.nl/"
              target="_blank"
              className="directional-list__item"
            >
              <div data-directional-hover-tile="" className="directional-list__hover-tile"></div>
              <div className="directional-list__border is--item"></div>
              <div className="directional-list__col-award">
                <p className="direcitonal-list__p">Site of the Day</p>
              </div>
              <div className="directional-list__col-client">
                <p className="direcitonal-list__p">Aanstekelijk</p>
              </div>
              <div className="directional-list__col-year">
                <p className="direcitonal-list__p">2023</p>
              </div>
            </a>
          </div>
        </div>
        <div className="directional-list__border"></div>
      </div>
    </div>
  );
}
