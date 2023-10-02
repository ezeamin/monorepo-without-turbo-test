'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';

import { usePortrait } from 'hooks';

import { DTI, DTI_LIST } from 'dti';

// import Skeleton from 'ui/Skeleton';
import PortraitMenu from './PortraitMenu';
import ProfileAvatar from './ProfileAvatar';
import ThemeTogglerButton from './ThemeTogglerButton';
import { Button } from 'ui';

const LOGO_PATH = '/img/logos/logo-144.png';

const Header = (): JSX.Element => {
  const [isScrolling, setIsScrolling] = useState(false);

  const isPortrait = usePortrait('md');

  // =====================================================================
  // FUNCTIONS -----------------------------------------------------------
  // =====================================================================

  // Scroll Detection
  useEffect(() => {
    // Grab "content" element from "components/LandscapeMenu.tsx
    const content = document.getElementById('content');
    if (!content) return () => {};

    const onScroll = (): void => {
      const { scrollTop } = content;

      if (scrollTop >= 70) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    content.addEventListener('scroll', onScroll);

    return () => {
      content.removeEventListener('scroll', onScroll);
    };
  }, []);

  // =====================================================================
  // RENDER -----------------------------------------------------------
  // =====================================================================

  if (isPortrait === undefined) {
    return (
      <header
        className={`sticky top-0 w-full py-5 flex justify-between items-center px-7 md:px-10 transition-colors ${
          isScrolling ? 'header-scrolling' : ''
        }`}
      >
        {/* TODO: Skeleton */}
        {/* <Skeleton />
        <Skeleton type="circle" /> */}
      </header>
    );
  }

  if (isPortrait) {
    return (
      <header
        className={`z-40 py-5 ps-7 pe-5 flex justify-between sticky top-0 w-full transition-colors ${
          isScrolling ? 'header-scrolling' : ''
        }`}
      >
        <Image
          alt="Poder Judicial de Tucumán"
          className="w-12 h-12"
          height={100}
          src={LOGO_PATH}
          width={100}
        />
        <PortraitMenu />
      </header>
    );
  }

  return (
    <header
      className={`duration-300 sticky top-0 flex justify-between w-full pe-10 ps-6 py-5 ${
        isScrolling ? 'header-scrolling shadow' : ''
      } transition-colors z-40`}
    >
      <nav className="flex gap-2">
        <Button
          colorDark="dark:btn-ghost"
          colorLight="btn-ghost"
          dti={DTI(DTI_LIST.BUTTON('example'))}
        >
          Option x
        </Button>
        <Button
          colorDark="dark:btn-ghost"
          colorLight="btn-ghost"
          dti={DTI(DTI_LIST.BUTTON('example'))}
        >
          Option x
        </Button>
        <Button
          colorDark="dark:btn-ghost"
          colorLight="btn-ghost"
          dti={DTI(DTI_LIST.BUTTON('example'))}
        >
          Option x
        </Button>
      </nav>
      <div className="flex gap-4">
        <ThemeTogglerButton />
        <ProfileAvatar />
      </div>
    </header>
  );
};

export default Header;
