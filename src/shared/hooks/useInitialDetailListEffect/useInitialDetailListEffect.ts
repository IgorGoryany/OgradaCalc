import { useEffect } from 'react';

import {
  useDetailsList,
  type DetailsListArg,
  type DetailsListArgs,
} from '../useDetailsList/useDetailsList';

export const useInitialDetailListEffect = (
  ...args: (DetailsListArg | false | 0 | undefined)[]
) => {
  const { removeDetailsFromList, setNewDetailsToList } = useDetailsList();

  const filteredArgs = args.filter(Boolean) as DetailsListArgs;

  useEffect(() => {
    setNewDetailsToList(...filteredArgs);

    return () => {
      removeDetailsFromList(...filteredArgs);
    };
  }, []);
};
