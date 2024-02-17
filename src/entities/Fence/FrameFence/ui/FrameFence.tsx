import { memo } from 'react';

import type { DetailsList, ModelFrameSizes } from '@/shared/helpers';
import type { DetailsListArg } from '@/shared/hooks';
import { useInitialDetailListEffect } from '@/shared/hooks';
import { HStack, Heading, VStack, Text } from '@/shared/ui';

import grandStyles from '../../styles/GrandStyles.module.scss';

type FrameFenceProps = ModelFrameSizes;

export const FrameFence = memo(function FrameFence(props: FrameFenceProps) {
  const { countX, countY, sideX, sideY, tube, gate1, gate2 } = props;

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
        {gate2 && <Text size="lg">{gate2} X 2</Text>}
      </VStack>
    </HStack>
  );
});
