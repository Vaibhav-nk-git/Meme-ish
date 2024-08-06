"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "If",
    },
    {
      text: "you",
    },
    {
      text: "would",
    },
    {
      text: "like",
    },
    {
        text: "to",
      },
    {
      text: "CONNECT",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "or",
      },
    {
        text: "CONTACT ⤵️",
        className: "text-blue-500 dark:text-blue-500",
      },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Lets get to know each other 
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <div>
        <a href="https://www.linkedin.com/in/vaibhav-nk/" target="_blank" rel="noopener" title="LinkedIn">
            <i className="fab fa-linkedin fa-2xl" style={{ color: '#0b8cef' }}></i>
        </a>
        </div>
        <div>
        <a href="https://github.com/Vaibhav-nk-git" target="_blank" rel="noopener" title="GitHub">
            <i className="fa-brands fa-square-github fa-2xl" style={{ color: "#ffffff" }}></i>
        </a>
        </div>

      </div>
    </div>
  );
}
