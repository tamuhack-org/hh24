import { Koulen } from "next/font/google";
import Image from "next/image";

import sign from "../public/sign.png";
import rev from "../public/rev.png";
import NavLink from "@/components/NavLink";
import { useEffect, useRef } from "react";
import ForegroundStatic from "@/components/ForegroundStatic";
import SkyBackground from "@/components/SkyBackground";

const koulen = Koulen({ subsets: ["latin"], weight: "400" });

export default function Home() {
  

  return (
    <main
      className={`${koulen.className} flex flex-col w-full`}
    >
      <SkyBackground />
      <nav className="bg-landing-top bg-center bg-repeat-x aspect-[905/92] lg:h-20 w-full shadow-xl z-10 flex gap-8 md:gap-16 min-[2000px]:gap-32 px-4 md:px-8 justify-center items-center text-sm sm:text-lg lg:text-3xl min-[2000px]:text-5xl text-[#FFBF00]">
        <NavLink href="#about" label="About" disabled />
        <NavLink href="#faq" label="FAQ" disabled />
        <NavLink href="#schedule" label="Schedule" disabled />
        <NavLink href="#prizes" label="Prizes" disabled />
      </nav>
      <div className="bg-landing min-[1200px]:bg-none bg-size-landing w-full flex flex-col items-center justify-between gap-32 pb-2">
        <Image src={sign} alt="TAMUhack HowdyHack 2024" className="-m-1 w-2/3 lg:w-1/2 max-w-[800px]" />
        <div className="flex flex-col justify-center items-center text-center text-[#230606] w-full gap-8 md:gap-12 lg:gap-24">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl min-[2000px]:text-8xl font-bold">September 28-29, 2024</h1>
          <Image src={rev} alt="Reveille" className="w-1/2 lg:w-[535px] min-[2000px]:w-2/5" />
        </div>
        <div className="bg-[#230606] w-full m-0 p-0 h-[600px]">
          <p className="text-[#d1d1d1] text-center text-4xl mt-32">This website is under construction! Check back later for more details &lt;3</p>
        </div>
      </div>
      <ForegroundStatic />
    </main>
  );
}
