import React, { useState } from 'react';
import { projectFinishedGalleryImages } from '@/data/featured';
import FeaturedCard from '../cards/featured/featured-card';
import { cn } from '@/lib/utils';

const ExpandableFeatured = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className='w-full grid lg:flex lg:justify-between lg:gap-x-4 gap-y-28'>
      {projectFinishedGalleryImages.map((featured, i) => (
        <div
          key={i}
          className={cn(
            'relative h-[540px] lg:w-1/3 transition-all origin-center duration-300 ease-in-out',
            i === hoveredIndex ? 'lg:w-[40%]' : 'lg:w-[33.33%]'
          )}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <FeaturedCard
            title={featured.title}
            tag={featured.tag}
            images={featured.images} // pass array of images
          />
        </div>
      ))}
    </div>
  );
};

export default ExpandableFeatured;
