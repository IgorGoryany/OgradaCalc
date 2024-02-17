import type { ReactNode, SVGProps } from 'react';

import type { FenceModels } from '../helpers';

export interface SVGElement extends SVGProps<SVGSVGElement> {}

export interface FenceLayoutProps {
  onDelete: (id: number) => void;
  number: number;
  model: FenceModels;
  id: number;
  isLeft: boolean;
  lengthX: number;
  lengthY: number;
  image: string;
  isMobile: boolean;
  children: ReactNode;
}
