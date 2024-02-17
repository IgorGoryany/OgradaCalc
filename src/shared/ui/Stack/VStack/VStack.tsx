import type { FC } from 'react';

import type { FlexProps } from '../Flex/Flex';
import { Flex } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: FC<VStackProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Flex {...props} direction="column" />
);
