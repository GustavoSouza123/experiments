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
        <NavLink to="cursor-trail-with-boundaries">
          Cursor trail with boundaries
        </NavLink>
        <NavLink to="magnetic-effect">Magnetic effect</NavLink>
        <NavLink to="" className="inactive">
          Cursor tooltip
        </NavLink>
        <NavLink to="image-clip-path-reveal">Image clip-path reveal</NavLink>
        <NavLink to="" className="inactive">
          Text progress
        </NavLink>
      </div>
    </div>
  );
}
