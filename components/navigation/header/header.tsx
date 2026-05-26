/* eslint-disable react/jsx-no-undef */
'use client';

import FancyButton from '@/components/ui/fancy-button';
import Profile from '@/components/ui/profile';
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper';
import { FaArrowRight } from 'react-icons/fa';
import FullScreenMenu from './full-screen-menu/full-screen-menu';
import { useEffect, useState } from 'react';
import ToggleButton from './full-screen-menu/toggle-button';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  // Close on Escape and lock page scroll while the menu is open.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className='w-full flex items-center justify-center md:justify-between'>
      <Profile />

      {/* Desktop CTA — kept clear of the fixed toggle in the corner */}
      <div
        onClick={() => {
          window.location.href = 'tel:+41786314202';
        }}
        className='hidden md:inline md:mr-28'
      >
        <MagneticWrapper>
          <FancyButton text='Let`s talk' icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>

      {/* Always-available menu toggle (hamburger <-> X) */}
      <ToggleButton open={open} setOpen={setOpen} />

      {/* Full screen menu */}
      <AnimatePresence mode='wait'>
        {open && <FullScreenMenu close={() => setOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
