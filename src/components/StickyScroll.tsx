"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
 
const content = [
  {
    title: "Next.js - The React Framework",
    description: "Next.js is a popular React framework for building server-side rendered (SSR) and statically generated websites and applications.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/media/next2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Aeternity Logo"
        />
      </div>
    ),
  },
  {
    title: "Aeternity UI - Blockchain Platform",
    description: "Aeternity is a decentralized, open-source blockchain platform that enables the creation of scalable, secure, and transparent applications.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/media/aceternity.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Aeternity Logo"
        />
      </div>
    ),
  },
  {
    title: "Me aka Vaibhav : Full Stack Developer",
    description: "I'm Vaibhav, a full stack developer with expertise in MERN (MongoDB, Express, React, Node.js) and Next.js, PostgreSQL, and AWS. I build scalable and efficient web applications.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/media/me.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Aeternity Logo"
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
