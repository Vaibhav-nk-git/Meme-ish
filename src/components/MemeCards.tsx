import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface ThreeDCardDemoProps {
  imageSrc: string;
  imageHeight: number;
  imageWidth: number;
  imageAlt: string;
}

const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({
  imageSrc,
  imageHeight,
  imageWidth,
  imageAlt,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Hover on this card
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Damn yea its 3D
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageSrc}
            height={imageHeight}
            width={imageWidth}
            className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={imageAlt}
          />
        </CardItem>
       
          
        
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;