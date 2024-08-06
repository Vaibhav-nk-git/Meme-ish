"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
 
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden py-2 ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleashing Meme through<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
               Dummy Scroll Animation
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/media/meme2.jpg"
          alt="hero"
          height={1720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}