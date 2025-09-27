import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './style.scss';

export default function WebGLImageEffect1() {
  // variables
  let easeFactor = 0.02;
  let scene, camera, renderer, planeMesh;
  let mousePosition = { x: 0.5, y: 0.5 };
  let targetMousePosition = { x: 0.5, y: 0.5 };
  let mouseStopTimeout;
  let aberrationIntensity = 0.0;
  let lastPosition = { x: 0.5, y: 0.5 };
  let prevPosition = { x: 0.5, y: 0.5 };

  // shaders
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

  const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D u_texture;    
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_aberrationIntensity;

    void main() {
        vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
        vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
        
        vec2 mouseDirection = u_mouse - u_prevMouse;
        
        vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
 
        vec2 uvOffset = strength * - mouseDirection * 0.2;
        vec2 uv = vUv - uvOffset;

        vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
        vec4 colorG = texture2D(u_texture, uv);
        vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
`;

  useEffect(() => {
    const imageContainer = document.getElementById('imageContainer');
    const imageElement = document.getElementById('myImage');

    // initializing the scene
    function initializeScene(texture) {
      // scene creation
      scene = new THREE.Scene();

      // camera setup
      camera = new THREE.PerspectiveCamera(
        80,
        imageElement.offsetWidth / imageElement.offsetHeight,
        0.01,
        10
      );
      camera.position.z = 1;

      // uniforms
      let shaderUniforms = {
        u_mouse: { type: 'v2', value: new THREE.Vector2() },
        u_prevMouse: { type: 'v2', value: new THREE.Vector2() },
        u_aberrationIntensity: { type: 'f', value: 0.0 },
        u_texture: { type: 't', value: texture },
      };

      // creating a plane mesh with materials
      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );

      // add mesh to scene
      scene.add(planeMesh);

      // render
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(imageElement.offsetWidth, imageElement.offsetHeight);

      // create a canvas
      imageContainer.appendChild(renderer.domElement);
    }

    // use the existing image from html in the canvas
    initializeScene(new THREE.TextureLoader().load(imageElement.src));

    // animating the scene
    function animateScene() {
      requestAnimationFrame(animateScene);

      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

      planeMesh.material.uniforms.u_mouse.value.set(mousePosition.x, 1.0 - mousePosition.y);

      planeMesh.material.uniforms.u_prevMouse.value.set(prevPosition.x, 1.0 - prevPosition.y);

      aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);

      planeMesh.material.uniforms.u_aberrationIntensity.value = aberrationIntensity;

      renderer.render(scene, camera);
    }

    animateScene();

    // event listeners
    imageContainer.addEventListener('mousemove', handleMouseMove);
    imageContainer.addEventListener('mouseenter', handleMouseEnter);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);

    function handleMouseMove(event) {
      easeFactor = 0.02;
      let rect = imageContainer.getBoundingClientRect();
      prevPosition = { ...targetMousePosition };

      targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.y = (event.clientY - rect.top) / rect.height;

      aberrationIntensity = 1;
    }

    function handleMouseEnter(event) {
      easeFactor = 0.02;
      let rect = imageContainer.getBoundingClientRect();

      mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
    }

    function handleMouseLeave() {
      easeFactor = 0.02;
      targetMousePosition = { ...prevPosition };
    }
  }, []);

  return (
    <div className="webgl-image-effect-1">
      <div id="imageContainer">
        <img id="myImage" src="https://assets.codepen.io/9051928/palm-tree.jpg" />
      </div>

      <div className="info">
        <a href="https://www.youtube.com/watch?v=gGvYq6baFiQ">Tutorial from Juxtopposed</a>
      </div>
    </div>
  );
}
