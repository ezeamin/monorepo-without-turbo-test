'use client';

import { useEffect, useState } from 'react';
import { cn } from '../../../helpers/cn';
import { removeLineBreaks } from '../../../helpers/utils';
import Icon from '../../Utils/Icon/Icon';
import type { ButtonType } from './Button.types';

/**
 * Generates the ARIA label for the button.
 *
 * @param {React.ReactNode} content - The content of the button.
 * @param {string | undefined} buttonAriaLabel - A custom ARIA label for the button.
 * @param {string | undefined} aditionalText - Additional text to prepend to the generated ARIA label.
 * @returns {string | undefined} The generated ARIA label for the button.
 */
const generateAriaLabel = (
  content: ButtonType['children'],
  buttonAriaLabel: string | undefined,
  aditionalText: string | undefined
): string | undefined => {
  if (buttonAriaLabel) {
    return buttonAriaLabel;
  }

  if (typeof content === 'string') {
    return `${aditionalText} ${content}`.toLowerCase();
  }

  return undefined;
};

/**
 * A reusable generic button in the DaisyUI style.
 * @component
 *
 * @param {ButtonType} props - Properties for the generic button.
 * @param {boolean} [props.activeButton=false] - Specifies whether the button should have an active style.
 * @param {boolean} [props.ariaHidden=false] - Specifies whether the button should be hidden from screen readers.
 * @param {boolean} [props.ariaLabel] - A string that provides a label for the button for screen readers. If not provided, the label is generated based on the button's content.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the button.
 * @param {string} [props.children] - Content to display within the button.
 * @param {string} props.colorDark - The color of the button in dark mode. You can provide a DaisyUI color class to be applied in dark mode. Example: 'btn-info'.
 * @param {string} props.colorLight - The color of the button in light mode. You can provide a DaisyUI color class to be applied in light mode. Example: 'btn-ghost'.
 * @param {boolean} [props.disabled=false] - Specifies whether the button is disabled.
 * @param {string} [props.dti] - Data Test ID for testing purposes.
 * @param {React.ComponentType<React.SVGProps<SVGSVGElement>>} [props.endIcon] - The icon component to display after the text.
 * @param {boolean} [props.glass=false] - Specifies whether the button should have a glass effect.
 * @param {string} [props.name] - The name attribute of the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] - Event handler for the button's click event.
 * @param {boolean} [props.outlineButton=false] - Specifies whether the button should have an outline style.
 * @param {string} [props.size='btn-md'] - Specifies the text size of the button using predefined classes like 'text-xs' or 'text-lg', or a custom size using 'text-[18px]'.
 * @param {string} [props.sizeText=''] - Additional classes for customizing the text size of the button.
 * @param {React.ComponentType<React.SVGProps<SVGSVGElement>>} [props.startIcon] - The icon component to display before the text.
 * @param {number} [props.tabIndex=0] - Specifies the tab index of the button for keyboard navigation.
 * @param {string} [props.textColorDark='text-zinc-100'] - The color of the text in the button in dark mode. You can provide a DaisyUI color class to be applied to the text in dark mode. Example: 'text-zinc-100 or text-white'.
 * @param {string} [props.textColorLight='text-zinc-900'] - The color of the text in the button in light mode. You can provide a DaisyUI color class to be applied to the text in light mode. Example: 'text-zinc-900 or text-black'.
 * @param {'button' | 'reset' | 'submit'} [props.type='button'] - Specifies the type of the button.
 * @param {boolean} [props.unstyled=false] - Specifies whether the button should be unstyled (without default button styling).
 * @param {boolean} [props.withoutAnimation=false] - Specifies whether to disable click animation.
 * @returns {JSX.Element} A stylized button element.
 * @throws Will throw an error if both `activeButton` and `outlineButton` are enabled simultaneously.
 *
 * @example
 * // Standard button:
 * <Button color="btn-primary" size="btn-md" onClick={handleClick}>Click Me</Button>
 *
 * @example
 * // Button with icons:
 * <Button startIcon={{ iconComponent: IconStart }} endIcon={{ iconComponent: IconEnd }}>Button with Icons</Button>
 *
 * @example
 * // Outline button:
 * <Button outlineButton color="btn-accent" size="btn-lg">Outlined Button</Button>
 */

function Button(props: ButtonType) {
  const {
    activeButton = false,
    ariaHidden = false,
    ariaLabel,
    className = '',
    children,
    colorDark,
    colorLight,
    dti,
    disabled = false,
    endIcon,
    glass = false,
    name,
    onClick,
    outlineButton = false,
    size = 'btn-md',
    sizeText = '',
    startIcon,
    tabIndex = 0,
    textColorDark,
    textColorLight,
    type = 'button',
    unstyled = false,
    value,
    withoutAnimation = false,
  } = props;

  const [disabledState, setDisabledState] = useState(true);

  if (activeButton && outlineButton) {
    // eslint-disable-next-line no-console
    console.error(
      'Both activeButton and outlineButton are enabled. Use either one, not both.'
    );
  }

  if (
    (startIcon?.iconComponent || endIcon?.iconComponent) &&
    !children &&
    !ariaLabel
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      'To improve accessibility it is necessary the ariaLabel prop in the button.'
    );
  }

  useEffect(() => {
    setDisabledState(disabled);
  }, [disabled]);

  // TODO: revisar hover modo oscuro

  return (
    <button
      aria-disabled={Boolean(disabledState)}
      aria-hidden={ariaHidden}
      aria-label={generateAriaLabel(children, ariaLabel, 'Botón para')}
      className={cn(
        removeLineBreaks`
      ${unstyled ? '' : 'btn'} 
      ${activeButton ? 'btn-active' : ''}
      ${colorLight ?? ''} 
      ${colorDark && colorDark !== colorLight ? `dark:${colorDark}` : ''} 
      ${glass ? 'glass' : ''}
      ${outlineButton ? 'btn-outline' : ''} 
      ${size}
      ${sizeText ?? ''}
      ${textColorLight ?? ''} 
      ${textColorDark ? `dark:${textColorDark}` : ''}
      ${withoutAnimation ? 'no-animation' : ''}`,
        className
      )}
      data-testid={dti}
      disabled={disabledState}
      name={name}
      onClick={onClick}
      tabIndex={tabIndex}
      // eslint-disable-next-line react/button-has-type
      type={type}
      value={value}
    >
      {startIcon ? <Icon
          iconComponent={startIcon.iconComponent}
          title={startIcon.title || `icon-start-button-${children}`}
        /> : null}

      {children}

      {endIcon ? <Icon
          iconComponent={endIcon.iconComponent}
          title={endIcon.title || `icon-end-button-${children}`}
        /> : null}
    </button>
  );
}

export default Button;
