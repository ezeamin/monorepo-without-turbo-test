import type { DataTestId } from '../../types';
import type {
  BgColorProp,
  HeightType,
  TextColorProp,
  WidthType,
} from '../../types/tailwind';
import type { IconPropsType } from '../Icon/Icon.types';

interface ComboBoxOption {
  id: number;
  description: string;
}

export type ComboBoxPropsType = DataTestId & {
  className?: string;
  disabled?: boolean;
  iconCheckProps?: {
    className?: IconPropsType['className'];
    iconComponent?: IconPropsType['iconComponent'];
    size?: IconPropsType['size'];
  };
  iconClearProps?: {
    color?: IconPropsType['color'];
    className?: IconPropsType['className'];
    iconComponent?: IconPropsType['iconComponent'];
    size?: IconPropsType['size'];
  };
  iconExpandProps?: {
    color?: IconPropsType['color'];
    className?: IconPropsType['className'];
    iconComponent?: IconPropsType['iconComponent'];
    size?: IconPropsType['size'];
  };
  msgError?: string;
  options: ComboBoxOption[];
  placeholder: string;
  positionedColorOption?: {
    bgColor: BgColorProp['color'];
    textColor: TextColorProp['textColor'];
  };
  selectedColorOption?: BgColorProp['color'];
  sizing?: {
    height?: HeightType;
    width?: WidthType;
  };
};
