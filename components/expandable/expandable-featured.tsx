import React, { useState } from 'react';
import { projectFinishedGalleryImages } from '@/data/featured';
import FeaturedCard from '../cards/featured/featured-card';
import { cn } from '@/lib/utils';

const ExpandableFeatured = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = (index: number) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setModalImages(projectFinishedGalleryImages[index].images);
    setCurrentImageIndex(0);
  };

  const closeModal = () => setModalImages(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!modalImages) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!modalImages) return;
    setCurrentImageIndex((prev) =>
      prev === modalImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className='w-full grid gap-y-8 lg:flex lg:justify-between lg:gap-x-4'>
        {projectFinishedGalleryImages.map((featured, i) => (
          <div
            key={i}
            className={cn(
              'relative w-full transition-all duration-300 ease-in-out cursor-pointer',
              'lg:origin-center lg:h-[540px]',
              activeIndex === i
                ? 'lg:w-[40%] scale-105 shadow-2xl'
                : 'lg:w-[33.33%] lg:scale-100 lg:shadow-none',
              'h-auto overflow-hidden rounded-lg'
            )}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i)}
          >
            <FeaturedCard
              title={featured.title}
              tag={featured.tag}
              images={featured.images}
            />
          </div>
        ))}
      </div>

      {/* Modal for gallery */}
      {modalImages && (
        <div
          className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4'
          onClick={closeModal}
        >
          <div className='relative max-w-full max-h-full'>
            <img
              src={modalImages[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className='max-h-[80vh] max-w-[90vw] sm:max-h-[60vh] sm:max-w-[80vw] object-contain rounded-lg shadow-xl'
            />

            {/* Title overlay */}
            {activeIndex !== null && (
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-md text-center'>
                <h3 className='font-semibold'>
                  {projectFinishedGalleryImages[activeIndex].title}
                </h3>
                {projectFinishedGalleryImages[activeIndex].tag && (
                  <p className='text-sm'>
                    {projectFinishedGalleryImages[activeIndex].tag}
                  </p>
                )}
              </div>
            )}

            {/* Navigation arrows */}
            {modalImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage(e);
                  }}
                  className='absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 bg-black bg-opacity-50 rounded-full'
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage(e);
                  }}
                  className='absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 bg-black bg-opacity-50 rounded-full'
                >
                  ›
                </button>
              </>
            )}

            {/* Image counter */}
            {modalImages.length > 1 && (
              <div className='absolute top-2 right-2 text-white text-sm'>
                {currentImageIndex + 1} / {modalImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ExpandableFeatured;
