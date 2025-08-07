import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import Wrapper from './pages/Wrapper';
import Experiments from './pages/experiments/Experiments';
import NotFound from './pages/NotFound';
import TextReveal from './pages/experiments/text-reveal/TextReveal';
import HoverEffects from './pages/experiments/hover-effects/HoverEffects';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Experiments />} />

          <Route path="text-reveal" element={<TextReveal />} />
          <Route path="hover-effects" element={<HoverEffects />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
