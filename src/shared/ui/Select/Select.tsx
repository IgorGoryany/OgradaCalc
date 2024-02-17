import type { ChangeEvent, SelectHTMLAttributes } from 'react';
import { useState } from 'react';

import { genericMemo } from '@/shared/consts';
import { cn } from '@/shared/helpers';

import styles from './Select.module.scss';

import generalStyles from '../styles/generalStyles.module.scss';

interface Option<
  Value extends string | number = string,
  Text extends string | number = string,
> {
  value: Value;
  text: Text;
  disabled?: boolean;
}

export type Options<
  Value extends string | number = string,
  Text extends string | number = string,
> = Option<Value, Text>[];

type HTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
>;

interface SelectProps<
  Value extends string | number = string,
  Text extends string | number = string,
> extends HTMLSelectProps {
  options: Options<Value, Text>;
  className?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  flex11auto?: boolean;
}

export const Select = genericMemo(function Select<
  Value extends string | number = string,
  Text extends string | number = string,
>(props: SelectProps<Value, Text>) {
  const {
    className,
    options,
    defaultValue = '',
    onChange,
    error,
    flex11auto,
  } = props;
  const [value, setValue] = useState(defaultValue);

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <select
      value={value}
      className={cn(styles.select, className, {
        [generalStyles.error]: error,
        [generalStyles.flex11auto]: flex11auto,
      })}
      onChange={onChangeValue}
    >
      {options.map((item) => (
        <option key={item.value} disabled={item.disabled} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
});
