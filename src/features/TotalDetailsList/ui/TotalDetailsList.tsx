import { useShallow } from 'zustand/react/shallow';

import { cn } from '@/shared/helpers';
import { useFence } from '@/shared/hooks/useFence/useFence';
import { Flex, HStack, VStack, Text, Heading } from '@/shared/ui';

import style from './TotalDetailsList.module.scss';

interface TotalDetailProps {
  isMobile: boolean;
}

export const TotalDetailsList = (props: TotalDetailProps) => {
  const { isMobile } = props;

  const detailsList = useFence(
    useShallow((state) => ({
      Frame25: state.Frame25,
      Frame20: state.Frame20,
      Pattern25: state.Pattern25,
      Pattern20: state.Pattern20,
      Pattern15: state.Pattern15,
    })),
  );

  return (
    <Flex
      max
      className={cn('total', style.totalDetailsList)}
      direction={isMobile ? 'column' : 'row'}
      gap="32"
    >
      <VStack max gap="16">
        <Heading align="center" like="h2">
          КАРКАС
        </Heading>
        <HStack max gap="32" justify="center">
          <VStack gap="8">
            <Heading underline like="h2">
              25&nbsp;X&nbsp;25
            </Heading>
            {detailsList.Frame25.map((el, i) => (
              <Text key={i} size="lg">
                {el[0]}&nbsp;X&nbsp;{el[1]}
              </Text>
            ))}
          </VStack>
          <VStack gap="8">
            <Heading underline like="h2">
              20&nbsp;X&nbsp;20
            </Heading>
            {detailsList.Frame20.map((el, i) => (
              <Text key={i} size="lg">
                {el[0]}&nbsp;X&nbsp;{el[1]}
              </Text>
            ))}
          </VStack>
        </HStack>
      </VStack>
      <VStack max gap="16">
        <Heading align="center" like="h2">
          РИСУНОК
        </Heading>
        <HStack max gap="32" justify="center">
          <VStack gap="8">
            <Heading underline like="h2">
              25&nbsp;X&nbsp;25
            </Heading>
            {detailsList.Pattern25.map((el, i) => (
              <Text key={i} size="lg">
                {el[0]}&nbsp;X&nbsp;{el[1]}
              </Text>
            ))}
          </VStack>
          <VStack gap="8">
            <Heading underline like="h2">
              20&nbsp;X&nbsp;20
            </Heading>
            {detailsList.Pattern20.map((el, i) => (
              <Text key={i} size="lg">
                {el[0]}&nbsp;X&nbsp;{el[1]}
              </Text>
            ))}
          </VStack>
          <VStack gap="8">
            <Heading underline like="h2">
              15&nbsp;X&nbsp;15
            </Heading>
            {detailsList.Pattern15.map((el, i) => (
              <Text key={i} size="lg">
                {el[0]}&nbsp;X&nbsp;{el[1]}
              </Text>
            ))}
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};
