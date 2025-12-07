import { FC } from 'react';
import Header from './header';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface FeaturedCardProps {
  title: string;
  tag: string;
  images: string[];
}

const FeaturedCard: FC<FeaturedCardProps> = ({ title, tag, images }) => {
  const validImages = images?.filter(Boolean) || [
    '/assets/images/placeholder.jpg',
  ];

  return (
    <div className='w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl flex flex-col overflow-hidden'>
      <Header title={title} tag={tag} />

      <div className='relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]'>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className='w-full h-full'
        >
          {validImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={src}
                alt={`${title}-${idx}`}
                fill
                className='object-cover rounded-2xl'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCard;
