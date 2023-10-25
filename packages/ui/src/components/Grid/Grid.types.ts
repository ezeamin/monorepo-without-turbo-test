export interface GridPropsType {
  alignContent?:
    | 'around'
    | 'baseline'
    | 'between'
    | 'center'
    | 'end'
    | 'evenly'
    | 'normal'
    | 'start'
    | 'stretch';
  children?: string | React.ReactNode;
  className?: string;
  container?: boolean;
  item?: boolean;
  justifyContent?:
    | 'around'
    | 'between'
    | 'center'
    | 'end'
    | 'evenly'
    | 'normal'
    | 'start'
    | 'stretch';
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  verticalAlign?: 'auto' | 'baseline' | 'center' | 'end' | 'start' | 'stretch';
}
