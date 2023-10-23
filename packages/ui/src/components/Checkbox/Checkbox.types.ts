import type { DataTestId } from '../../types';
import type {
  BgColorProp,
  HeightType,
  TextColorProp,
  WidthType,
} from '../../types/tailwind';

interface CheckboxOption {
  id: number;
  description: string;
}

interface Props extends React.Props<Checkbox> {
    label : string;
    style: any;
    defaultChecked?: boolean;
    checkedIcon?: any;
    uncheckedIcon?: any;
};

export type ChecboxPropsType = DataTestId & {
  className?: string;
  disabled?: boolean;
  msgError?: string;
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
