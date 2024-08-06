"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
 
export function AnimatedPinDemo() {
  return (
    <div>
    <div className=" mt-20 pt-8 grid grid-cols-1 sm:grid-cols-2 ">
        <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title="/memes.classic"
                href={"/categories/classic"}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Classic Memes
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    Timeless memes that apreads the smell of freshness of good old memories 
                    </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
                <Image src="/media/category/classic.png"
                    width={500}
                    height={300}
                    alt="Classic"/>
                                </div>
                </div>
            </PinContainer>
            </div>


            <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title="/memes.dark"
                href={"/categories/dark"}
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Dark Memes
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    Memes that dwell in the shadows, bringing humor to the darker corners of life                    </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
                <Image src="/media/category/dark.png"
                    width={500}
                    height={300}
                    alt="Dark"/>
                                </div>
                </div>
            </PinContainer>
            </div>
            
            
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title="/memes.adult"
                href={"/categories/adult"}
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Adult memes
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    Uncensored humor for the unapologetic, because adulting is too hard to take seriously                    </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                <Image src="/media/category/adult.png"
                    width={500}
                    height={300}
                    alt="Dark"/>
                </div>
            </PinContainer>
            </div>


            
            <div className="h-[40rem] w-full flex items-center justify-center ">
            <PinContainer
                title="/ui.aceternity.com"
                href={"/categories/developer"}
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    Developer Memes
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                    Memes that speak to the soul of every developer, because coding can be a real joke                    </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                <Image src="/media/category/dev.png"
                    width={500}
                    height={300}
                    alt="Dark"/>
                </div>
            </PinContainer>
            </div>
            
            
        </div>
    </div>
  );
}
