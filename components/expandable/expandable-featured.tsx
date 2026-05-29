import React, { useEffect, useRef, useState } from 'react';
import { projectFinishedGalleryImages } from '@/data/featured';
import FeaturedCard from '../cards/featured/featured-card';
import { cn } from '@/lib/utils';

const ExpandableFeatured = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!modalImages) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) =>
          prev === 0 ? modalImages.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) =>
          prev === modalImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    modalRef.current?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalImages]);

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

      {modalImages && (
        <div
          ref={modalRef}
          role='dialog'
          aria-modal='true'
          aria-label='Project gallery'
          tabIndex={-1}
          className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4'
          onClick={closeModal}
        >
          <div className='relative' onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={modalImages[currentImageIndex]}
              src={modalImages[currentImageIndex]}
              alt={`${projectFinishedGalleryImages.find((p) => p.images.includes(modalImages[currentImageIndex]))?.title || 'Project image'} — ${currentImageIndex + 1} of ${modalImages.length}`}
              className='max-h-[80vh] max-w-[90vw] rounded-lg shadow-xl'
            />
            {modalImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label='Previous image'
                  className='absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 bg-black bg-opacity-50 rounded-full'
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  aria-label='Next image'
                  className='absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl font-bold px-3 py-1 bg-black bg-opacity-50 rounded-full'
                >
                  ›
                </button>
              </>
            )}
            {modalImages.length > 1 && (
              <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm' aria-live='polite'>
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
