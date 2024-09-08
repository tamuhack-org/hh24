import { Bevan, Koulen } from "next/font/google";
import Image from "next/image";

import sign from "../public/assets/landing/sign.png";
import rev from "../public/assets/landing/rev.png";
import logo from "../public/assets/landing/hh24-logo.png";
import genInfoTable from "../public/assets/gen-info/table.png";
import genInfoPapers from "../public/assets/gen-info/papers.png";
import genInfoCandles from "../public/assets/gen-info/candles.png";
import genInfoCoins from "../public/assets/gen-info/coins.png";
import genInfoPrints from "../public/assets/gen-info/prints.png";
import scheduleTitle from "../public/assets/schedule/title.png";
import lanterns from "../public/assets/schedule/lanterns.png";
import postersLeft from "../public/assets/schedule/posters-left.png";
import postersRight from "../public/assets/schedule/posters-right.png";
import table from "../public/assets/schedule/table.png";
import chairs from "../public/assets/schedule/chairs.png";
import camera from '../public/assets/prizes/camera.png';
import drone from '../public/assets/prizes/drone.png';
import echo from '../public/assets/prizes/echo.png';
import miniProjector from '../public/assets/prizes/mini-projector.png';
import revPlush from '../public/assets/prizes/rev-plush.png';
import monitor from '../public/assets/prizes/monitor.png';
import CircleLink from "@/components/CircleLink";
import ForegroundStatic from "@/components/ForegroundStatic";
import { useEffect, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { resources, socials, workshops } from "@/data/constants";
import Dartboard from "@/components/Dartboard";

const koulen = Koulen({ subsets: ["latin"], weight: "400" });
const bevan = Bevan({ subsets: ["latin"], weight: "400" });

const backgroundImages = ['bg-warble1', 'bg-warble2', 'bg-warble3', 'bg-warble4'];
const prizes = [
  {
    image: camera,
    name: 'Film Camera',
    prizeType: 'Best UI/UX',
  },
  {
    image: revPlush,
    name: 'Reveille Plush',
    prizeType: 'Best Aggie Hack',
  },
  {
    image: drone,
    name: 'Drone with Camera',
    prizeType: 'Second Overall',
  },
  {
    image: echo,
    name: 'Amazon Echo Pop',
    prizeType: 'Third Overall',
  },
  {
    image: miniProjector,
    name: 'Mini Projector',
    prizeType: 'Best Wild West Hack',
  },
  {
    image: monitor,
    name: '24" 165Hz Gaming Monitor',
    prizeType: 'First Overall',
  },
];

interface ScheduleItem {
  date: Date;
  description: string;
  event_name: string;
  id: string;
};

export default function Home() {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [sunsetBackgroundHeight, setSunsetBackgroundHeight] = useState(0);
  const [genInfoBackgroundHeight, setGenInfoBackgroundHeight] = useState(0);
  const [genInfoPapersHeight, setGenInfoPapersHeight] = useState(0);
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>();
  const [mouseOverIndex, setMouseOverIndex] = useState(-1);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((backgroundImageIndex + 1) % backgroundImages.length);
    }, 200);

    return () => clearInterval(interval);
  }, [backgroundImageIndex]);

  useEffect(() => {
    const fetchSchedule = async () => {
      const fetchResult = await fetch('https://hum-console.vercel.app/api/hh24').then((res) => res.json());
      setScheduleItems(fetchResult.Items);
    }
    fetchSchedule();
  }, []);

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
          <Image src={logo} alt="HowdyHack 2024 Logo" className="w-12 h-12 md:w-24 md:h-24 min-[1600px]:h-30 min-[1600px]:w-30 hover:animate-spin transition-all" />
        </Link>
        <div className="lg:h-20 w-full z-10 flex gap-8 md:gap-16 min-[2000px]:gap-32 px-2 pt-2 md:px-4 md:pt-4 min-[2000px]:pt-8 justify-center items-center text-sm sm:text-lg lg:text-3xl min-[2000px]:text-5xl text-[#FFBF00]">
          <CircleLink>
            <Link href="#about" className="px-1 sm:px-4">
              About
            </Link>
          </CircleLink>
          <CircleLink>
            <Link href="#schedule" className="px-1 sm:px-4">
              Schedule
            </Link>
          </CircleLink>
          <CircleLink>
            <Link href="#prizes" className="px-1 sm:px-4">
              Prizes
            </Link>
          </CircleLink>
          <CircleLink disabled>
            <Link href="#faq" className="px-1 sm:px-4">
              FAQ
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
      <div id="schedule" className="flex z-10 w-full max-w-[1200px] h-full">
        <div className="bg-side-border bg-repeat w-[20px] md:w-[80px] z-10" />
        <div className="bg-schedule w-full flex-col flex items-center relative">
          <Image src={scheduleTitle} alt="Schedule" className="w-full -mt-1" />
          <Image src={lanterns} alt="Lanterns" className="w-full -mt-16 sm:-mt-24 lg:-mt-48 z-20 pointer-events-none" />
          <div className="flex w-full justify-between -mt-[32%] lg:-mt-[34%] mb-4 sm:mb-8 lg:mb-12">
            <div className="hidden lg:flex h-full items-center w-[10%]">
              <Image src={postersLeft} alt="Posters" />
            </div>
            <div className="bg-blackboard aspect-[1954/4473] bg-cover bg-no-repeat w-full lg:w-[80%] h-fit text-[rgba(255,255,255,0.5)] text-xs sm:text-lg md:text-xl min-[1160px]:text-2xl px-[9%] pt-[28%] sm:pt-[28%] md:pt-[25%] lg:pt-[22%] pb-[5%] sm:pb-[20%] flex flex-col gap-3 sm:gap-4 md:gap-8 lg:gap-12">
              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-6 w-full">
                <h3 className="w-full text-center text-lg sm:text-2xl lg:text-4xl">Saturday</h3>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3 min-[1160px]:gap-4">
                  {scheduleItems?.filter((item) => {
                    const temp = new Date(item.date);
                    return temp.getDay() === 6;
                  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((item) => (
                    <div key={item.id} className="flex justify-between gap-2">
                      <p className="text-left w-fit">{new Date(item.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                      <p className=" text-right">{item.event_name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-6 w-full">
                <h3 className="w-full text-center text-lg sm:text-2xl lg:text-4xl">Sunday</h3>
                <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3 min-[1160px]:gap-4">
                  {scheduleItems?.filter((item) => {
                    const temp = new Date(item.date);
                    return temp.getDay() === 0;
                  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((item) => (
                    <div key={item.id} className="flex justify-between gap-2">
                      <p className="text-left w-fit">{new Date(item.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                      <p className=" text-right">{item.event_name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:flex h-full items-center w-[10%]">
              <Image src={postersRight} alt="Posters" className="" />
            </div>
          </div>
          <Image src={table} alt="Table" className="w-full -mb-1" />
          <Image src={chairs} alt="Chairs" className="absolute bottom-0 w-4/5" />
        </div>
        <div className="bg-side-border w-[20px] md:w-[80px] z-10" />
      </div>
      <div className="bg-landing-top aspect-[905/46] h-[20px] md:h-[80px] z-20 w-full shadow-lg" />
      <div id="prizes" className="flex z-10 w-full max-w-[1200px] h-full">
        <div className="bg-side-border w-[20px] md:w-[80px] z-10" />
        <div className="bg-prizes bg-cover w-full flex-col flex items-center relative gap-4 px-4 md:px-8 py-8 md:py-16">
          <div className="bg-prizes-title bg-cover aspect-[2007/635] bg-no-repeat flex w-fit justify-center items-center px-[4%] pt-[7%] pb-[3%]">
            <h2 className={`${bevan.className} text-3xl sm:text-6xl lg:text-6xl text-[#ba917c] text-center`}>PRIZES</h2>
          </div>
          <div className="flex w-full items-center gap-4">
            <div className="bg-dartboard-wood aspect-square bg-cover bg-no-repeat w-1/2 h-fit hidden lg:flex flex-col justify-center items-center p-6 lg:p-16" style={{ filter: 'drop-shadow(3px 3px 5px #2F0800)' }}>
              <div className="w-full bg-[#040000] rounded-full aspect-square flex flex-col justify-center items-center pr-1" style={{ filter: 'drop-shadow(5px 7px 0 #2F0800)' }}>
                <Dartboard mouseOverIndex={mouseOverIndex} setMouseOverIndex={setMouseOverIndex} />
              </div>
            </div>
            <div className="chalkboard bg-chalkboard-empty text-[rgba(255,255,255,0.5)] aspect-[1722/2304] bg-cover bg-no-repeat w-full lg:w-1/2 h-full py-[5.5%] px-[10%] hidden lg:flex items-center justify-center" style={{ filter: 'drop-shadow(3px 3px 5px #2F0800)' }}>
              {mouseOverIndex === -1 ?
                <h4 className="text-center sm:text-xl md:text-2xl lg:text-3xl">Hover over the dartboard to see the prizes!</h4> :
                <div className="flex flex-col w-full items-center justify-center gap-8">
                  <Image src={prizes[mouseOverIndex].image} alt={prizes[mouseOverIndex].name} className="w-4/5" />
                  <div className="flex flex-col h-1/2 w-full justify-center gap-2">
                    <p className="text-center sm:text-xl md:text-2xl lg:text-3xl">{prizes[mouseOverIndex].name}</p>
                    <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">{prizes[mouseOverIndex].prizeType}</p>
                  </div>
                </div>
              }
            </div>
            <div className="chalkboard bg-chalkboard aspect-[1722/2304] bg-no-repeat bg-cover py-[10%] px-[15%] w-full flex flex-col lg:hidden gap-[8%] md:gap-[9%] text-[rgba(255,255,255,0.5)]">
              <h4 className="text-center text-[clamp(1rem,5vw,10rem)]">Prizes</h4>
              <div className="flex flex-col w-full gap-2 min-[520px]:gap-3">
                {prizes.map((prize, index) => (
                  <div key={index} className="flex flex-row items-center h-full gap-[8%]">
                    <div className="w-[55%] flex flex-col gap-1">
                      <p className="text-center text-[10px] min-[510px]:text-base md:text-lg">{prize.name}</p>
                      <p className="text-center text-[8px] min-[510px]:text-sm md:text-base">{prize.prizeType}</p>
                    </div>
                    <div className="w-[45%] flex justify-center">
                      <Image src={prize.image} alt={prize.name} className="w-1/2 sm:w-[60%]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-side-border w-[20px] md:w-[80px] z-10" />
      </div>
      <div className="bg-landing-top aspect-[905/46] h-[20px] md:h-[80px] z-20 w-full shadow-lg" />
      <div id="construction" className="flex z-10 w-full max-w-[1200px] h-full">
        <div className="bg-side-border w-[20px] md:w-[80px] z-10 h-72" />
        <div className="bg-[#1b0000] w-full p-8 sm:p-12 lg:p-32 flex justify-center items-center h-72">
          <p className="text-white text-center text-xl md:text-4xl">The FAQ section is under construction!<br />Check back later for more details 🤠</p>
        </div>
        <div className="bg-side-border w-[20px] md:w-[80px] z-10 h-72" />
      </div>
      <div className="bg-landing-top aspect-[905/46] h-[20px] md:h-[80px] z-20 w-full shadow-lg" />
      <div className="w-full max-w-[1200px] h-full">
        <div className="lg:flex lg:justify-between items-center px-8 lg:px-16 pt-8 lg:pt-16 text-[#FFBF00]">
          <div className="lg:text-start text-center">
            <p className="mb-0 text-2xl font-bold">Sign up to our newsletter</p>
            <p>Stay connected! Sign up for our mailing list for events, updates, and more.</p>
          </div>
          <form
            action="https://tamuhack.us9.list-manage.com/subscribe/post?u=ba74e26a78411ab40af6384c5&amp;id=2f4969eb6d"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate
            className="flex flex-col lg:flex-row items-center lg:items-stretch justify-start gap-2"
          >
            <div className="w-full lg:flex-none flex flex-row max-[320px]:flex-col max-[320px]:justify-stretch justify-center items-stretch gap-3 lg:gap-5 py-4">
              <label htmlFor="mce-EMAIL" className="hidden">Email Address</label>
              <input
                type="text"
                name="EMAIL"
                placeholder="Enter your email address"
                className="2xl:w-96 w-64 px-4 py-2 rounded-lg bg-[rgba(217,217,217,0.09)] border dark:placeholder:text-[rgba(255,191,0,0.6)]"
                id="mce-EMAIL"
              />
              <button className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="h-full px-4 py-2 rounded-lg transition-colors duration-200 border text-base font-bold cursor-pointer hover:bg-[#FFBF00] hover:text-[#1b0000]"
                />
              </button>
            </div>
            <div aria-hidden="true" className="absolute -left-[5000px]">
              <input
                type="text"
                name="b_43a795784ca963e25903a0da6_9937fe4fc5"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
          </form>
        </div>
        <div className="lg:flex justify-between px-8 lg:px-16 py-8 lg:py-16 text-[#FFBF00] dark:text-pale-yellow bg-light-theme-yellow dark:bg-dark-purple">
          <div className="md:w-full lg:w-1/3">
            <p className={`${bevan.className} font-black text-3xl mb-8`}>HowdyHack 2024</p>
            <p className="font-medium text-xl mb-8">Website brought to you by the TAMUhack Creative + Technology Teams</p>
          </div>
          <div className="flex flex-wrap justify-start lg:justify-end flex-grow gap-12">
            {/* UNCOMMENT WHEN EVENT STARTS */}
            {/* <div>
              <p className="text-base mb-2">Hacker Resources</p>
              <div className="flex flex-col gap-1 mb-2">
                {resources.map((resource) =>
                <CircleLink>
                  <Link href={resource.link} target="_blank" rel="noreferrer noopener" className="font-semibold text-lg hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow transition-text-shadow duration-200" key={resource.name}>
                    {resource.name}
                  </Link>
                </CircleLink>
                  )}
              </div>
            </div> */}
            {/* COMMENT WHEN EVENT STARTS */}
            <div className="opacity-50 cursor-not-allowed select-none">
              <p className="text-base mb-2 cursor-not-allowed">Hacker Resources</p>
              <div className="flex flex-col gap-1 mb-2">
                {resources.map((resource) =>
                  <label className="font-semibold text-lg cursor-not-allowed" key={resource.name}>
                    {resource.name}
                  </label>)}
              </div>
            </div>
            <div>
              <p className="text-base mb-2">Socials</p>
              <div className="flex flex-col gap-1 mb-2">
                {socials.map(social =>
                  <CircleLink key={social.name}>
                    <Link href={social.link} target="_blank" rel="noreferrer noopener" className="font-semibold text-lg" key={social.name}>
                      {social.name}
                    </Link>
                  </CircleLink>
                )}
              </div>
            </div>
            <div>
              <p className="text-base mb-2">Workshops</p>
              <div className="flex flex-col gap-1 mb-2">
                {workshops.map(workshop =>
                  <CircleLink key={workshop.name}>
                    <Link href={workshop.link} target="_blank" rel="noreferrer noopener" className="font-semibold text-lg" key={workshop.name}>
                      {workshop.name}
                    </Link>
                  </CircleLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForegroundStatic />
    </main >
  );
}
