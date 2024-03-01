import {
  calcLogicTo15And25Fence,
  calcLogicTo35Fence,
  calcLogicToFrameFence,
  calcLogicToSimpleFence,
} from '../calc/entryCalcLogic';
import type { FenceModels } from '../calc/types/types';

export type AllFenceSizes =
  | ReturnType<typeof calcLogicTo15And25Fence>
  | ReturnType<typeof calcLogicTo35Fence>
  | ReturnType<typeof calcLogicToFrameFence>
  | ReturnType<typeof calcLogicToSimpleFence>;

export function distributionCalcFence(
  lengthX: number,
  lengthY: number,
  fenceModel: FenceModels,
  isBigX: boolean = false,
  isBigY: boolean = false,
): AllFenceSizes {
  if (fenceModel >= 1 && fenceModel <= 4 && fenceModel !== 3) {
    return calcLogicToSimpleFence(lengthX, lengthY, 50, 25, 25, isBigX, isBigY);
  }

  if (fenceModel === 5) {
    return calcLogicToSimpleFence(lengthX, lengthY, 40, 20, 20, isBigX, isBigY);
  }

  if (fenceModel === 6 || fenceModel === 10) {
    return calcLogicToFrameFence(lengthX, lengthY, 40, 25, isBigX, isBigY);
  }

  if (fenceModel === 14) {
    return calcLogicToSimpleFence(lengthX, lengthY, 40, 25, 25, isBigX, isBigY);
  }

  if (fenceModel === 11) {
    return calcLogicToSimpleFence(lengthX, lengthY, 40, 25, 20, isBigX, isBigY);
  }

  if (fenceModel === 15) {
    return calcLogicTo15And25Fence(
      lengthX,
      lengthY,
      40,
      25,
      25,
      240,
      isBigX,
      isBigY,
    );
  }

  if (fenceModel === 21 || fenceModel === 22) {
    return calcLogicToSimpleFence(lengthX, lengthY, 30, 20, 15, isBigX, isBigY);
  }

  if (fenceModel === 20 || fenceModel === 23 || fenceModel === 24) {
    return calcLogicToFrameFence(lengthX, lengthY, 30, 20, isBigX, isBigY);
  }

  if (fenceModel === 25) {
    return calcLogicTo15And25Fence(
      lengthX,
      lengthY,
      30,
      20,
      20,
      242,
      isBigX,
      isBigY,
    );
  }

  if (fenceModel === 32 || fenceModel === 34) {
    return calcLogicToSimpleFence(lengthX, lengthY, 25, 20, 15, isBigX, isBigY);
  }

  if (fenceModel === 35) {
    return calcLogicTo35Fence(lengthX, lengthY, 25, 20, 15, isBigX, isBigY);
  }

  if (fenceModel >= 30 && fenceModel <= 40) {
    return calcLogicToFrameFence(lengthX, lengthY, 25, 20, isBigX, isBigY);
  }
  return calcLogicToFrameFence(lengthX, lengthY, 50, 25, isBigX, isBigY);
}
