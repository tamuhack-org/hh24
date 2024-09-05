import { Bevan, Koulen } from "next/font/google";
import Image from "next/image";

import sign from "../public/sign.png";
import rev from "../public/rev.png";
import logo from "../public/hh24-logo.png";
import genInfoTable from "../public/gen-info-table.png";
import genInfoPapers from "../public/gen-info-papers.png";
import genInfoCandles from "../public/gen-info-candles.png";
import genInfoCoins from "../public/gen-info-coins.png";
import genInfoPrints from "../public/gen-info-prints.png";
import CircleLink from "@/components/CircleLink";
import ForegroundStatic from "@/components/ForegroundStatic";
import { useEffect, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import Link from "next/link";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const koulen = Koulen({ subsets: ["latin"], weight: "400" });
const bevan = Bevan({ subsets: ["latin"], weight: "400" });

const backgroundImages = ['bg-warble1', 'bg-warble2', 'bg-warble3', 'bg-warble4'];

export default function Home() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [sunsetBackgroundHeight, setSunsetBackgroundHeight] = useState(0);
  const [genInfoBackgroundHeight, setGenInfoBackgroundHeight] = useState(0);
  const [genInfoPapersHeight, setGenInfoPapersHeight] = useState(0);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((backgroundImageIndex + 1) % backgroundImages.length);
    }, 200);

    return () => clearInterval(interval);
  }, [backgroundImageIndex]);

  useEffect(() => {
    setSunsetBackgroundHeight(document.getElementById('sunset')?.offsetWidth! * 1.5 || 0);
    setGenInfoBackgroundHeight(document.getElementById('gen-info')?.offsetHeight! || 0);
    setGenInfoPapersHeight(document.getElementById('gen-info-papers')?.offsetHeight! || 0);
  }, [windowWidth]);

  return (
    <main
      className={`${koulen.className} flex flex-col items-center w-full bg-[#1b0000]`}
    >
      {/* <SkyBackground /> */}
      <nav className="bg-[#1b0000] flex flex-col w-full items-center text-[#FFBF00] py-6 min-[2000px]:py-12 gap-4 min-[2000px]:gap-8 z-10">
        <Link href="/">
          <Image src={logo} alt="HowdyHack 2024 Logo" className="w-12 h-12 md:w-24 md:h-24 min-[1600px]:h-30 min-[1600px]:w-30" />
        </Link>
        <div className="lg:h-20 w-full z-10 flex gap-8 md:gap-16 min-[2000px]:gap-32 px-2 pt-2 md:px-4 md:pt-4 min-[2000px]:pt-8 justify-center items-center text-sm sm:text-lg lg:text-3xl min-[2000px]:text-5xl text-[#FFBF00]">
          <CircleLink>
            <Link href="#about" className="px-1 sm:px-4">
              About
            </Link>
          </CircleLink>
          <CircleLink disabled>
            <Link href="#schedule" className="px-1 sm:px-4">
              Schedule
            </Link>
          </CircleLink>
          <CircleLink disabled>
            <Link href="#faq" className="px-1 sm:px-4">
              FAQ
            </Link>
          </CircleLink>
          <CircleLink disabled>
            <Link href="#sponsors" className="px-1 sm:px-4">
              Sponsors
            </Link>
          </CircleLink>
        </div>
      </nav>
      <div className="bg-landing-top aspect-[905/46] h-[20px] md:h-[80px] z-20 w-full shadow-lg" />
      <div className="flex z-10 w-full max-w-[1200px] h-full">
        <div className="bg-side-border h-full w-[20px] md:w-[80px] z-10" style={{ height: sunsetBackgroundHeight }} />
        <div id="sunset" className={`${backgroundImages[backgroundImageIndex]} bg-contain bg-no-repeat w-full flex flex-col justify-between items-center pb-1 aspect-[2/3]`}>
          <Image src={sign} alt="TAMUhack HowdyHack 2024" className="-m-1 w-2/3 lg:w-1/2 max-w-[800px]" />
          <div className="flex flex-col justify-center items-center text-center text-[#230606] w-full gap-8 md:gap-12 lg:gap-24">
            <div className="flex flex-col gap-2 sm:gap-6 lg:gap-8 items-center">
              <div className="flex flex-col sm:gap-3">
                <p className="text-[#1b0000] text-center text-xl sm:text-3xl lg:text-5xl font-bold">September 28-29, 2024</p>
                <p className="text-[#1b0000] text-center text-xl sm:text-3xl lg:text-5xl font-bold">Texas A&M University</p>
              </div>
              <div className="flex gap-4 w-full">
                <Link href="https://register.tamuhack.com" target="_blank" rel="noopener noreferrer" className="register-button w-1/2 sm:text-2xl lg:text-4xl font-bold py-1 px-2 sm:py-2 sm:px-4 lg:py-4 lg:px-8 rounded-md sm:rounded-lg">Apply</Link>
                <Link href="https://tamuhack.org/mentor" target="_blank" rel="noopener noreferrer" className="register-button w-1/2 sm:text-2xl lg:text-4xl font-bold py-1 px-2 sm:py-2 sm:px-4 lg:py-4 lg:px-8 rounded-md sm:rounded-lg">Mentor</Link>
              </div>
            </div>
            <div className="flex flex-col w-full items-center relative">
              <Image src={rev} alt="Reveille" className="w-1/2 lg:w-[55%] z-20" />
              <div className="w-1/2 bg-black ellipse absolute bottom-0 sm:mb-1 lg:mb-6 opacity-35 h-8 sm:h-12 lg:h-16" />
            </div>
          </div>
        </div>
        <div className="bg-side-border h-full w-[20px] md:w-[80px] z-10" style={{ height: sunsetBackgroundHeight }} />
      </div>
      <div className="bg-landing-top aspect-[905/46] h-[20px] md:h-[80px] z-20 w-full shadow-lg" />
      <div id="about" className="flex z-10 w-full max-w-[1200px] h-full">
        <div className="bg-side-border bg-repeat w-[20px] md:w-[80px] z-10" style={{ height: genInfoBackgroundHeight }} />
        <div id="gen-info" className="flex flex-col bg-gen-info bg-contain aspect-[2160/2683] w-full h-fit py-2 sm:py-4 lg:py-12">
          <div className="flex flex-col w-full items-center p-4 sm:p-8 lg:p-16 gap-4 md:gap-12 max-w-[1200px]">
            <h2 className={`${bevan.className} text-3xl sm:text-6xl lg:text-8xl text-[#F7BE41] text-center`}>
              HOWDY Y&apos;ALL!
            </h2>
            <p className="text-white text-center text-sm sm:text-xl lg:text-2xl">
              HowdyHack is a 24-hour, themed, beginner focused hackathon exclusively for Texas A&M students, designed to showcase TAMU&apos;s diverse range of innovative ideas in a collaborative environment. At the event, you&apos;ll have the opportunity to create your own software and hardware products with up to 4 team members that wow judges and win prizes. Go gig &apos;em!
            </p>
          </div>
          <div className="relative w-full h-full">
            <Image src={genInfoTable} alt="HowdyHack 2024 General Information Table" className="absolute left-0 top-0 w-full" />
            <div className="flex flex-col relative left-[2%] top-[12%] w-[60%]" style={{ height: genInfoPapersHeight }}>
              <Image id="gen-info-papers" src={genInfoPapers} alt="HowdyHack 2024 General Information Papers" className="absolute top-0 left-0" style={{ filter: 'drop-shadow(5px 5px 2px #000)' }} />
              <h3 className={`${bevan.className} rotate-[4deg] absolute left-[47%] top-[20%] w-[50%] text-sm sm:text-2xl md:text-3xl lg:text-5xl text-[#1b0000] text-center`}>WHERE?</h3>
              <div className="rotate-[4deg] absolute left-[35%] top-[35%] w-[48%] flex flex-col items-center gap-1 sm:gap-2 lg:gap-8">
                <p className="text-base sm:text-xl md:text-3xl lg:text-4xl text-[#1b0000] text-center" >
                  MSC 2400
                </p>
                <p className="text-xs sm:text-base md:text-lg lg:text-3xl text-[#1b0000] text-center" >
                  730 Olsen Blvd, College Station, TX 77845
                </p>
                <FaArrowDown className="text-[#1b0000] text-sm sm:text-base md:text-xl lg:text-4xl -mb-1 sm:-mb-3 lg:-mb-6" />
                <div className="nav-link text-center w-fit p-1 sm:p-3">
                  <Link href="/msc-map.png" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-base md:text-lg lg:text-3xl text-[#1b0000] text-center" >
                    Building Map
                  </Link>
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />
                  </svg>
                </div>
              </div>
            </div>
            <Image src={genInfoCandles} alt="HowdyHack 2024 General Information Candles" className="absolute right-0 top-2 w-1/3" style={{ filter: 'drop-shadow(5px 1px 2px #000)' }} />
            <Image src={genInfoCoins} alt="HowdyHack 2024 General Information Coins" className="absolute left-[4%] top-[8%] w-[10%]" style={{ filter: 'drop-shadow(5px 5px 2px #000)' }} />
            <Image src={genInfoPrints} alt="HowdyHack 2024 General Information Prints" className="absolute right-2 bottom-[40%] w-1/5" />
          </div>
          <div className="flex flex-col gap-16 md:gap-12 lg:gap-4 w-full">
            <div className="flex flex-col w-full items-center p-4 sm:p-8 lg:p-16 gap-4 md:gap-8 max-w-[1200px] -mt-14 md:-mt-28">
              <h3 className={`${bevan.className} text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#F7BE41] text-center`}>
                HOW TO PARTICIPATE
              </h3>
              <p className="text-white text-center text-sm sm:text-xl lg:text-2xl">
                To get started, click the apply button above! Sign up as soon as possible to secure your spot! For sign up to be a mentor, click the mentor button next to the apply button.
                <br />
                <br />
                After you sign up, you will receive a confirmation email letting you know you&apos;re good to go. You can either form a team yourself, or you find one during the team building portion right before the competition! This phase is designed for forming well-rounded teams that bring together diverse strengths and perspectives.

                <br />
                <br />
                <span className="text-xs sm:text-lg lg:text-xl italic">
                  Applications are considered on a rolling basis; an application being accepted does not guarantee a spot in the hackathon. We have a limited space at the MSC, so we kindly ask you to arrive early on the day of the hackathon.
                </span>
              </p>
            </div>
            <div className="flex flex-col w-full items-center p-4 sm:p-8 lg:p-16 gap-4 md:gap-8 max-w-[1200px] -mt-14">
              <h3 className={`${bevan.className} text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#F7BE41] text-center`}>
                PARKING
              </h3>
              <p className="text-white text-center text-sm sm:text-xl lg:text-2xl">
                Parking will be available at&nbsp;
                <CircleLink>
                  <Link href="https://maps.app.goo.gl/ceQELiAUQKdrBqqc6" target="_blank" rel="noopener noreferrer" className="text-[#F7BE41]">
                    Lot 100t
                  </Link>
                </CircleLink>,&nbsp;
                <CircleLink>
                  <Link href="https://maps.app.goo.gl/9LnkaYUdw7PFyR5o6" target="_blank" rel="noopener noreferrer" className="text-[#F7BE41]">
                    Lot 74
                  </Link>
                </CircleLink> and <CircleLink>
                  <Link href="https://maps.app.goo.gl/cpA6zPJW3i6d3VtP7" target="_blank" rel="noopener noreferrer" className="text-[#F7BE41]">
                    Lot 97
                  </Link>
                </CircleLink>. These lots are available for free parking during the event, no permit required. Please note that you cannot park in numbered spots, timed parking spaces, or university business or service spaces.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-side-border w-[20px] md:w-[80px] z-10" style={{ height: genInfoBackgroundHeight }} />
      </div>
      <div className="bg-landing-top aspect-[905/46] h-[20px] md:h-[80px] z-20 w-full shadow-lg" />
      <div id="about" className="flex z-10 w-full max-w-[1200px] h-full">
        <div className="bg-side-border bg-repeat w-[20px] md:w-[80px] z-10 h-72" />
        <div className="bg-[#1b0000] w-full p-8 sm:p-12 lg:p-32 flex justify-center items-center h-72">
          <p className="text-white text-center text-xl md:text-4xl">This website is under construction!<br />Check back later for more details &lt;3</p>
        </div>
        <div className="bg-side-border w-[20px] md:w-[80px] z-10 h-72" />
      </div>
      <ForegroundStatic />
    </main >
  );
}
