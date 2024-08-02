import { Koulen } from "next/font/google";
import Image from "next/image";

import sign from "../public/sign.png";
import rev from "../public/rev.png";
import NavLink from "@/components/NavLink";
import { useEffect, useRef } from "react";

const koulen = Koulen({ subsets: ["latin"], weight: "400" });

export default function Home() {
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

  return (
    <main
      className={`${koulen.className} flex flex-col w-full bg-[#230606] text-[#FFBF00]`}
    >
      <nav className="flex w-full gap-8 md:gap-16 justify-center p-4 md:p-8 text-sm sm:text-lg lg:text-3xl">
        <NavLink href="#about" label="About" />
        <NavLink href="#faq" label="FAQ" />
        <NavLink href="#schedule" label="Schedule" />
        <NavLink href="#prizes" label="Prizes" />
      </nav>
      <div className="bg-landing bg-cover bg-center aspect-[905/1408] w-full flex flex-col items-center justify-between pb-2">
        <Image src={sign} alt="HowdyHack 2024" />
        <Image src={rev} alt="Reveille" className="w-1/2 lg:w-[535px]" />
      </div>
      <canvas ref={canvasRef} className="noise" style={{ width: '100%', height: '100%' }} />
    </main>
  );
}
