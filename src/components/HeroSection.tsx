"use client";
import Link from 'next/link'
import React from 'react'
import { AuroraBackground } from './ui/aurora-background'
import { Button } from './ui/moving-border'
import { TextGenerateEffectDemo } from './HeroReveal';

export default function HeroSection() {
  return (
    <>
    <AuroraBackground>
    <div className='h-auto md:h-[40rem] w-full  rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-2 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>The Hall of Memes</h1>
        <TextGenerateEffectDemo />
        <div className='mt-9'>
         <Button  borderRadius="1.5rem"
        className=" bg-black text-white border-neutral-200 ">
           <Link href={"/categories"} className='text-white' >Explore Memes</Link></Button>
        </div>
      </div>
    </div>
    </AuroraBackground>
    </>
  )
}
