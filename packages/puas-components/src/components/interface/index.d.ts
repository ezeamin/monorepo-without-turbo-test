import type { AnyProp } from '@/interface';

// ----------------------------------------
// PROPS
// ----------------------------------------

export interface ThemeTogglerButtonProps extends AnyProp {
  className?: string;
}

// ----------------------------------------------------------------------
// MENU
// ----------------------------------------------------------------------

export interface LandscapeMenuProps extends AnyProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
}

export interface LogoutButtonProps extends AnyProps {
  className?: string;
  open?: boolean;
}

export interface MenuModuleButtonProps extends AnyProps {
  el: {
    id: number;
    img: {
      src: string;
    };
    description: string;
    url: string;
  };
  open?: boolean;
}

export interface MenuOptionButtonProps extends AnyProps {
  el: {
    id: number;
    description: string;
    url: string;
  };
}
