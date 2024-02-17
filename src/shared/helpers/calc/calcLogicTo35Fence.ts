import type { SectionCount } from './types/types';

import { fenceElementsCount } from '../support/fenceElementsCount';
import { lengthCalc } from '../support/lengthCalc';

export interface Model35Sizes {
  sideX: number;
  sideY: number;
  gate1: number;
  gate2: number | false;
  insideSideX: number;
  insideSideXCount: SectionCount;
  insideSideY: number;
  insideSideYCount: SectionCount;
  insideGate1: number;
  insideGate1Count: SectionCount;
  insideGate2: number | false;
  insideGate2Count: SectionCount | 0;
  tube: number;
  tubeInside: number;
  countX: SectionCount;
  countY: SectionCount;
  gateCount: SectionCount;
  fenceVariant: 'Model35';
}

export function calcLogicTo35Fence(
  lengthX: number,
  lengthY: number,
  pillar: number,
  tube: number,
  tubeInside: number,
  isBigX: boolean,
  isBigY: boolean,
): Model35Sizes {
  const {
    lockCountX,
    divCountX,
    pilarCountX,
    lockCountY,
    divCountY,
    pilarCountY,
  } = fenceElementsCount(isBigX, isBigY);

  const insideCalc = (side: number) =>
    side >= 2700 ? (side - 460 * 3 - tube) / 2 : side - 460 * 2 - tube;

  const sideX = lengthCalc(lengthX, pillar, pilarCountX, lockCountX, divCountX);
  const sideY = lengthCalc(lengthY, pillar, pilarCountY, lockCountY, divCountY);

  const insideSideX = insideCalc(sideX);
  const insideSideY = insideCalc(sideY);

  const gate1 = lengthX >= 3400 ? sideX : lengthX - pillar * 3 - 510;
  const gate2 = lengthX >= 3400 ? lengthX - pillar * 4 - 525 - sideX : false;

  const insideSideXCount = sideX >= 2700 ? 2 : 1;
  // interface Model35Sizes {
  //   sideX: number;
  //   sideY: number;
  //   gate1: number;
  //   gate2: number | boolean;
  //   insideSideX: number;
  //   insideSideY: number;
  //   insideGate1: number;
  //   insideGate2: number | boolean;
  //   tube: number;
  //   tubeInside: number;
  //   countX: SectionCount;
  //   countY: SectionCount;
  // }

  return {
    fenceVariant: 'Model35',
    sideX,
    sideY,

    gate1,
    gate2,

    insideSideX,
    insideSideXCount,

    insideSideY,
    insideSideYCount: sideY >= 2700 ? 2 : 1,

    insideGate1:
      lengthX >= 3400
        ? insideSideX
        : gate1 >= 2240
          ? (gate1 - 460 * 2) / 2
          : gate1 - 460,

    insideGate1Count:
      lengthX >= 3400 ? insideSideXCount : gate1 >= 2240 ? 2 : 1,

    insideGate2:
      lengthX >= 3400
        ? gate2 && gate2 >= 2240
          ? (gate2 - 460 * 2) / 2
          : lengthX - pillar * 4 - 460 - 525 - sideX
        : false,

    insideGate2Count: lengthX >= 3400 ? (gate2 && gate2 >= 2240 ? 2 : 1) : 0,

    tube,
    tubeInside,

    countX: isBigX ? 2 : 1,
    countY: isBigY ? 2 : 1,
    gateCount: lengthX >= 3400 ? 2 : 1,
  };
}
