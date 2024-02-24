import { memo } from 'react';

import type { DetailsList, ModelSimpleSizes } from '@/shared/helpers';
import type { DetailsListArg } from '@/shared/hooks';
import { useInitialDetailListEffect } from '@/shared/hooks';
import { HStack, Heading, VStack, Text } from '@/shared/ui';

import grandStyles from '../../styles/GrandStyles.module.scss';

export const SimpleFence = memo((props: ModelSimpleSizes) => {
  const {
    countX,
    countY,
    gate1,
    gate2,
    sideX,
    sideY,
    tube,
    tubeInside,
    insideGate1,
    insideGate2,
    insideSideX,
    insideSideY,
  } = props;

  const allDetails: (false | DetailsListArg | 0 | undefined)[] = [
    {
      key: `Frame${tube}` as keyof DetailsList,
      newValues: [sideY, 4 * countY],
    },
    {
      key: `Frame${tube}` as keyof DetailsList,
      newValues: [sideX, 2 * countX],
    },
    {
      key: `Frame${tube}` as keyof DetailsList,
      newValues: [gate1, 2],
    },
    gate2 && {
      key: `Frame${tube}` as keyof DetailsList,
      newValues: [gate2, 2],
    },
    {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [insideSideY, 2 * countY],
    },
    {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [insideSideX, countX],
    },
    {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [insideGate1, 1],
    },
    insideGate2 && {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [insideGate2, 2],
    },
  ];

  useInitialDetailListEffect(...allDetails);

  return (
    <HStack
      max
      align="start"
      className={grandStyles.values}
      gap="32"
      justify="end"
    >
      <VStack gap="8">
        <Heading underline className={grandStyles.heading}>
          {tube} X {tube}
        </Heading>
        <Text size="lg">
          {sideY} X {4 * countY}
        </Text>
        <Text size="lg">
          {sideX} X {2 * countX}
        </Text>
        <Text size="lg">{gate1} X 2</Text>
        {gate2 && <Text size="lg"> {gate2} X 2</Text>}
      </VStack>

      <VStack gap="8">
        <Heading underline className={grandStyles.heading}>
          {tubeInside} X {tubeInside}
        </Heading>
        <Text size="lg">
          {insideSideY} X {2 * countY}
        </Text>
        <Text size="lg">
          {insideSideX} X {countX}
        </Text>
        <Text size="lg">{insideGate1} X 1</Text>
        {insideGate2 && <Text size="lg">{insideGate2} X 2</Text>}
      </VStack>
    </HStack>
  );
});
