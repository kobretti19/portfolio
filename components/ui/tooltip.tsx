import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FC } from "react";
import Image from "next/image";

interface TooltipProps {
  image: string | StaticImport;
  title: string;
  bgColor?: string;
}

const Tooltip: FC<TooltipProps> = ({ image, title, bgColor }) => {
  return (
    <div
      className={cn(
        "link relative bg-[#2D2C33] w-10 h-10 transform cursor-pointer grid place-items-center",
        "border border-border rounded-xl",
        "hover:scale-110 transition-all duration-200"
      )}
      style={{ background: `${bgColor || "#2D2C33"}` }}
    >
      <div className="w-[27px] h-[27px]">
        <Image
          src={image}
          alt={title}
          className="w-full h-full overflow-clip object-contain"
        />
      </div>
    </div>
  );
};

export default Tooltip;
