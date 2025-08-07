import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Outlet, useLocation } from 'react-router';
import { ReactLenis, useLenis } from 'lenis/react';

gsap.registerPlugin(useGSAP);

export default function Wrapper() {
  /* Lenis setup */
  const lenisRef = useRef();

  useGSAP(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
  });

  /* scroll to top when route changes */
  const location = useLocation();

  useEffect(() => {
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
  }, [location, lenisRef]);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false, lerp: 0.1 }} ref={lenisRef} />
      <Outlet />
    </>
  );
}
