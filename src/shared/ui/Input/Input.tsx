import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { memo } from 'react';

import { cn } from '@/shared/helpers';

import style from './Input.module.scss';

import generalStyles from '../styles/generalStyles.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  value?: string | number;
  onChange?: (value: string) => void;
  error?: boolean;
  flex11auto?: boolean;
}

export const Input: FC<InputProps> = memo(function Input(props) {
  const { value, onChange, className, error, flex11auto, ...restProps } = props;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      value={value}
      className={cn(
        style.input,
        {
          [generalStyles.error]: error,
          [generalStyles.flex11auto]: flex11auto,
        },
        className,
      )}
      onChange={onChangeInput}
      {...restProps}
    />
  );
});
