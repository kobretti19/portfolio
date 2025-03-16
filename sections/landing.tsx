import Header from "@/components/navigation/header/header";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import ScrollDown from "@/components/ui/scroll-down";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import { FaArrowRight } from "react-icons/fa";

const LandingSection = () => {
  return (
    <div className="relative h-screen overflow-hidden px-4 sm:px-8">
      {/* Header */}
      <Header />

      {/* Magnetic fancy button (hidden on larger screens) */}
      <div className="absolute bottom-20 left-5 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Let’s talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>

      {/* Live Clock */}
      <div className="absolute right-5 bottom-5 sm:right-10 sm:bottom-10">
        <LiveClock timeZone="Europe/Zurich" />
      </div>

      {/* Slogan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 leading-[12vw] sm:leading-[10vw] lg:leading-[8vw] font-medium tracking-[-0.2rem] text-center w-full px-2">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[16vw] sm:text-[12vw] lg:text-[10rem] uppercase">
          <div>
            <span>Code</span>
          </div>
          <div>
            <span>Crafting</span>
          </div>
          <div className="relative">
            <span>Brilliance</span>
            <div className="text-[3vw] sm:text-[1.5vw] lg:text-[1rem] leading-[1.2rem] sm:leading-[1.4rem] tracking-[-0.05rem] absolute top-[12vw] sm:top-[10vw] lg:top-[8rem] left-0 sm:left-[30%] w-[80%] sm:w-[40rem] uppercase font-normal">
              <span>Empowering innovation</span>
              <br />
              <span>through inspired design</span>
              <br />
              <span>where challenges spark creativity</span>
              <br />
              <span>and solutions redefine possibilities.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Magnetic scroll down */}
      <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-12 sm:bottom-8 md:bottom-4">
        <ScrollDown />
      </MagneticWrapper>
    </div>
  );
};

export default LandingSection;
