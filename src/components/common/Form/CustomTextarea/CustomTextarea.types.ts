import { ComponentPropsWithoutRef } from 'react';

export interface ICustomTextareaProps
  extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  className?: string;
}
