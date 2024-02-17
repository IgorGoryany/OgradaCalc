import React, { useMemo, useState } from 'react';

import { FenceContext } from '@/shared/helpers';
import type { FenceValues } from '@/shared/helpers';

interface FenceProviderProps {
  children: React.ReactNode;
}

export const FenceProvider = ({ children }: FenceProviderProps) => {
  const [fenceValues, setFenceValues] = useState<FenceValues[]>([]);

  const defaultProps = useMemo(
    () => ({
      fenceValues,
      setFenceValues,
    }),
    [fenceValues],
  );

  return (
    <FenceContext.Provider value={defaultProps}>
      {children}
    </FenceContext.Provider>
  );
};


