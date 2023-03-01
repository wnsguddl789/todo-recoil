interface Props {
  label: string;
  [attribute: string]: any;
}

export const Label = ({ label, ...props }: Props) => <label {...props}>{label}</label>;
