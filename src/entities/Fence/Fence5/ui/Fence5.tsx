import { memo } from 'react';

import type { DetailsList, ModelSimpleSizes } from '@/shared/helpers';
import type { DetailsListArg } from '@/shared/hooks';
import { useInitialDetailListEffect } from '@/shared/hooks';
import { HStack, Heading, Text, VStack } from '@/shared/ui';

import grandStyles from '../../styles/GrandStyles.module.scss';

export const Fence5 = memo(function Fence5(props: ModelSimpleSizes) {
  //
  const {
    countX,
    countY,

    tubeInside,
    insideGate1,
    insideGate2,
    insideSideX,
    insideSideY,
  } = props;

  const allDetails: (false | DetailsListArg | 0 | undefined)[] = [
    {
      key: `Frame${tubeInside}` as keyof DetailsList,
      newValues: [insideSideY, 4 * countY],
    },
    {
      key: `Frame${tubeInside}` as keyof DetailsList,
      newValues: [insideSideX, 2 * countX],
    },
    {
      key: `Frame${tubeInside}` as keyof DetailsList,
      newValues: [insideGate1, 2],
    },

    insideGate2 && {
      key: `Frame${tubeInside}` as keyof DetailsList,
      newValues: [insideGate2, 2],
    },
  ];

  useInitialDetailListEffect(...allDetails);
  return (
    <HStack className={grandStyles.values} gap="32">
      <VStack gap="8">
        <Heading underline className={grandStyles.heading}>
          {tubeInside} X {tubeInside}
        </Heading>
        <Text size="lg">
          {insideSideY} X {4 * countY}
        </Text>
        <Text size="lg">
          {insideSideX} X {2 * countX}
        </Text>
        <Text size="lg">{insideGate1} X 2</Text>
        {insideGate2 && <Text size="lg">{insideGate2} X 2</Text>}
      </VStack>
    </HStack>
  );
});
