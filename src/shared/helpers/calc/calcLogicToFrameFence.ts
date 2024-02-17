import type { SectionCount } from './types/types';

import { fenceElementsCount } from '../support/fenceElementsCount';
import { lengthCalc } from '../support/lengthCalc';

export interface ModelFrameSizes {
  sideX: number;
  sideY: number;
  gate1: number;
  gate2: number | false;
  tube: number;
  countX: SectionCount;
  countY: SectionCount;
  fenceVariant: 'ModelFrame';
}

export function calcLogicToFrameFence(
  lengthX: number,
  lengthY: number,
  pillar: number,
  tube: number,
  isBigX: boolean,
  isBigY: boolean,
): ModelFrameSizes {
  const {
    lockCountX,
    divCountX,
    pilarCountX,
    lockCountY,
    divCountY,
    pilarCountY,
  } = fenceElementsCount(isBigX, isBigY);

  const sideX = lengthCalc(lengthX, pillar, pilarCountX, lockCountX, divCountX);
  const sideY = lengthCalc(lengthY, pillar, pilarCountY, lockCountY, divCountY);

  return {
    fenceVariant: 'ModelFrame',
    sideX,
    sideY,

    gate1: lengthX >= 3400 ? sideX : lengthX - pillar * 3 - 510,
    gate2: lengthX >= 3400 ? lengthX - pillar * 4 - 525 - sideX : false,

    tube,

    countX: isBigX ? 2 : 1,
    countY: isBigY ? 2 : 1,
  };
}
