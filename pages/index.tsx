import { Koulen } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import sign from "../public/sign.png";
import rev from "../public/rev.png";

const koulen = Koulen({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main
      className={`${koulen.className} flex flex-col w-full bg-[#230606] text-[#FFBF00]`}
    >
      <nav className="flex w-full gap-8 md:gap-16 justify-center p-4 md:p-8 text-sm sm:text-lg lg:text-3xl">
        <Link href="#info">Info</Link>
        <Link href="#faq">FAQ</Link>
        <Link href="#schedule">Schedule</Link>
        <Link href="#prizes">Prizes</Link>
      </nav>
      <div className="bg-landing bg-cover bg-center aspect-[905/1408] w-full flex flex-col items-center justify-between pb-2">
        <Image src={sign} alt="HowdyHack 2024" />
        <Image src={rev} alt="Reveille" className="w-2/3 sm:w-[480px] lg:w-[535px]" />
      </div>
    </main>
  );
}
