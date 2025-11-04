import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Register the plugin for use inside this file
gsap.registerPlugin(ScrollTrigger);

function initImageTrail(config = {}) {
  // config + defaults
  const options = {
    minWidth: config.minWidth ?? 992,
    moveDistance: config.moveDistance ?? 15,
    stopDuration: config.stopDuration ?? 300,
    trailLength: config.trailLength ?? 5,
  };

  const wrapper = document.querySelector('[data-trail="wrapper"]');

  if (!wrapper || window.innerWidth < options.minWidth) {
    return;
  }

  // State management
  const state = {
    trailInterval: null,
    globalIndex: 0,
    last: { x: 0, y: 0 },
    trailImageTimestamps: new Map(),
    trailImages: Array.from(document.querySelectorAll('[data-trail="item"]')),
    isActive: false,
  };

  // Utility functions
  const MathUtils = {
    lerp: (a, b, n) => (1 - n) * a + n * b,
    distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
  };

  function getRelativeCoordinates(e, rect) {
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function activate(trailImage, x, y) {
    if (!trailImage) return;

    // Make sure image centers on the cursor
    gsap.set(trailImage, {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      xPercent: -50,
      yPercent: -50,
      zIndex: state.globalIndex,
      display: 'block',
      autoAlpha: 1,
    });

    state.trailImageTimestamps.set(trailImage, Date.now());

    // Smooth entrance animation
    gsap.fromTo(
      trailImage,
      { scale: 0.8, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: true,
      }
    );

    state.last = { x, y };
  }

  function fadeOutTrailImage(trailImage) {
    if (!trailImage) return;

    // Here, animate how the images will disappear!
    gsap.to(trailImage, {
      opacity: 0,
      scale: 0.2,
      duration: 0.8,
      ease: 'expo.out',
      onComplete: () => {
        gsap.set(trailImage, { autoAlpha: 0 });
      },
    });
  }

  function handleOnMove(e) {
    if (!state.isActive) return;

    const rectWrapper = wrapper.getBoundingClientRect();
    const { x: relativeX, y: relativeY } = getRelativeCoordinates(e, rectWrapper);

    const distanceFromLast = MathUtils.distance(relativeX, relativeY, state.last.x, state.last.y);

    if (distanceFromLast > window.innerWidth / options.moveDistance) {
      const lead = state.trailImages[state.globalIndex % state.trailImages.length];
      const tail =
        state.trailImages[(state.globalIndex - options.trailLength) % state.trailImages.length];

      activate(lead, relativeX, relativeY);
      fadeOutTrailImage(tail);
      state.globalIndex++;
    }
  }

  function cleanupTrailImages() {
    const currentTime = Date.now();
    for (const [trailImage, timestamp] of state.trailImageTimestamps.entries()) {
      if (currentTime - timestamp > options.stopDuration) {
        fadeOutTrailImage(trailImage);
        state.trailImageTimestamps.delete(trailImage);
      }
    }
  }

  function startTrail() {
    if (state.isActive) return;

    state.isActive = true;
    wrapper.addEventListener('mousemove', handleOnMove);
    state.trailInterval = setInterval(cleanupTrailImages, 100);
  }

  function stopTrail() {
    if (!state.isActive) return;

    state.isActive = false;
    wrapper.removeEventListener('mousemove', handleOnMove);
    clearInterval(state.trailInterval);
    state.trailInterval = null;

    // Clean up remaining trail images
    state.trailImages.forEach(fadeOutTrailImage);
    state.trailImageTimestamps.clear();
  }

  // Initialize ScrollTrigger
  ScrollTrigger.create({
    trigger: wrapper,
    start: 'top bottom',
    end: 'bottom top',
    onEnter: startTrail,
    onEnterBack: startTrail,
    onLeave: stopTrail,
    onLeaveBack: stopTrail,
  });

  // Clean up on window resize
  const handleResize = () => {
    if (window.innerWidth < options.minWidth && state.isActive) {
      stopTrail();
    } else if (window.innerWidth >= options.minWidth && !state.isActive) {
      startTrail();
    }
  };

  window.addEventListener('resize', handleResize);

  return () => {
    stopTrail();
    window.removeEventListener('resize', handleResize);
  };
}

export function initImageTrailOnPage() {
  return initImageTrail({
    minWidth: 992,
    moveDistance: 15,
    stopDuration: 350,
    trailLength: 8,
  });
}
