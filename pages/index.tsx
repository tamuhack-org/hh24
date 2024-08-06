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
      className={`${koulen.className} flex flex-col w-full bg-[#230606]`}
    >
      <nav className="bg-landing-top bg-cover bg-center aspect-[905/92] w-full shadow-xl z-10 flex gap-8 md:gap-16 min-[2000px]:gap-32 p-4 md:p-8 justify-center items-center text-sm sm:text-lg lg:text-3xl min-[2000px]:text-5xl text-[#FFBF00]">
        <NavLink href="#about" label="About" disabled />
        <NavLink href="#faq" label="FAQ" disabled />
        <NavLink href="#schedule" label="Schedule" disabled />
        <NavLink href="#prizes" label="Prizes" disabled />
      </nav>
      <div className="bg-landing bg-cover bg-center aspect-[905/1408] w-full flex flex-col items-center justify-between pb-2">
        <Image src={sign} alt="TAMUhack HowdyHack 2024" className="-m-1 w-2/3 lg:w-1/2" />
        <div className="flex flex-col justify-center items-center text-center text-[#230606] w-full gap-8 md:gap-12 lg:gap-24">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl min-[2000px]:text-8xl font-bold">September 28-29, 2024</h1>
          <Image src={rev} alt="Reveille" className="w-1/2 lg:w-[535px] min-[2000px]:w-2/5" />
        </div>
      </div>
      <canvas ref={canvasRef} className="z-50 fixed top-0 left-0 w-full h-full pointer-events-none opacity-10" />
    </main>
  );
}
