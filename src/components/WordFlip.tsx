import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";

export function FlipWordsDemo() {
  const words = ["Vaibhav", "FullStack-Dev", "Young", "Ready To Take On Challenges"];

  return (
    <div>
      
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Hi I am
        <FlipWords words={words} /> <br />
        I build websites with MERN stack<div>
            also Next.js, PostgreSql, AWS.</div> 
      </div>
    </div>
    </div>
  );
}
