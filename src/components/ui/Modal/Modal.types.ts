import { ReactNode } from 'react';

export interface IModalProps {
  show: boolean;
  title?: string;
  whiteBg?: boolean;
  errorMessage?: boolean;
  onClose: () => void;
  children: ReactNode;
}
