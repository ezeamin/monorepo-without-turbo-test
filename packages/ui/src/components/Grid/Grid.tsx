'use client';

import { cn, removeLineBreaks } from 'utilities';

import {
  AlignContentTypes,
  JustifyContentTypes,
  LgColTypes,
  MdColTypes,
  RowSpanTypes,
  SmColTypes,
  VerticalAlignTypes,
} from './Grid.classes';

import type { GridPropsType } from './Grid.types';

/**
 * Icon component displays an SVG icon with customizable styling and accessibility attributes.
 * @param props - The component props.
 * @param alignContent - How rows are positioned in multi-row flex and grid containers.
 * @param className - Additional class names to apply to the icon container.
 * @param container - For fixing an element's width to the current breakpoint.
 * @param item - To control the flexbox behavior of an element.
 * @param justifyContent - How flex and grid items are positioned along a container's main axis.
 * @param md - How elements are sized and placed across grid columns using responsive design.
 * @param lg - How elements are sized and placed across grid columns using responsive design.
 * @param rowSpan - How elements are sized and placed across grid rows.
 * @param sm - How elements are sized and placed across grid columns using responsive design.
 * @param verticalAlign - How an individual flex or grid item is positioned along its container's cross axis.
 * @returns JSX.Element The rendered Icon component.
 *
 * ```
 * @example
 *
 * - Standalone usage:
 * <Grid container><Grid item>Some content</Grid></Grid>
 * ```
 */

const Grid = (props: GridPropsType): JSX.Element => {
  const {
    alignContent = '',
    children,
    className = '',
    container = false,
    item = false,
    justifyContent = '',
    lg,
    md,
    rowSpan = 1,
    sm,
    verticalAlign = '',
  } = props;

  return (
    <div
      className={cn(
        removeLineBreaks`
          ${alignContent ? AlignContentTypes[alignContent] : ''}
          ${container ? 'gap-2 grid grid-cols-12' : ''}
          ${justifyContent ? JustifyContentTypes[justifyContent] : ''}
          ${item ? 'flex col-span-12' : ''}
          ${lg ? LgColTypes[lg] : ''}
          ${md ? MdColTypes[md] : ''}
          ${RowSpanTypes[rowSpan]}
          ${sm ? SmColTypes[sm] : ''}
          ${verticalAlign ? VerticalAlignTypes[verticalAlign] : ''}
          p-2`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
