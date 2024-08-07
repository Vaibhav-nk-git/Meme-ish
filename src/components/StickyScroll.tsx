"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
 
const content = [
  {
    title: "Next.js: The Magic Behind Your Favorite Websites",
    description: "Think of Next.js as the superhero cape for your React applications. It whips up blazing fast websites with server-side rendering and static site generation. Trust me, your users will thank you.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/media/next2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Next.js logo"
        />
      </div>
    ),
  },
  {
    title: "Aceternity UI: Your UI Superhero Toolkit",
    description: "Aceternity UI is like having a toolbox filled with superpowered UI components. Build stunning and interactive web interfaces with ease. It's your secret weapon for creating amazing user experiences.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/media/aeternity.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Aeternity UI logo"
        />
      </div>
    ),
  },
  {
    title: "Vaibhav: Your Friendly Neighborhood Full Stack Wizard",
    description: "I'm Vaibhav, a full stack developer who turns code into magic. I wield the powers of MERN, Next.js, PostgreSQL, and AWS to create awesome web experiences. Let's build something amazing together!",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/media/me.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Vaibhav's profile picture"
        />
      </div>
    ),
  },
];

  
export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
