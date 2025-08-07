import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import Wrapper from './pages/Wrapper';
import Experiments from './pages/experiments/Experiments';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Experiments />} />

          {/* <Route path="work">
            <Route index element={<Work />} />
            <Route path=":projectId" element={<Project />} />
          </Route> */}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
