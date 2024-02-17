import { standardRectangle } from '@/shared/consts';

import { fenceElementsCount } from '../support/fenceElementsCount';
import { lengthCalc } from '../support/lengthCalc';

type InsideTube = [number, number, number, number] | [number, number, number];

export interface Model15And25Sizes {
  sideX: number;
  sideY: number;

  gate1: number | false;
  gate2: number | false;

  sideXRectangle: number;
  halfXRectangle: number | undefined;
  sideXJumper: number;

  sideYRectangle: number;
  halfYRectangle: number | undefined;
  sideYJumper: number;

  rectangleSectionGate1: number | false;
  rectangleInsideGate1: number | false;

  rectangleSectionGate2: number | false;
  rectangleInsideGate2: number | false;

  tube: number;
  tubeInside: number;

  rectangleCountX: number;
  rectangleCountY: number;

  countX: number;
  countY: number;

  gateCount: number;
  rectangleGateCount: number;
  fenceVariant: 'Model15And25';
}

function supportInsideCalcLogic(
  length: number,
  tube: number,
  jumper: number,
  standardRectangle: number[],
): InsideTube {
  let jumperLength = Infinity;
  let rectangleLength = 0;

  for (let i = 0; i < standardRectangle.length; i++) {
    const jumperValue = (length - tube - standardRectangle[i] * 1.5) / 2;
    if (
      Math.abs(jumperValue - jumper) <= Math.abs(jumperLength - jumper) &&
      jumperValue >= 0
    ) {
      jumperLength = jumperValue;
      rectangleLength = standardRectangle[i];
    }
    if (jumperValue === jumper) {
      return [
        rectangleLength,
        Math.round(jumperLength),
        1,
        rectangleLength / 2,
      ];
    }
  }
  return [rectangleLength, Math.round(jumperLength), 1, rectangleLength / 2];
}
function insideCalcLogic(
  length: number,
  tube: number,
  jumper: number,
  isBig: boolean,
): InsideTube {
  let jumperLength = Infinity;
  let rectangleLength = 0;
  let rectangleCount = 2;

  if (length < 1665 && isBig) {
    return supportInsideCalcLogic(length, tube, jumper, standardRectangle);
  }

  if (length <= 1540 && !isBig) {
    return [length - tube - 2 * jumper, jumper, 1];
  }

  if (length >= 2800) {
    rectangleCount = 3;
  }

  for (let i = 0; i < standardRectangle.length; i++) {
    const jumperValue =
      (length - tube - standardRectangle[i] * rectangleCount) /
      (rectangleCount + 1);
    if (
      Math.abs(jumperValue - jumper) <= Math.abs(jumperLength - jumper) &&
      jumperValue >= 0
    ) {
      jumperLength = jumperValue;
      rectangleLength = standardRectangle[i];
    }
    if (jumperValue === jumper) {
      return [rectangleLength, Math.round(jumperLength), rectangleCount];
    }
  }
  return [rectangleLength, Math.round(jumperLength), rectangleCount];
}

export function calcLogicTo15And25Fence(
  lengthX: number,
  lengthY: number,
  pillar: number,
  tube: number,
  tubeInside: number,
  jumper: number,
  isBigX: boolean,
  isBigY: boolean,
): Model15And25Sizes {
  const {
    lockCountX,
    divCountX,
    pilarCountX,
    lockCountY,
    divCountY,
    pilarCountY,
  } = fenceElementsCount(isBigX, isBigY);
  const gateCount = lengthX >= 3400 ? 1 : 0;

  const sideX = lengthCalc(lengthX, pillar, pilarCountX, lockCountX, divCountX);
  const sideY = lengthCalc(lengthY, pillar, pilarCountY, lockCountY, divCountY);

  const [sideXRectangle, sideXJumper, rectangleCountX, halfXRectangle] =
    insideCalcLogic(sideX, tube, jumper, isBigX);
  const [sideYRectangle, sideYJumper, rectangleCountY, halfYRectangle] =
    insideCalcLogic(sideY, tube, jumper, isBigY);

  let rectangleGateCount = rectangleCountX - 1;
  if (rectangleCountX === 1 && lengthX - 510 >= 1600) {
    rectangleGateCount = 1;
  }
  if (rectangleCountX === 1 && lengthX > 3000 && !gateCount) {
    rectangleGateCount = 2;
  }

  const sizes: Model15And25Sizes = {
    fenceVariant: 'Model15And25',
    sideX,
    sideY,

    gate1: gateCount ? false : lengthX - pillar * 3 - 510,
    gate2: gateCount ? lengthX - pillar * 4 - 525 - sideX : false,

    sideXRectangle,
    halfXRectangle,
    sideXJumper,

    sideYRectangle,
    halfYRectangle,
    sideYJumper,

    rectangleSectionGate1: gateCount
      ? false
      : lengthX -
        pillar * 3 -
        510 -
        sideXRectangle * rectangleGateCount -
        sideXJumper * (rectangleGateCount + 1),
    rectangleInsideGate1: gateCount ? false : 500 - tube * 2 - sideXJumper,

    // eslint-disable-next-line no-nested-ternary
    rectangleSectionGate2: gateCount
      ? halfXRectangle
        ? lengthX - pillar * 4 - 525 - sideX - halfXRectangle - sideXJumper
        : lengthX -
          pillar * 4 -
          525 -
          sideX -
          sideXRectangle * rectangleGateCount -
          sideXJumper * (rectangleGateCount + 1)
      : false,
    rectangleInsideGate2: gateCount ? 500 - tube * 2 - sideXJumper : false,

    tube,
    tubeInside,

    rectangleCountX,
    rectangleCountY,

    countX: isBigX ? 2 : 1,
    countY: isBigY ? 2 : 1,

    gateCount,
    rectangleGateCount,
  };

  return sizes;
}

// todo Короче думай!
// todo адо переписать логику по работе с rectangleSectionGate2
