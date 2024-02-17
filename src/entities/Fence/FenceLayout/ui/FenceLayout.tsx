import { useCallback } from 'react';

import type { FenceLayoutProps } from '@/shared/types/types';
import { Button, Flex, Text } from '@/shared/ui';

import grandStyles from '../../styles/GrandStyles.module.scss';
import { Sizes } from '../Sizes/Sizes';

export const FenceLayout = (props: FenceLayoutProps) => {
  const {
    id,
    isLeft,
    model,
    number,
    image,
    isMobile,
    lengthX,
    lengthY,
    onDelete,
    children,
  } = props;

  const onClose = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);

  return (
    <>
      <Flex
        max
        align="start"
        className={grandStyles.result}
        direction={isMobile ? 'column' : 'row'}
        gap={isMobile ? '32' : '0'}
        justify="between"
      >
        <Text bold className={grandStyles.number} size="vlg" Tag="span">
          {number}.
        </Text>
        <Button
          className={grandStyles.close}
          variant="close"
          onClick={onClose}
        />
        <Flex
          align="center"
          className={grandStyles.scheme}
          direction={isMobile ? 'column' : 'row'}
          gap="8"
        >
          <Sizes
            image={image}
            isLeft={isLeft}
            sideX={lengthX}
            sideY={lengthY}
          />
          <Text
            className={grandStyles.model}
            color="secondary"
            size="vlg"
            Tag="span"
          >
            №&nbsp;{model}
          </Text>
        </Flex>
        {children}
      </Flex>
      <hr />
    </>
  );
};
