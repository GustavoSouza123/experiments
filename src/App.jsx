import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import Wrapper from './pages/Wrapper';
import Experiments from './pages/experiments/Experiments';
import NotFound from './pages/NotFound';
import TextReveal from './pages/experiments/text-reveal/TextReveal';
import ScrollTextReveal from './pages/experiments/scroll-text-reveal/ScrollTextReveal';
import HoverEffects from './pages/experiments/hover-effects/HoverEffects';
import CursorTrail from './pages/experiments/cursor-trail/CursorTrail';
import CursorTrailWithBoundaries from './pages/experiments/cursor-trail-with-boundaries/CursorTrailWithBoundaries';
import MagneticEffect from './pages/experiments/magnetic-effect/MagneticEffect';
import ImageClipPathReveal from './pages/experiments/image-clip-path-reveal/ImageClipPathReveal';
import TextBlendingEffect from './pages/experiments/text-blending-effect/TextBlendingEffect';
import ImageParallaxEffect from './pages/experiments/image-parallax-effect/ImageParallaxEffect';
import WebGLSliderSmooothy from './pages/experiments/webgl-slider-smooothy/WebGLSliderSmooothy.tsx';
import WebGL from './pages/experiments/webgl/WebGL.jsx';
import ThreejsCube from './pages/experiments/three-js-cube/ThreejsCube.jsx';
import WebGLImageEffect1 from './pages/experiments/webgl-image-effect-1/WebGLImageEffect1.jsx';
import WebGLImageEffect2 from './pages/experiments/webgl-image-effect-2/WebGLImageEffect2.jsx';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Experiments />} />

          <Route path="text-reveal" element={<TextReveal />} />
          <Route path="scroll-text-reveal" element={<ScrollTextReveal />} />
          <Route path="hover-effects" element={<HoverEffects />} />
          <Route path="cursor-trail" element={<CursorTrail />} />
          <Route path="cursor-trail-with-boundaries" element={<CursorTrailWithBoundaries />} />
          <Route path="magnetic-effect" element={<MagneticEffect />} />
          <Route path="image-clip-path-reveal" element={<ImageClipPathReveal />} />
          <Route path="text-blending-effect" element={<TextBlendingEffect />} />
          <Route path="image-parallax-effect" element={<ImageParallaxEffect />} />
          <Route path="webgl-slider-smooothy" element={<WebGLSliderSmooothy />} />
          <Route path="webgl" element={<WebGL />} />
          <Route path="webgl-image-effect-1" element={<WebGLImageEffect1 />} />
          <Route path="webgl-image-effect-2" element={<WebGLImageEffect2 />} />
          <Route path="three-js-cube" element={<ThreejsCube />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
