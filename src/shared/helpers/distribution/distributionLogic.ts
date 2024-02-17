import { distributionCalcFence } from './distributionCalcFence';

import type { FenceModels } from '../calc/types/types';

export function distributionLogic(
  fenceModel: FenceModels,
  sizeX: number,
  sizeY: number,
) {
  if (sizeX > 3000 && sizeY > 3000) {
    return distributionCalcFence(sizeX, sizeY, fenceModel, true, true);
  }
  if (sizeX > 3000) {
    return distributionCalcFence(sizeX, sizeY, fenceModel, true);
  }
  if (sizeY > 3000) {
    return distributionCalcFence(sizeX, sizeY, fenceModel, false, true);
  }
  return distributionCalcFence(sizeX, sizeY, fenceModel);
}
