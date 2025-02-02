import FancyButton from "@/components/ui/fancy-button";
import Profile from "@/components/ui/profile";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text="Let`s talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
    </div>
  );
};

export default Header;
