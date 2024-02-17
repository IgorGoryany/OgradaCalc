import { createContext } from 'react';

export interface DetailsList {
  Frame25: [number, number][];
  Frame20: [number, number][];
  Pattern25: [number, number][];
  Pattern20: [number, number][];
  Pattern15: [number, number][];
}
interface DetailsListContextProps {
  detailsList: DetailsList;
  setNewDetailToList?: (
    newValues: [number, number],
    key: keyof DetailsList,
  ) => void;
  removeDetailFromList?: (
    newValue: [number, number],
    key: keyof DetailsList,
  ) => void;
}

export const DetailsListContext = createContext<DetailsListContextProps>({
  detailsList: {
    Frame25: [],
    Frame20: [],
    Pattern25: [],
    Pattern20: [],
    Pattern15: [],
  },
});
