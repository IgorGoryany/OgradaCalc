import { useCallback } from 'react';

import type { DetailsList } from '@/shared/helpers';

import { useFence } from '../useFence/useFence';

export interface DetailsListArg {
  newValues: [number, number];
  key: keyof DetailsList;
}

export type DetailsListArgs = DetailsListArg[];
export const useDetailsList = () => {
  const setNewDetailToList = useFence((state) => state.setNewDetailToList);
  const removeDetailFromList = useFence((state) => state.removeDetailFromList);

  const removeDetailsFromList = useCallback(
    (...args: DetailsListArgs) => {
      args.forEach(({ newValues, key }) => {
        removeDetailFromList?.(newValues, key);
      });
    },
    [removeDetailFromList],
  );
  const setNewDetailsToList = useCallback(
    (...args: DetailsListArgs) => {
      args.forEach(({ newValues, key }) => {
        setNewDetailToList?.(newValues, key);
      });
    },
    [setNewDetailToList],
  );

  return {
    removeDetailsFromList,
    setNewDetailsToList,
  };
};
