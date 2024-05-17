import { ComponentPropsWithoutRef } from 'react';

export interface ICustomInputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  errorMessage?: string;
  className?: string;
}
