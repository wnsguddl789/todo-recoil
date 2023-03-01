import { ForwardedRef, forwardRef } from 'react';

interface Props {
  [attribute: string]: any;
}

export const Input = forwardRef(({ ...inputProps }: Props, ref: ForwardedRef<HTMLInputElement>) => <input ref={ref} {...inputProps} />);

Input.displayName = 'Input';
