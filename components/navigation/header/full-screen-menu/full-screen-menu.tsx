import { motion } from 'framer-motion';
import { menuSlide } from './animation';
import Curve from './curve';
import Profile from '@/components/ui/profile';
import NavLink from './nav-link';
import Link from 'next/link';
import MenuCard from './menu-card';

interface FullScreenMenuProps {
  onClose: () => void; // callback to hide menu
}

export default function FullScreenMenu({ onClose }: FullScreenMenuProps) {
  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className='h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald'
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className='absolute top-8 right-8 text-white text-2xl z-50'
      >
        ✕
      </button>

      <div className='relative w-full pl-[5%]'>
        <div className='absolute top-8'>
          <Profile />
        </div>
      </div>

      {/* Menu and card */}
      <div className='absolute bottom-32 w-full lg:px-[5%]'>
        <div
          className='grid relative'
          style={{ gridTemplateColumns: '1fr 500px' }}
        >
          <div className='pl-4 flex flex-col justify-end'>
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                data={{ ...item, index }}
                onClick={onClose} // hide menu on link click
              />
            ))}
          </div>
          <MenuCard />
        </div>
      </div>

      {/* Footer links */}
      <div className='w-[95%] pl-[5%] absolute bottom-8'>
        <div className='flex flex-wrap items-center justify-between uppercase text-white'>
          <div className='flex items-center gap-4'>
            <Link href='/' onClick={onClose}>
              LEGAL NOTICE
            </Link>
            <Link href='/' onClick={onClose}>
              404
            </Link>
            <Link href='/' onClick={onClose}>
              LEGALSTYLE
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <Link
              href='https://www.linkedin.com/in/martin-petroski-543443336/'
              onClick={onClose}
              target='_blank'
            >
              LINKEDIN
            </Link>

            <Link
              href='https://github.com/kobretti19?tab=repositories'
              onClick={onClose}
              target='_blank'
            >
              GITHUB
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <Link href='/' onClick={onClose}>
              ©2025
            </Link>
          </div>
        </div>
      </div>

      <Curve />
    </motion.div>
  );
}

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Featured', href: '/#featured' },
  { title: 'About', href: '/#about' },
  { title: 'Projects', href: '/#projects' },
  { title: 'Contact', href: '/#contact' },
];
