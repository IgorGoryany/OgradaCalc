import type { SectionCount } from './types/types';

import { fenceElementsCount } from '../support/fenceElementsCount';
import { lengthCalc } from '../support/lengthCalc';

export interface ModelSimpleSizes {
  sideX: number;
  sideY: number;

  gate1: number;
  gate2: number | false;

  insideSideX: number;

  insideSideY: number;

  insideGate1: number;
  insideGate2: number | false;

  tube: number;
  tubeInside: number;

  countX: SectionCount;
  countY: SectionCount;
  fenceVariant: 'ModelSimple';
}

export function calcLogicToSimpleFence(
  lengthX: number,
  lengthY: number,
  pillar: number,
  tube: number,
  tubeInside: number,
  isBigX: boolean,
  isBigY: boolean,
): ModelSimpleSizes {
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
    fenceVariant: 'ModelSimple',
    sideX,
    sideY,

    gate1: lengthX >= 3400 ? sideX : lengthX - pillar * 3 - 510,
    gate2: lengthX >= 3400 ? lengthX - pillar * 4 - 525 - sideX : false,

    insideSideX: sideX - tube,

    insideSideY: sideY - tube,

    insideGate1: lengthX >= 3400 ? sideX - tube : lengthX - pillar * 3 - 510,
    insideGate2: lengthX >= 3400 ? lengthX - pillar * 4 - 525 - sideX : false,

    tube,
    tubeInside,

    countX: isBigX ? 2 : 1,
    countY: isBigY ? 2 : 1,
  };
}
