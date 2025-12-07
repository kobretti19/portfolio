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
  const validImages = images?.filter((src) => !!src) || [
    '/assets/images/placeholder.jpg',
  ];

  return (
    <div className='link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl p-2 flex flex-col gap-2'>
      <Header title={title} tag={tag} />

      <div className='relative flex p-4 w-full items-center justify-center h-[550px] border border-border rounded-3xl overflow-hidden'>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className='rounded-2xl w-full h-full'
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
