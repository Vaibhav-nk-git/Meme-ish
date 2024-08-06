"use client";
 
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
 
export function InfiniteMovingCardsDemo() {
  return (
    <div>

    <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <div className="text-4xl sm:text-6xl pb-9 mb-5 font-md text-white">Testimonials is a joke
      <p className="text-white text-sm flex justify-end pt-3">literally</p>
      <p className="text-white text-sm flex justify-center pt-4 text-xl"> ✬ Featuring the classic Shankaran Pillai jokes ✬</p>


      </div>
      <InfiniteMovingCards
        items={shankaranPillaiJokes}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  );
}
 
const shankaranPillaiJokes = [
  {
  quote: "Why did Shankaran Pillai bring a ladder to the party? He heard the drinks were on the house!",
  name: "Shankaran Pillai",
  title: "Pillai's Punchlines",
  },
  {
  quote: "Shankaran Pillai was asked, 'What's the difference between a coconut tree and a wife?' He replied, 'One gives you a hard shell and a soft inside, and the other... well, same thing!'",
  name: "Shankaran Pillai",
  title: "Kerala Komics",
  },
  {
  quote: "Why did Shankaran Pillai get kicked out of the library? He kept using the books as weights to exercise!",
  name: "Shankaran Pillai",
  title: "Pillai's Pranks",
  },
  {
  quote: "Shankaran Pillai went to the doctor and said, 'Doc, I've got a problem. I've been feeling like a chicken lately.' The doctor asked, 'Did you have any fowl dreams?' Pillai replied, 'No, but I did have some egg-xistential crises!'",
  name: "Shankaran Pillai",
  title: "Fowl Play",
  },
  {
  quote: "Why did Shankaran Pillai bring a magnet to the bar? He wanted to attract some attention!",
  name: "Shankaran Pillai",
  title: "Pillai's Puns",
  },
  {
  quote: "Shankaran Pillai was asked, 'What's the secret to a happy marriage?' He replied, 'I don't know, but I think it involves a lot of rice and a strong rope!'",
  name: "Shankaran Pillai",
  title: "Pillai's Wisdom",
  },
  {
  quote: "Why did Shankaran Pillai become a baker? He kneaded the dough!",
  name: "Shankaran Pillai",
  title: "Pillai's Pastries",
  },
  {
  quote: "Shankaran Pillai went to the gym and saw a sign that said, 'Please do not drop weights.' He thought, 'That's okay, I'm not here to drop weights... I'm here to drop my ego!'",
  name: "Shankaran Pillai",
  title: "Fitness Funnies",
  },
  {
  quote: "Why did Shankaran Pillai bring a compass to the party? He wanted to navigate the social scene!",
  name: "Shankaran Pillai",
  title: "Pillai's Punchlines",
  },
  {
  quote: "Shankaran Pillai was asked, 'What's the difference between a coconut and a politician?' He replied, 'One is a hard shell with a soft inside, and the other... well, same thing, but with more promises!'",
  name: "Shankaran Pillai",
  title: "Pillai's Politics",
  },
  ];