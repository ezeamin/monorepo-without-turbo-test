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
    | 'btn-ghost'
    | `bg-${ColorNameType}-${ColorIntensityType}`;
  dark:
    | 'dark:btn-neutral'
    | 'dark:btn-primary'
    | 'dark:btn-secondary'
    | 'dark:btn-ghost'
    | `dark:bg-${ColorNameType}-${ColorIntensityType}`;
}

export interface CheckboxProps {
  dti: DataTestId;
  ariaLabel: string;
  className?: string;
  id: string;
  label?: string;
  colorDark?: CheckboxColorType['dark'];
  colorLight?: CheckboxColorType['light'];
  textColorDark?: TextColorType['dark'];
  textColorLight?: TextColorType['light'];
  disabled?: boolean;
}
