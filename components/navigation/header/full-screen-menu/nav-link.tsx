import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { scale, slide } from './animation';

interface NavLinkProps {
  data: {
    title: string;
    href: string; // use as ID selector (like '#about')
    index: number;
  };
  onClick?: () => void; // callback to hide menu
}

const NavLink: FC<NavLinkProps> = ({ data, onClick }) => {
  const { title, href, index } = data;
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    // smooth scroll to the target section first (while it's still mounted)
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // then hide the menu
    onClick?.();
  };

  return (
    <motion.div
      className='relative flex items-center z-40 cursor-pointer'
      variants={slide}
      custom={index}
      initial='initial'
      animate='enter'
      exit='exit'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick} // smooth scroll + hide menu
    >
      <motion.div
        variants={scale}
        animate={hovered ? 'open' : 'closed'}
        className='w-2.5 h-2.5 bg-white rounded-full absolute -left-[30px]'
      />
      <p className='text-[6vw] uppercase leading-[96%] font-bold text-primary-foreground'>
        {title}
      </p>
    </motion.div>
  );
};

export default NavLink;
