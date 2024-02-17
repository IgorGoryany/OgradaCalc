import { createContext } from 'react';

import type { FenceModels } from '../../calc/types/types';

export interface FenceValues {
  fenceModel: FenceModels;
  sizeX: number;
  sizeY: number;
  isLeft: boolean;
  id: number;
}

interface FenceContextProps {
  fenceValues: FenceValues[];
  setFenceValues?: (fenceValues: FenceValues[]) => void;
}

export const FenceContext = createContext<FenceContextProps>({
  fenceValues: [],
});
