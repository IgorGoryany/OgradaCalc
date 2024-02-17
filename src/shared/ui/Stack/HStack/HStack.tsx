import type { FC } from 'react';

import type { FlexProps } from '../Flex/Flex';
import { Flex } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack: FC<HStackProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Flex {...props} direction="row" />
);
