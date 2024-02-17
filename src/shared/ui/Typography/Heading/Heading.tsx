import { memo } from 'react';
import type { FC } from 'react';

import { cn } from '@/shared/helpers';

import style from './Heading.module.scss';

import generalStyles from '../../styles/generalStyles.module.scss';
import grandStyles from '../styles/GrandStyles.module.scss';
import type { TypographyAlign } from '../types/types';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  className?: string;
  Tag?: HeadingTag;
  like?: HeadingTag;
  children?: string | number | Iterable<string | number>;
  align?: TypographyAlign;
  underline?: boolean;
}

export const Heading: FC<HeadingProps> = memo(function Heading(props) {
  const {
    className,
    Tag = 'h2',
    like = 'h2',
    children,
    align = 'start',
    underline,
  } = props;

  return (
    <Tag
      className={cn(
        style.heading,
        style[like],
        grandStyles[align],
        { [generalStyles.underline]: underline },
        className,
      )}
    >
      {children}
    </Tag>
  );
});
