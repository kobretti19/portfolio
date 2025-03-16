import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FC, useState } from "react";
import Image from "next/image";

interface TooltipProps {
  image: string | StaticImport;
  title: string;
  bgColor?: string;
}

const Tooltip: FC<TooltipProps> = ({ image, title, bgColor }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "link relative bg-[#2D2C33] w-10 h-10 transform cursor-pointer grid place-items-center",
        "border border-border rounded-xl",
        "hover:scale-110 transition-all duration-200"
      )}
      style={{ background: `${bgColor || "#2D2C33"}` }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="w-[27px] h-[27px]">
        <Image
          src={image}
          alt={title}
          className="w-full h-full overflow-clip object-contain"
        />
        {/* {Title } */}
        {active ? (
          <div className="absolute -top-6 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200 ">
            <p className="font-pixel text-[10px] whitespace-nowrap">{title}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tooltip;
