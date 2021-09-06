export interface INavItem {
  label: string;
  icon?: any;
  subLabel?: string;
  children?: Array<INavItem>;
  href?: string;
}