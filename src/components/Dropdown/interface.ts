export interface DropdownProps {
  triggerText: string;
  options: OptionsProps[];
}

interface OptionsProps {
  label: string;
  onClick?: VoidFunction;
}
