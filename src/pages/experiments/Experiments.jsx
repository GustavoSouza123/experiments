import React from 'react';
import { NavLink } from 'react-router';

export default function Experiments() {
  return (
    <div className="experiments">
      <h1>My Experiments</h1>

      <div className="links">
        <NavLink to="text-reveal">Text reveal</NavLink>
        <NavLink to="scroll-text-reveal">Scroll text reveal</NavLink>
        <NavLink to="hover-effects">Hover effects</NavLink>
        <NavLink to="cursor-trail">Cursor trail</NavLink>
        <NavLink to="cursor-trail-with-boundaries">Cursor trail with boundaries</NavLink>
        <NavLink to="magnetic-effect">Magnetic effect</NavLink>
        <NavLink to="" className="inactive">
          Cursor tooltip
        </NavLink>
        <NavLink to="image-clip-path-reveal">Image clip-path reveal</NavLink>
        <NavLink to="text-blending-effect" className="inactive">
          Text blending effect
        </NavLink>
        <NavLink to="image-parallax-effect">Image parallax effect</NavLink>
        <NavLink to="webgl-slider-smooothy">WebGL Slider (smooothy)</NavLink>
        <NavLink to="webgl">WebGL</NavLink>
        <NavLink to="webgl-pixel-distortion-1">WebGL Pixel Distortion #1</NavLink>
        <NavLink to="three-js-cube">Three.js Cube</NavLink>
      </div>
    </div>
  );
}
