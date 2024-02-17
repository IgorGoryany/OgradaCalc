import { create } from 'zustand';

import type { DetailsList } from '@/shared/helpers';

type FenceStore = DetailsList & {
  setNewDetailToList: (
    [newSize, newCount]: [number, number],
    key: keyof DetailsList,
  ) => void;
  removeDetailFromList: (
    [newValue, newCount]: [number, number],
    key: keyof DetailsList,
  ) => void;
};

export const useFence = create<FenceStore>((set) => ({
  Frame20: [],
  Frame25: [],
  Pattern15: [],
  Pattern20: [],
  Pattern25: [],
  setNewDetailToList: (
    [newSize, newCount]: [number, number],
    key: keyof DetailsList,
  ) =>
    set((state) => {
      let newValueIsSeated = false;

      const newValueList = state[key].map(([oldSize, oldCount]) => {
        if (oldSize === newSize) {
          newValueIsSeated = true;
          return [oldSize, oldCount + newCount];
        }
        return [oldSize, oldCount];
      });
      if (!newValueIsSeated) {
        newValueList.push([newSize, newCount]);
      }
      newValueList.sort((a, b) => b[1] - a[1]);

      return { ...state, [key]: newValueList };
    }),
  removeDetailFromList: (
    [newValue, newCount]: [number, number],
    key: keyof DetailsList,
  ) =>
    set((state) => {
      const newValueList = state[key]
        .map(([oldSize, oldCount]) => {
          if (oldSize === newValue) {
            return [oldSize, oldCount - newCount];
          }
          return [oldSize, oldCount];
        })
        .filter(([, oldCount]) => oldCount > 0);

      return { ...state, [key]: newValueList };
    }),
}));
