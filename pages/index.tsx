import { Koulen } from "next/font/google";
import Image from "next/image";

import sign from "../public/sign.png";
import rev from "../public/rev.png";
import logo from "../public/hh24-logo.png";
import NavLink from "@/components/NavLink";
import ForegroundStatic from "@/components/ForegroundStatic";
import { useEffect, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import Link from "next/link";

const koulen = Koulen({ subsets: ["latin"], weight: "400" });

const backgroundImages = ['bg-warble1', 'bg-warble2', 'bg-warble3', 'bg-warble4'];

export default function Home() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [backgroundHeight, setBackgroundHeight] = useState(0);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((backgroundImageIndex + 1) % backgroundImages.length);
    }, 200);

    return () => clearInterval(interval);
  }, [backgroundImageIndex]);

  useEffect(() => {
    setBackgroundHeight(document.getElementById('sunset')?.offsetWidth! * 1.5 || 0);
  }, [windowWidth]);

  return (
    <main
      className={`${koulen.className} flex flex-col items-center w-full bg-[#1b0000]`}
    >
      {/* <SkyBackground /> */}
      <nav className="bg-[#1b0000] flex flex-col w-full items-center text-[#FFBF00] py-6 gap-4 min-[2000px]:gap-8 z-10">
        <Link href="/">
          <Image src={logo} alt="HowdyHack 2024 Logo" className="w-12 h-12 md:w-24 md:h-24 min-[1600px]:h-30 min-[1600px]:w-30" />
        </Link>
        <div className="lg:h-20 w-full z-10 flex gap-8 md:gap-16 min-[2000px]:gap-32 px-2 pt-2 md:px-4 md:pt-4 min-[2000px]:pt-8 justify-center items-center text-sm sm:text-lg lg:text-3xl min-[2000px]:text-5xl text-[#FFBF00]">
          <NavLink href="#about" label="About" disabled />
          <NavLink href="#faq" label="FAQ" disabled />
          <NavLink href="#schedule" label="Schedule" disabled />
          <NavLink href="#prizes" label="Prizes" disabled />
        </div>
      </nav>
      <div className="bg-landing-top aspect-[905/46] h-[20px] md:h-[80px] z-20 w-full shadow-lg" />
      <div className="flex z-10 w-full max-w-[1200px] h-full">
        <div className="bg-side-border h-full w-[20px] md:w-[80px] z-10" style={{ height: backgroundHeight }} />
        <div id="sunset" className={`${backgroundImages[backgroundImageIndex]} bg-contain bg-no-repeat w-full flex flex-col justify-between items-center pb-1 aspect-[2/3]`}>
          <Image src={sign} alt="TAMUhack HowdyHack 2024" className="-m-1 w-2/3 lg:w-1/2 max-w-[800px]" />
          <div className="flex flex-col justify-center items-center text-center text-[#230606] w-full gap-8 md:gap-12 lg:gap-24">
            <div className="flex flex-col gap-2 sm:gap-8 items-center">
              <div className="flex flex-col sm:gap-3">
                <p className="text-[#1b0000] text-center text-xl sm:text-3xl lg:text-5xl font-bold">September 28-29, 2024</p>
                <p className="text-[#1b0000] text-center text-xl sm:text-3xl lg:text-5xl font-bold">Texas A&M University</p>
              </div>
              <Link href="https://register.tamuhack.com" target="_blank" rel="noopener noreferrer" className="register-button sm:text-2xl lg:text-4xl font-bold py-1 px-2 sm:py-2 sm:px-4 lg:py-4 lg:px-8 rounded-md sm:rounded-lg w-fit">Apply Here</Link>
            </div>
            <div className="flex flex-col w-full items-center relative">
              <Image src={rev} alt="Reveille" className="w-1/2 lg:w-[55%] z-20" />
              <div className="w-1/2 bg-black ellipse absolute bottom-0 sm:mb-1 lg:mb-6 opacity-35 h-8 sm:h-12 lg:h-16" />
            </div>
          </div>
        </div>
        <div className="bg-side-border h-full w-[20px] md:w-[80px] z-10" style={{ height: backgroundHeight }} />
      </div>
      <div className="bg-landing-top aspect-[905/46] h-[20px] md:h-[80px] z-20 w-full shadow-lg" />
      <div className="bg-[#230606] w-full p-8 sm:p-12 lg:p-32 flex justify-center items-center h-72">
        <p className="text-[#d1d1d1] text-center text-xl md:text-4xl">This website is under construction!<br />Check back later for more details &lt;3</p>
      </div>
      <ForegroundStatic />
    </main >
  );
}
