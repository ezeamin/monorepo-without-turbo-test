import type { DataTestId } from '../../types';
import type { ColorIntensityType, ColorNameType } from '../../types/tailwind';

interface ButtonColorType {
  light:
    | 'btn-neutral'
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-accent'
    | 'btn-ghost'
    | 'btn-link'
    | 'btn-info'
    | 'btn-success'
    | 'btn-warning'
    | 'btn-error'
    | `bg-${ColorNameType}-${ColorIntensityType}`;
  dark:
    | 'dark:btn-neutral'
    | 'dark:btn-primary'
    | 'dark:btn-secondary'
    | 'dark:btn-accent'
    | 'dark:btn-ghost'
    | 'dark:btn-link'
    | 'dark:btn-info'
    | 'dark:btn-success'
    | 'dark:btn-warning'
    | 'dark:btn-error'
    | `dark:bg-${ColorNameType}-${ColorIntensityType}`;
}

export type IconButtonPropsType =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    DataTestId & {
      className?: string;
      colorDark?: ButtonColorType['dark'];
      colorLight?: ButtonColorType['light'];
      disabled?: boolean;
      iconComponent: React.ReactNode;
      label?: string;
    };
