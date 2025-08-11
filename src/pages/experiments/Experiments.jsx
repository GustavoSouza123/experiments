import React from 'react';
import { NavLink } from 'react-router';

export default function Experiments() {
  return (
    <div className="experiments">
      <h1>My Experiments</h1>

      <div className="links">
        <NavLink to="text-reveal">Text reveal</NavLink>
        <NavLink to="hover-effects">Hover effects</NavLink>
        <NavLink to="cursor-trail">Cursor trail</NavLink>
        <NavLink to="cursor-trail-with-boundaries">
          Cursor trail with boundaries
        </NavLink>
        <NavLink to="magnetic-effect">Magnetic effect</NavLink>
        <NavLink to="" className="inactive">Cursor tooltip</NavLink>
        <NavLink to="" className="inactive">Image mask reveal</NavLink>
      </div>
    </div>
  );
}
