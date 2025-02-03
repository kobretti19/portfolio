import Image from "next/image";
import Card from "../ui/card";
import { laptopImg } from "../../data/index";
import { cn } from "@/lib/utils";

export default function MeCard() {
  return (
    <Card className="2xl:h-full">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        {/* { Background Img} */}
        <Image
          src={laptopImg}
          alt="Petroski Martin"
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
        />
        {/* { Tags} */}
        <div className="absolute top-[65%] space-y-2">
          <Tag
            text="Hello universe 👋"
            className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="I`m PETROSKI MARTIN"
            className=" rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="Full stack developer"
            className=" rounded-tl-2xl rounded-tr-2xl  rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="Professional service technician"
            className=" rounded-tl-2xl rounded-tr-2xl  rounded-br-2xl rounded-bl-2xl"
          />
        </div>
      </div>
    </Card>
  );
}

const Tag = ({ text, className }: { className: string; text: string }) => {
  return (
    <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3", className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
};
