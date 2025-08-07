import React from 'react';
import { NavLink } from 'react-router';

export default function Experiments() {
  return (
    <div className="experiments">
      <h1>My Experiments</h1>

      <div className="links">
        <NavLink to="text-reveal">Text reveal</NavLink>
        <NavLink to="hover-effects">Hover effects</NavLink>
      </div>
    </div>
  );
}
