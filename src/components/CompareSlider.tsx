import React from "react";
import { Compare } from "@/components/ui/compare";

interface CompareDemoProps {
    firstImage: string;
    secondImage: string;
  }

  const CompareDemo: React.FC<CompareDemoProps> = ({
    firstImage,
    secondImage,
  }) => {
    return (
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
        <Compare
          firstImage={firstImage}
          secondImage={secondImage}
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
        />
      </div>
    );
  };
  
  export default CompareDemo;
