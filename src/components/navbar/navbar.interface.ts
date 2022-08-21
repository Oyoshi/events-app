export type NavLink = {
  title: string;
  to: string;
};

export type Language = {
  name: string;
};

export interface NavbarProps {
  onSearch?: (val: string) => void;
}
