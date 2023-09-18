export interface IconPropsType {
  className?: string;
  color?: `#${string}`;
  iconComponent: JSX.Element;
  size?: `${string}em` | `${string}rem` | `${string}px`;
  title: string;
}
