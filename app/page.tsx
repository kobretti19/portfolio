"use client";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import { MdHomeFilled } from "react-icons/md";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import Profile from "@/components/ui/profile";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import ScrollDown from "@/components/ui/scroll-down";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="Ui Components">
              <div className="grid grid-cols-4">
                <Button>Basic button</Button>
                <Button>
                  <MdHomeFilled /> Basic Button
                </Button>
                <Button isIcon>
                  <FaUser />
                </Button>
                <Button link="https://www.google.com">Google</Button>
              </div>
              <Input type="text" placeholder="Full name" />
              <Input type="text" placeholder="Full name" icon={<FaUser />} />
              <TextArea placeholder="Full name" icon={<FaUser />} />
              <Profile />
              <MagneticWrapper className="w-[350px]">
                <FancyButton text="Let`s talk" icon={<FaArrowRight />} />
              </MagneticWrapper>
              <MagneticWrapper className="absolute">
                <ScrollDown />
              </MagneticWrapper>
              <LiveClock timeZone="Europe/Zurich" />
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
