import { memo } from 'react';

import type { DetailsList, Model35Sizes } from '@/shared/helpers';
import type { DetailsListArg } from '@/shared/hooks';
import { useInitialDetailListEffect } from '@/shared/hooks';
import { HStack, Heading, VStack, Text } from '@/shared/ui';

import grandStyles from '../../styles/GrandStyles.module.scss';

export const Fence35 = memo(function Fence35(props: Model35Sizes) {
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
    insideSideXCount,
    insideSideY,
    insideSideYCount,
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
      newValues: [insideSideY, 4 * countY * insideSideYCount],
    },
    {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [insideSideX, 2 * countY * insideSideYCount],
    },
    {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [insideGate1, 2],
    },
    insideGate2 && {
      key: `Pattern${tubeInside}` as keyof DetailsList,
      newValues: [insideGate2, 2],
    },
  ];

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
          {insideSideY} X {4 * countY * insideSideYCount}
        </Text>
        <Text size="lg">
          {insideSideX} X {2 * countX * insideSideXCount}
        </Text>
        <Text size="lg">{insideGate1} X 2</Text>
        {insideGate2 && <Text size="lg">{insideGate2} X 2</Text>}
      </VStack>
    </HStack>
  );
});
