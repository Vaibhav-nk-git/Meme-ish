"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Warning : These memes may trigger your existential crisis. Prolonged exposure may lead to introspection, self-doubt, or a newfound sense of humor
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
