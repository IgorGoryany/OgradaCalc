import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { DetailsListContext, type DetailsList } from '@/shared/helpers';

interface DetailsListProviderProps {
  children: ReactNode;
}
export const DetailsListProvider = (props: DetailsListProviderProps) => {
  const { children } = props;
  const [detailsList, setDetailsList] = useState<DetailsList>({
    Frame20: [],
    Frame25: [],
    Pattern20: [],
    Pattern15: [],
    Pattern25: [],
  });

  const setNewDetailToList = useCallback(
    ([newSize, newCount]: [number, number], key: keyof DetailsList) => {
      // debugger;
      let newValueIsSeated = false;

      const newValueList = detailsList[key].map(([oldSize, oldCount]) => {
        // console.log([oldSize, newSize]);
        if (oldSize === newSize) {
          newValueIsSeated = true;
          return [oldSize, oldCount + newCount];
        }
        return [oldSize, oldCount];
      });
      if (!newValueIsSeated) {
        // console.log(newValueList);
        newValueList.push([newSize, newCount]);
        // console.log(newValueList);
      }
      newValueList.sort((a, b) => a[1] - b[1]);
      setDetailsList((prevProps) => ({ ...prevProps, [key]: newValueList }));
    },
    [detailsList],
  );

  const removeDetailFromList = useCallback(
    ([newValue, newCount]: [number, number], key: keyof DetailsList) => {
      const newValueList = detailsList[key]
        .map(([oldSize, oldCount]) => {
          if (oldSize === newValue) {
            return [oldSize, oldCount - newCount];
          }
          return [oldSize, oldCount];
        })
        .filter(([, oldCount]) => oldCount > 0);

      setDetailsList({ ...detailsList, [key]: newValueList });
    },
    [detailsList],
  );

  const contextProps = useMemo(
    () => ({ detailsList, setNewDetailToList, removeDetailFromList }),
    [detailsList, setNewDetailToList, removeDetailFromList],
  );

  return (
    <DetailsListContext.Provider value={contextProps}>
      {children}
    </DetailsListContext.Provider>
  );
};
