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
