'use client';

import { useMemo } from 'react';
import { IconContext } from 'react-icons';

import type { IconPropsType } from './Icon.types';

/**
 * Icon component displays an SVG icon with customizable styling and accessibility attributes.
 * @param {IconProps} props - The component props.
 * @param {string} [props.className] - Additional class names to apply to the icon container.
 * @param {string} [props.color] - The color of the icon in hexadecimal format (e.g., "#FF0000").
 * @param {JSX.Element} props.iconComponent - The SVG icon component to render.
 * @param {string} [props.size] - The size of the icon in CSS units (e.g., "2em", "16px").
 * @param {string} [props.title] - The title attribute for the icon (used for accessibility).
 * @returns {JSX.Element} The rendered Icon component.
 *
 * @example
 * // Standalone usage:
 * <Icon iconComponent={SomeIcon} color="#FF0000" size="2em" />
 * // In this example, the `color` and `size` props will be applied to the icon.
 *
 * @example
 * // Usage within another component:
 * <Button>
 *   <Icon iconComponent={AnotherIcon} />
 * </Button>
 * // In this example, the `color` and `size` props will be inherited from the parent `Button` component.
 *
 * @note It is recommended to provide a `title` attribute for accessibility purposes.
 * If a `title` is not provided, a default `title` attribute will be generated based on the icon component's name.
 * For example, if using the `MdCalculator` icon component, the default `title` attribute would be `icon-MdCalculator`.
 */

function Icon(props: IconPropsType) {
  const {
    className,
    color,
    iconComponent: IconComponent,
    size = '17.5px',
    title: customTitle,
  } = props;

  const defaultTitle = 'icon-title';
  const title = customTitle || defaultTitle;

  const iconContextValue = useMemo(
    () => ({
      className,
      color,
      size,
      title,
    }),
    [className, color, size, title]
  );

  return (
    <IconContext.Provider value={iconContextValue}>
      {IconComponent}
    </IconContext.Provider>
  );
}

export default Icon;
