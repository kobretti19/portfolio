import React, { useState } from "react";
import { featuredData } from "@/data";
import FeaturedCard from "../cards/featured/featured-card";
import { cn } from "@/lib/utils";

const ExpandableFeatured = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log("the hovered card is ", hoveredIndex);
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {featuredData.slice(1).map((featured, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[540px] lg:w-1/3 transition-all origin-center duration-300 easy-in-out ",
            i === hoveredIndex ? "lg:w-[40%]" : "lg:w-[33.33%]"
          )}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <FeaturedCard
            active={i === hoveredIndex}
            title={featured.title}
            tag={featured.tag}
            video={featured.video}
          />
        </div>
      ))}
    </div>
  );
};

export default ExpandableFeatured;
