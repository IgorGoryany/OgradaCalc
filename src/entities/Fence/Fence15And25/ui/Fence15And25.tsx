import { memo } from 'react';

import type { DetailsList, Model15And25Sizes } from '@/shared/helpers';
import type { DetailsListArg } from '@/shared/hooks';
import { useInitialDetailListEffect } from '@/shared/hooks';
import { HStack, Heading, Text, VStack } from '@/shared/ui';

import grandStyles from '../../styles/GrandStyles.module.scss';

export const Fence15And25 = memo(function Fence15And25(
  props: Model15And25Sizes,
) {
  const {
    countX,
    countY,
    gate1,
    gate2,
    gateCount,
    halfYRectangle,
    halfXRectangle,
    rectangleCountX,
    rectangleCountY,
    sideX,
    sideY,
    tube,
    rectangleInsideGate1,
    rectangleInsideGate2,
    rectangleGateCount,
    rectangleSectionGate1,
    rectangleSectionGate2,
    sideXJumper,
    sideXRectangle,
    sideYJumper,
    sideYRectangle,
    tubeInside,
  } = props;

  const allDetails: (false | DetailsListArg | 0 | undefined)[] = [
    {
      key: `Frame${tube}` as keyof DetailsList,
      newValues: [sideY, 4 * countY],
    },
    {
      key: `Frame${tube}` as keyof DetailsList,
      newValues: [sideX, 2 * (countX + gateCount)],
    },
    gate1 && {
      key: `Frame${tube}` as keyof DetailsList,
      newValues: [gate1, 2],
    },
    gate2 && {
      key: `Frame${tube}` as keyof DetailsList,
      newValues: [gate2, 2],
    },
    {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [sideYRectangle, rectangleCountY * 4 * countY],
    },
    halfYRectangle && {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [halfYRectangle, 8],
    },
    {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [sideYJumper, (rectangleCountY + 1) * countY * 2],
    },
    {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [
        sideXRectangle,
        rectangleCountX * 2 * (countX + gateCount) + rectangleGateCount * 2,
      ],
    },
    halfXRectangle && {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [halfXRectangle, 4 + gateCount * 4],
    },
    {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [
        sideXJumper,
        (rectangleCountX + 1) * (countX + gateCount) + rectangleGateCount + 2,
      ],
    },
  ];

  if (rectangleSectionGate1 && rectangleInsideGate1) {
    allDetails.push({
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [rectangleSectionGate1, 2],
    });
    allDetails.push({
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [rectangleInsideGate1, 2],
    });
  }
  if (rectangleSectionGate2 && rectangleInsideGate2) {
    allDetails.push({
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [rectangleSectionGate2, 2],
    });
    allDetails.push({
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [rectangleInsideGate2, 2],
    });
  }

  useInitialDetailListEffect(...allDetails);

  return (
    <HStack className={grandStyles.values} gap="32">
      <VStack gap="8">
        <Heading underline className={grandStyles.heading}>
          {tube} X {tube}
        </Heading>
        <Text size="lg">
          {sideY} X {4 * countY}
        </Text>
        <Text size="lg">
          {sideX} X {2 * (countX + gateCount)}
        </Text>
        {gate1 && <Text size="lg"> {gate1} X 2</Text>}
        {gate2 && <Text size="lg"> {gate2} X 2</Text>}
      </VStack>

      <VStack gap="8">
        <Heading underline className={grandStyles.heading}>
          {tubeInside} X {tubeInside}
        </Heading>

        <Text size="lg">
          {sideYRectangle} X {rectangleCountY * 4 * countY}
        </Text>

        {halfYRectangle && <Text size="lg">{halfYRectangle} X 8</Text>}

        <Text size="lg">
          {sideYJumper} X {(rectangleCountY + 1) * countY * 2}
        </Text>
        <br />
        <Text size="lg">
          {sideXRectangle} X{' '}
          {rectangleCountX * 2 * (countX + gateCount) + rectangleGateCount * 2}
        </Text>

        {halfXRectangle && (
          <Text size="lg">
            {halfXRectangle} X {4 + gateCount * 4}
          </Text>
        )}

        <Text size="lg">
          {sideXJumper} X
          {(rectangleCountX + 1) * (countX + gateCount) +
            rectangleGateCount +
            2}
        </Text>
        <br />
        {rectangleSectionGate1 ? (
          <>
            <Text size="lg">{rectangleSectionGate1} X 2</Text>
            <Text size="lg">{rectangleInsideGate1} X 2</Text>
          </>
        ) : (
          <>
            <Text size="lg">{rectangleSectionGate2} X 2</Text>
            <Text size="lg">{rectangleInsideGate2} X 2</Text>
          </>
        )}
      </VStack>
    </HStack>
  );
});
