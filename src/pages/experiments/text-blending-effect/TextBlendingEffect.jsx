import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

export default function TextBlendingEffect() {
  useGSAP(() => {});

  return <main id="container"></main>;
}
