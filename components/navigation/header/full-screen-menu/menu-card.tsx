'use client';

import { HeadingAnimatedSvg } from '@/components/heading/heading-animated-svg';
import Image from 'next/image';
import ShadeImg from '@/public/assets/images/background/card-shade.png';

export default function MenuCard({ close }: { close: () => void }) {
  const handleClick = (target: string) => {
    document
      .querySelector(target)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    close();
  };

  return (
    <div className='w-full h-auto min-h-[427px] gap-[70px] bg-[#1e36ea] rounded-[10px] flex-col justify-between items-start flex relative overflow-hidden pt-10 px-[25px] pb-5 shadow-md'>
      {/*Header*/}
      <div className='w-full flex relative justify-between items-center'>
        <div className='uppercase font-bold text-2xl text-white'>
          Who is Martin ?
        </div>
        <HeadingAnimatedSvg animated text='LEARN MORE ABOUT MARTIN PETROSKI' />
      </div>
      {/*Menu*/}
      <div className='z-40 w-full flex flex-col gap-y-[5px] justify-center items-start relative'>
        {myLinks.map((link, i) => (
          <button
            key={i}
            type='button'
            onClick={() => handleClick(link.link)}
            className='text-[#fdf825] uppercase text-[52px] font-bold leading-[85%] transition-colors duration-75 hover:text-white text-left'
          >
            {link.title}
          </button>
        ))}
      </div>
      {/*Image shade*/}
      <Image
        src={ShadeImg}
        alt=''
        className='block w-full h-full mix-blend-overlay absolute top-0 right-0 left-0 bottom-0 pointer-events-none'
      />
    </div>
  );
}

const myLinks = [
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Background',
    link: '#background',
  },
  {
    title: 'Courses',
    link: '#certifications',
  },
  {
    title: 'EXPERIENCE',
    link: '#experience',
  },
  {
    title: 'EDUCATION',
    link: '#education',
  },
  {
    title: 'CERTIFICATIONS',
    link: '#certifications',
  },
  {
    title: 'TECH STACK',
    link: '#stack',
  },
  {
    title: 'Gallery',
    link: '#about',
  },
];
