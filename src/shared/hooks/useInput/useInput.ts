/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from 'react';

export const useInput = (
  cb: (value: string) => boolean,
  initialValue: string = '',
) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((userValue: string) => {
    if (cb(userValue)) setValue(userValue);
  }, []);

  return useMemo(() => ({ value, onChange }), [value, onChange]);
};
