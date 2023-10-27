import type { DataTestId } from '../../types';
import type {
  ColorIntensityType,
  ColorNameType,
  TextColorType,
} from '../../types/tailwind';

interface CheckboxColorType {
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

export type CheckboxPropsType = React.HTMLAttributes<HTMLButtonElement> &
  DataTestId & {
    className?: string;
    ariaLabel: string;
    colorDark?: CheckboxColorType['dark'];
    colorLight?: CheckboxColorType['light'];
    textColorDark?: TextColorType['dark'];
    textColorLight?: TextColorType['light'];
    disabled?: boolean;
    iconComponent: React.ReactNode;
    label?: string;
  };
