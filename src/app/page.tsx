import Footer from "@/components/Footer";
import { GridBackgroundDemo } from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteCard";
import { HeroScrollDemo } from "@/components/ScrollPlate";

export default function Home() {
  return (
    
    <main>
      <HeroSection/>
      
      
      <GridBackgroundDemo>
      <InfiniteMovingCardsDemo/>
      </GridBackgroundDemo>
      
      <HeroScrollDemo/>
      
      <Footer/>

    </main>
    
  );
}
 