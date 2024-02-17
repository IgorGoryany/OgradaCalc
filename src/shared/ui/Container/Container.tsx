import type { FC, ReactNode } from 'react';

import { cn } from '@/shared/helpers';

import style from './Container.module.scss';

interface ContainerProps {
  children?: ReactNode;
  center?: boolean;
  className?: string;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children, center, className } = props;
  return (
    <div className={cn(style.container, { [style.center]: center }, className)}>
      {children}
    </div>
  );
};
