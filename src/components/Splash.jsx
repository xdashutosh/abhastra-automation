import { useEffect, useRef } from 'react';

function SplashCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let config = {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,
      CAPTURE_RESOLUTION: 256,
      DENSITY_DISSIPATION: 0.95, // Color fades out
      VELOCITY_DISSIPATION: 0.96, // Motion stops
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 0,                   // No swirl, just trail
      SPLAT_RADIUS: 0.1,         // Thin trail
      SPLAT_FORCE: 3000,
      SHADING: false,
      COLOR_UPDATE_SPEED: 10,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: true,
    };

    let pointer = {
      x: 0, y: 0, dx: 0, dy: 0, moved: false,
    };
    
    let gl, ext, pointers = [];
    
    // CUSTOM PALETTE: Slate, Orange, White
    const PALETTE = [
        { r: 100/255, g: 116/255, b: 139/255 }, // Slate-500
        { r: 249/255, g: 115/255, b: 22/255 },  // Orange-500
        { r: 255/255, g: 255/255, b: 255/255 }, // White
    ];

    function getPointerColor() {
        const index = Math.floor((Date.now() / 400) % PALETTE.length);
        return PALETTE[index];
    }

    const resizeCanvas = () => {
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        initFramebuffers();
      }
    };

    const fetchShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
      return shader;
    };

    const createProgram = (vsSource, fsSource) => {
      const program = gl.createProgram();
      const vs = fetchShader(gl.VERTEX_SHADER, vsSource);
      const fs = fetchShader(gl.FRAGMENT_SHADER, fsSource);
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
      return program;
    };

    // --- SHADERS ---
    const baseVertexShader = `
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const displayShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform sampler2D uDye;
      uniform vec2 texelSize;
      uniform vec3 sunDirection;
      void main () {
        vec3 c = texture2D(uDye, vUv).rgb;
        // FIXED: Calculate alpha based on brightness. 
        // If color is black (0,0,0), alpha becomes 0.
        float a = max(c.r, max(c.g, c.b)); 
        gl_FragColor = vec4(c, a);
      }
    `;

    const splatShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `;

    const advectionShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt;
      uniform float dissipation;
      void main () {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = dissipation * texture2D(uSource, coord);
      }
    `;

    const divergenceShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `;

    const curlShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `;

    const vorticityShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
      void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `;

    const pressureShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `;

    const gradientSubtractShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `;

    const clearShader = `
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;
      void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `;

    let Programs = {
      splat: null, advection: null, divergence: null,
      curl: null, vorticity: null, pressure: null,
      gradienSubtract: null, display: null, clear: null
    };

    let dye, velocity, divergence, curl, pressure;

    const createFBO = (w, h, internalFormat, format, type, param) => {
      gl.activeTexture(gl.TEXTURE0);
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

      let fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      return {
        texture, fbo, width: w, height: h,
        attach: (id) => {
          gl.activeTexture(gl.TEXTURE0 + id);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          return id;
        }
      };
    };

    const createDoubleFBO = (w, h, internalFormat, format, type, param) => {
      let fbo1 = createFBO(w, h, internalFormat, format, type, param);
      let fbo2 = createFBO(w, h, internalFormat, format, type, param);
      return {
        width: w, height: h, texelSizeX: 1.0/w, texelSizeY: 1.0/h,
        get read() { return fbo1; },
        set read(value) { fbo1 = value; },
        get write() { return fbo2; },
        set write(value) { fbo2 = value; },
        swap: () => { let temp = fbo1; fbo1 = fbo2; fbo2 = temp; }
      };
    };

    const initFramebuffers = () => {
      let simRes = getResolution(config.SIM_RESOLUTION);
      let dyeRes = getResolution(config.DYE_RESOLUTION);

      const texType = ext.halfFloatTexType;
      const rgba    = ext.formatRGBA;
      const rg      = ext.formatRG;
      const r       = ext.formatR;
      const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

      gl.disable(gl.BLEND);

      if (!dye) dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);
      else dye = resizeDoubleFBO(dye, dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering);

      if (!velocity) velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);
      else velocity = resizeDoubleFBO(velocity, simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering);

      divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
      curl       = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
      pressure   = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST);
    };

    const resizeDoubleFBO = (target, w, h, internalFormat, format, type, param) => {
      if (target.width === w && target.height === h) return target;
      target.read = createFBO(w, h, internalFormat, format, type, param);
      target.write = createFBO(w, h, internalFormat, format, type, param);
      target.width = w;
      target.height = h;
      target.texelSizeX = 1.0/w;
      target.texelSizeY = 1.0/h;
      return target;
    };

    const getResolution = (resolution) => {
      let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
      if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
      let min = Math.round(resolution);
      let max = Math.round(resolution * aspectRatio);
      if (gl.drawingBufferWidth > gl.drawingBufferHeight) return { width: max, height: min };
      else return { width: min, height: max };
    };

    const blit = (target) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);

      if (target == null) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      } else {
        gl.viewport(0, 0, target.width, target.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
      }
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    };

    const splat = (x, y, dx, dy, color) => {
      gl.useProgram(Programs.splat);
      gl.uniform1i(gl.getUniformLocation(Programs.splat, 'uTarget'), velocity.read.attach(0));
      gl.uniform1f(gl.getUniformLocation(Programs.splat, 'aspectRatio'), canvas.width / canvas.height);
      gl.uniform2f(gl.getUniformLocation(Programs.splat, 'point'), x, y);
      gl.uniform3f(gl.getUniformLocation(Programs.splat, 'color'), dx, dy, 0.0);
      gl.uniform1f(gl.getUniformLocation(Programs.splat, 'radius'), correctRadius(config.SPLAT_RADIUS / 100.0));
      blit(velocity.write);
      velocity.swap();

      gl.uniform1i(gl.getUniformLocation(Programs.splat, 'uTarget'), dye.read.attach(0));
      gl.uniform3f(gl.getUniformLocation(Programs.splat, 'color'), color.r, color.g, color.b);
      blit(dye.write);
      dye.swap();
    };

    const correctRadius = (radius) => {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1) radius *= aspectRatio;
      return radius;
    };

    const init = () => {
      gl = canvas.getContext('webgl2', { alpha: config.TRANSPARENT, depth: false, antialias: false, preserveDrawingBuffer: false });
      const isWebGL2 = !!gl;
      if (!isWebGL2) {
         gl = canvas.getContext('webgl', { alpha: config.TRANSPARENT, depth: false, antialias: false, preserveDrawingBuffer: false });
      }
      
      let halfFloat;
      let supportLinearFiltering;

      if (isWebGL2) {
          gl.getExtension('EXT_color_buffer_float');
          supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
          halfFloat = gl.HALF_FLOAT;
      } else {
          halfFloat = gl.getExtension('OES_texture_half_float');
          supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
      }

      const getFormat = (internalFormat, format, type) => {
          return { internalFormat, format };
      };

      ext = {
        formatRGBA: isWebGL2 ? getFormat(gl.RGBA16F, gl.RGBA, halfFloat) : getFormat(gl.RGBA, gl.RGBA, halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE),
        formatRG:   isWebGL2 ? getFormat(gl.RG16F, gl.RG, halfFloat)     : getFormat(gl.RGBA, gl.RGBA, halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE),
        formatR:    isWebGL2 ? getFormat(gl.R16F, gl.RED, halfFloat)     : getFormat(gl.RGBA, gl.RGBA, halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE),
        halfFloatTexType: isWebGL2 ? halfFloat : (halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE),
        supportLinearFiltering: supportLinearFiltering
      };

      Programs.splat = createProgram(baseVertexShader, splatShaderSource);
      Programs.clear = createProgram(baseVertexShader, clearShader);
      Programs.advection = createProgram(baseVertexShader, advectionShaderSource);
      Programs.divergence = createProgram(baseVertexShader, divergenceShaderSource);
      Programs.curl = createProgram(baseVertexShader, curlShaderSource);
      Programs.vorticity = createProgram(baseVertexShader, vorticityShaderSource);
      Programs.pressure = createProgram(baseVertexShader, pressureShaderSource);
      Programs.gradienSubtract = createProgram(baseVertexShader, gradientSubtractShaderSource);
      Programs.display = createProgram(baseVertexShader, displayShaderSource);
      
      initFramebuffers();
      
      pointers = [];
      pointers.push(new pointerPrototype());
      
      animate();
    };

    function pointerPrototype() {
        this.id = -1;
        this.texcoordX = 0;
        this.texcoordY = 0;
        this.prevTexcoordX = 0;
        this.prevTexcoordY = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.down = false;
        this.moved = false;
        this.color = [30, 0, 300];
    }

    const step = (dt) => {
      gl.disable(gl.BLEND);

      // Curl
      gl.useProgram(Programs.curl);
      gl.uniform2f(gl.getUniformLocation(Programs.curl, 'texelSize'), velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(gl.getUniformLocation(Programs.curl, 'uVelocity'), velocity.read.attach(0));
      blit(curl);

      // Vorticity
      gl.useProgram(Programs.vorticity);
      gl.uniform2f(gl.getUniformLocation(Programs.vorticity, 'texelSize'), velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(gl.getUniformLocation(Programs.vorticity, 'uVelocity'), velocity.read.attach(0));
      gl.uniform1i(gl.getUniformLocation(Programs.vorticity, 'uCurl'), curl.attach(1));
      gl.uniform1f(gl.getUniformLocation(Programs.vorticity, 'curl'), config.CURL);
      gl.uniform1f(gl.getUniformLocation(Programs.vorticity, 'dt'), dt);
      blit(velocity.write);
      velocity.swap();

      // Divergence
      gl.useProgram(Programs.divergence);
      gl.uniform2f(gl.getUniformLocation(Programs.divergence, 'texelSize'), velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(gl.getUniformLocation(Programs.divergence, 'uVelocity'), velocity.read.attach(0));
      blit(divergence);

      // Clear Pressure
      gl.useProgram(Programs.clear);
      gl.uniform1i(gl.getUniformLocation(Programs.clear, 'uTexture'), pressure.read.attach(0));
      gl.uniform1f(gl.getUniformLocation(Programs.clear, 'value'), config.PRESSURE);
      blit(pressure.write);
      pressure.swap();

      // Pressure
      gl.useProgram(Programs.pressure);
      gl.uniform2f(gl.getUniformLocation(Programs.pressure, 'texelSize'), velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(gl.getUniformLocation(Programs.pressure, 'uDivergence'), divergence.attach(0));
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(gl.getUniformLocation(Programs.pressure, 'uPressure'), pressure.read.attach(1));
        blit(pressure.write);
        pressure.swap();
      }

      // Gradient Subtract
      gl.useProgram(Programs.gradienSubtract);
      gl.uniform2f(gl.getUniformLocation(Programs.gradienSubtract, 'texelSize'), velocity.texelSizeX, velocity.texelSizeY);
      gl.uniform1i(gl.getUniformLocation(Programs.gradienSubtract, 'uPressure'), pressure.read.attach(0));
      gl.uniform1i(gl.getUniformLocation(Programs.gradienSubtract, 'uVelocity'), velocity.read.attach(1));
      blit(velocity.write);
      velocity.swap();

      // Advection
      gl.useProgram(Programs.advection);
      gl.uniform2f(gl.getUniformLocation(Programs.advection, 'texelSize'), velocity.texelSizeX, velocity.texelSizeY);
      if (!ext.supportLinearFiltering) gl.uniform1i(gl.getUniformLocation(Programs.advection, 'uSource'), velocity.read.attach(0));
      gl.uniform1f(gl.getUniformLocation(Programs.advection, 'dt'), dt);
      gl.uniform1f(gl.getUniformLocation(Programs.advection, 'dissipation'), config.VELOCITY_DISSIPATION);
      gl.uniform1i(gl.getUniformLocation(Programs.advection, 'uVelocity'), velocity.read.attach(1));
      gl.uniform1i(gl.getUniformLocation(Programs.advection, 'uSource'), velocity.read.attach(0));
      blit(velocity.write);
      velocity.swap();

      gl.uniform1f(gl.getUniformLocation(Programs.advection, 'dissipation'), config.DENSITY_DISSIPATION);
      gl.uniform1i(gl.getUniformLocation(Programs.advection, 'uVelocity'), velocity.read.attach(1));
      gl.uniform1i(gl.getUniformLocation(Programs.advection, 'uSource'), dye.read.attach(0));
      blit(dye.write);
      dye.swap();
    };

    const render = (target) => {
        gl.useProgram(Programs.display);
        gl.uniform1i(gl.getUniformLocation(Programs.display, 'uTexture'), dye.read.attach(0));
        gl.uniform1i(gl.getUniformLocation(Programs.display, 'uDye'), dye.read.attach(1));
        gl.uniform2f(gl.getUniformLocation(Programs.display, 'texelSize'), 1.0 / canvas.width, 1.0 / canvas.height);
        gl.uniform3f(gl.getUniformLocation(Programs.display, 'sunDirection'), 0.0, 1.0, 0.0);
        blit(target);
    };

    let lastTime = Date.now();
    const animate = () => {
      resizeCanvas();
      const dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
      lastTime = Date.now();
      step(dt);
      render(null);
      requestAnimationFrame(animate);
    };

    const updatePointerDownData = (p, id, x, y) => {
        p.id = id;
        p.down = true;
        p.moved = false;
        p.texcoordX = x / canvas.width;
        p.texcoordY = 1.0 - y / canvas.height;
        p.prevTexcoordX = p.texcoordX;
        p.prevTexcoordY = p.texcoordY;
        p.deltaX = 0;
        p.deltaY = 0;
        const color = getPointerColor();
        p.color = [color.r, color.g, color.b];
    };

    const updatePointerMoveData = (p, x, y) => {
        p.prevTexcoordX = p.texcoordX;
        p.prevTexcoordY = p.texcoordY;
        p.texcoordX = x / canvas.width;
        p.texcoordY = 1.0 - y / canvas.height;
        p.deltaX = correctDeltaX(p.texcoordX - p.prevTexcoordX);
        p.deltaY = correctDeltaY(p.texcoordY - p.prevTexcoordY);
        p.moved = Math.abs(p.deltaX) > 0 || Math.abs(p.deltaY) > 0;
        const color = getPointerColor();
        p.color = [color.r, color.g, color.b];
    };

    const correctDeltaX = (delta) => {
        let aspectRatio = canvas.width / canvas.height;
        if (aspectRatio < 1) delta *= aspectRatio;
        return delta;
    };

    const correctDeltaY = (delta) => {
        let aspectRatio = canvas.width / canvas.height;
        if (aspectRatio > 1) delta /= aspectRatio;
        return delta;
    };

    const handleMouseMove = (e) => {
        if (!pointers || pointers.length === 0) return;
        let p = pointers[0];
        if (!p.down) {
             p.down = true;
             updatePointerDownData(p, -1, e.clientX, e.clientY);
        }
        updatePointerMoveData(p, e.clientX, e.clientY);
        
        if(p.moved) {
            splat(p.texcoordX, p.texcoordY, p.deltaX, p.deltaY, {r: p.color[0], g: p.color[1], b: p.color[2]});
        }
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
        if (!pointers || pointers.length === 0) return;
        const touches = e.targetTouches;
        if (touches.length > 0) {
            let p = pointers[0];
             if (!p.down) {
                 p.down = true;
                 updatePointerDownData(p, touches[0].identifier, touches[0].clientX, touches[0].clientY);
            } else {
                 updatePointerMoveData(p, touches[0].clientX, touches[0].clientY);
                 if(p.moved) {
                     splat(p.texcoordX, p.texcoordY, p.deltaX, p.deltaY, {r: p.color[0], g: p.color[1], b: p.color[2]});
                 }
            }
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    init();

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-60"
    />
  );
}

export default SplashCursor;