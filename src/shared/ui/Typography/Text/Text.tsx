import type { FC } from 'react';
import { memo } from 'react';

import { cn } from '@/shared/helpers';

import style from './Text.module.scss';

import generalStyles from '../../styles/generalStyles.module.scss';
import grandStyles from '../styles/GrandStyles.module.scss';
import type { TypographyAlign } from '../types/types';

export type TextType = 'span' | 'p';
export type TextSize = 'sm' | 'md' | 'lg' | 'vlg';
export type TextColor = 'primary' | 'secondary';

interface TextProps {
  className?: string;
  Tag?: TextType;
  children?: string | number | false | Iterable<string | number | false>;
  size?: TextSize;
  bold?: boolean;
  color?: TextColor;
  align?: TypographyAlign;
  underline?: boolean;
}

export const Text: FC<TextProps> = memo(function Text(props) {
  const {
    className,
    Tag = 'p',
    children,
    size = 'md',
    bold,
    color = 'primary',
    align = 'start',
    underline,
  } = props;

  return (
    <Tag
      className={cn(
        style.text,
        grandStyles[align],
        style[size],
        { [style.bold]: bold, [generalStyles.underlined]: underline },
        style[color],
        className,
      )}
    >
      {children}
    </Tag>
  );
});
