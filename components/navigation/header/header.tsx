/* eslint-disable react/jsx-no-undef */
import FancyButton from '@/components/ui/fancy-button';
import Profile from '@/components/ui/profile';
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper';
import { FaArrowRight } from 'react-icons/fa';
import FullScreenMenu from './full-screen-menu/full-screen-menu';
import { useEffect, useState } from 'react';
import ToggleButton from './full-screen-menu/toggle-button';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='w-full flex items-center justify-center md:justify-between'>
      <Profile />
      <div
        onClick={() => {
          window.location.href = 'tel:+41786314202';
        }}
        className='hidden md:inline'
      >
        <MagneticWrapper>
          <FancyButton text='Let`s talk' icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* { Toggle button} */}
      {showToggle && <ToggleButton open={open} setOpen={setOpen} />}

      {/* { Full screan menu} */}

      {open && <FullScreenMenu />}
    </div>
  );
};

export default Header;
