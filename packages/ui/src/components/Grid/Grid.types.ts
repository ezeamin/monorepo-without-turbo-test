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
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6;
  verticalAlign?: 'auto' | 'baseline' | 'center' | 'end' | 'start' | 'stretch';
}
