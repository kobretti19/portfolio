import { FaDownload } from "react-icons/fa";
import Card from "../ui/card";
import Image from "next/image";
import Button from "../ui/button";
import Socials from "../ui/social";
import { signatureImg } from "@/data/index";

export default function ResumeCard() {
  return (
    <Card className="md:h-full">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground ">
        As a dedicated repairman and technician with a specialization in home
        audio systems, I am currently advancing my programming skills at the
        Javascript Programming Academy in Semos Macedonia. With two years of
        focused learning in web technologies like HTML, CSS, JavaScript,
        Node.js, and React, I&apos;ve successfully built several comprehensive
        web applications. I am eager to contribute my creativity, collaboration,
        and technical expertise to your team.🚀🚍
      </p>
      {/* { Signature} */}
      <div>
        <Image src={signatureImg} alt="Petroski Martin" />
      </div>
      {/* { Social and resume btn.} */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* { Socials} */}
        <Socials />
        <Button>
          <FaDownload />
          Resume
        </Button>
      </div>
    </Card>
  );
}
