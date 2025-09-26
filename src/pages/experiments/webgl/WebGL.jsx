// MiniWebGLFluid.jsx
import React, { useRef, useEffect } from "react";

export default function WebGL() {
  const cRef = useRef();
  const mouse = useRef([0, 0, 0]); // x, y, down

  useEffect(() => {
    const canvas = cRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vs = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main(){ vUv = aPos*0.5+0.5; gl_Position = vec4(aPos,0.,1.); }
    `;

    // minimal fragment: fbm-based flow + mouse influence
    const fs = `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec3 iMouse;

      // hash / noise
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float noise(vec2 p){
        vec2 i=floor(p); vec2 f=fract(p);
        float a=hash(i), b=hash(i+vec2(1.,0.)), c=hash(i+vec2(0.,1.)), d=hash(i+vec2(1.,1.));
        vec2 u=f*f*(3.-2.*f);
        return mix(a,b,u.x)+ (c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
      }
      float fbm(vec2 p){
        float z=0.0; float amp=0.5;
        for(int i=0;i<5;i++){ z+=amp*noise(p); p*=2.; amp*=0.5; }
        return z;
      }

      void main(){
        vec2 uv = vUv;
        vec2 p = (uv - 0.5) * iResolution.xy / min(iResolution.x,iResolution.y);

        // base flow from fbm + time
        float t = iTime * 0.2;
        vec2 q = vec2(fbm(p + t), fbm(p - t));
        vec2 flow = vec2(fbm(p + q + vec2(0.0, t)), fbm(p - q - vec2(t,0.0)));

        // mouse influence (repel/attract)
        vec2 m = (iMouse.xy / iResolution.xy) - 0.5;
        m.y *= iResolution.y / iResolution.x;
        float md = length(m - p);
        flow += (m - p) * (0.5 * iMouse.z) * exp(-md*10.0);

        // color mapping
        float v = fbm(p + flow * 1.8 + t*0.5);
        vec3 col = vec3(0.1,0.15,0.25) + vec3(0.8,0.6,0.3)*pow(abs(sin(3.1415*v + flow.x*2.0)), 1.2);

        // vignette + final
        float vign = smoothstep(0.9, 0.3, length((uv-0.5)*vec2(iResolution.x/iResolution.y,1.0)));
        col *= mix(1.0, vign, 0.6);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compile(src, type) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
        console.error(gl.getShaderInfoLog(s));
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(vs, gl.VERTEX_SHADER));
    gl.attachShader(prog, compile(fs, gl.FRAGMENT_SHADER));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // uniforms
    const uRes = gl.getUniformLocation(prog, "iResolution");
    const uTime = gl.getUniformLocation(prog, "iTime");
    const uMouse = gl.getUniformLocation(prog, "iMouse");

    // resize
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      canvas.width = Math.floor(canvas.clientWidth * DPR);
      canvas.height = Math.floor(canvas.clientHeight * DPR);
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    // interaction
    function setMouse(e, down = 1) {
      const r = canvas.getBoundingClientRect();
      mouse.current = [
        (e.clientX - r.left) * DPR,
        (canvas.clientHeight - (e.clientY - r.top) * DPR),
        down,
      ];
    }
    canvas.addEventListener("pointerdown", (e) => setMouse(e, 1));
    window.addEventListener("pointermove", (e) => setMouse(e, mouse.current[2]));
    window.addEventListener("pointerup", () => (mouse.current[2] = 0));

    let start = performance.now();
    function frame(now) {
      const t = (now - start) * 0.001;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform3f(uMouse, mouse.current[0], mouse.current[1], mouse.current[2]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", setMouse);
      window.removeEventListener("pointermove", setMouse);
      window.removeEventListener("pointerup", () => (mouse.current[2] = 0));
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={cRef}
      className="webgl-fluid"
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        display: "block",
      }}
    />
  );
}
