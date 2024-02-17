import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { memo } from 'react';

import { cn } from '@/shared/helpers';

import style from './Button.module.scss';

import generalStyles from '../styles/generalStyles.module.scss';

type ButtonVariant = 'red' | 'gray' | 'close' | 'secondGray' | 'inherit';

type ButtonAttr = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ButtonAttr {
  variant?: ButtonVariant;
  max?: boolean;
  rightIcon?: ReactNode;
  underline?: boolean;
}

export const Button: FC<ButtonProps> = memo(function Button(props) {
  const {
    children,
    variant = 'red',
    className,
    max,
    rightIcon,
    underline,
    ...restProps
  } = props;

  return (
    <button
      className={cn(
        style.button,
        { [style.max]: max, [generalStyles.underlined]: underline },
        [variant && style[variant]],
        className,
      )}
      {...restProps}
    >
      {children} {rightIcon}
    </button>
  );
});
