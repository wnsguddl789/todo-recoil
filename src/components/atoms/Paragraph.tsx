interface Props {
  children: React.ReactNode;
}

export const Paragraph = ({ children, ...attribute }: Props) => <p {...attribute}>{children}</p>;
