import { useEffect, useRef } from 'react';

const ForegroundStatic = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;

    let noiseData: ImageData[] = [];
    let frame = 0;

    let loopTimeout: number;
    let animationFrameId: number;

    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xff000000;
        }
      }

      noiseData.push(idata);
    };

    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
    };

    const loop = () => {
      paintNoise();

      loopTimeout = window.setTimeout(() => {
        animationFrameId = window.requestAnimationFrame(loop);
      }, (1000 / 10));
    };

    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      noiseData = [];
      for (let i = 0; i < 10; i++) {
        createNoise();
      }

      loop();
    };

    const handleResize = () => {
      window.clearTimeout(loopTimeout);
      window.cancelAnimationFrame(animationFrameId);
      setup();
    };

    setup();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(loopTimeout);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="z-50 fixed top-0 left-0 w-full h-full pointer-events-none opacity-10" />
      
}

export default ForegroundStatic;
