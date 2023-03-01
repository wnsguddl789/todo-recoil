import { ReactNode } from 'react';

import { Label } from '@components/atoms';

interface Props {
  children: ReactNode;

  label: string;
  className?: string;

  [attribute: string]: any;
}

export const FormItem = ({ children, className = '', label, ...attribute }: Props) => (
  <div className={className} {...attribute}>
    <Label className="flex-1" label={label} />
    {children}
  </div>
);
