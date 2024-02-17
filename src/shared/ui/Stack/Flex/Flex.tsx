import type { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import type { Mods } from '@/shared/helpers';
import { cn } from '@/shared/helpers';

import style from './Flex.module.scss';

type ReactTag = keyof JSX.IntrinsicElements;

type FlexAlign = 'start' | 'end' | 'center';
type FlexJustify = FlexAlign | 'between';
type FlexDirection = 'row' | 'column';
type FlexGap = '0' | '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  end: style.justifyEnd,
  center: style.justifyCenter,
  start: style.justifyStart,
  between: style.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  end: style.alignEnd,
  center: style.alignCenter,
  start: style.alignStart,
};

const directionClasses: Record<FlexDirection, string> = {
  row: style.directionRow,
  column: style.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  0: '',
  4: style.gapS,
  8: style.gapM,
  16: style.gapL,
  32: style.gapXL,
};
type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  Tag?: ReactTag;
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    justify = 'start',
    direction = 'row',
    align,
    gap,
    max,
    role,
    Tag = 'div',
  } = props;

  const mods: Mods = {
    [style.max]: max,
  };
  const additional = [
    className,
    justifyClasses[justify],
    align && alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return (
    <Tag className={cn(style.flex, mods, additional)} role={role}>
      {children}
    </Tag>
  );
};
