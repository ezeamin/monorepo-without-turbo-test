'use client';

import { cn, removeLineBreaks } from 'utilities';

import {
  AlignContentTypes,
  ColSpanTypes,
  ColTypes,
  JustifyContentTypes,
  RowSpanTypes,
  VerticalAlignTypes,
} from './Grid.classes';

import type { GridPropsType } from './Grid.types';

/**
 * Icon component displays an SVG icon with customizable styling and accessibility attributes.
 * @param props - The component props.
 * @param alignContent - How rows are positioned in multi-row flex and grid containers.
 * @param className - Additional class names to apply to the icon container.
 * @param cols - For specifying the columns in a grid layout.
 * @param colSpan - How elements are sized and placed across grid columns.
 * @param container - For fixing an element's width to the current breakpoint.
 * @param item - To control the flexbox behavior of an element.
 * @param justifyContent - How flex and grid items are positioned along a container's main axis.
 * @param rowSpan - How elements are sized and placed across grid rows.
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
    cols = 1,
    colSpan = 1,
    container = false,
    item = false,
    justifyContent = '',
    rowSpan = 1,
    verticalAlign = '',
  } = props;

  return (
    <div
      className={cn(
        removeLineBreaks`
          ${alignContent ? AlignContentTypes[alignContent] : ''}
          ${ColSpanTypes[colSpan]}
          ${ColTypes[cols]}
          ${container ? 'gap-2 grid' : ''}
          ${justifyContent ? JustifyContentTypes[justifyContent] : ''}
          ${item ? 'flex' : ''}
          ${RowSpanTypes[rowSpan]}
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
