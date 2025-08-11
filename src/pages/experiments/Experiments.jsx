import React from 'react';
import { NavLink } from 'react-router';

export default function Experiments() {
  return (
    <div className="experiments">
      <h1>My Experiments</h1>

      <div className="links">
        <NavLink to="text-reveal">Text reveal</NavLink>
        <NavLink to="hover-effects">Hover effects</NavLink>
        <NavLink to="cursor-trail">Cursor Trail</NavLink>
        <NavLink to="cursor-trail-with-boundaries">
          Cursor Trail with Boundaries
        </NavLink>
      </div>
    </div>
  );
}
