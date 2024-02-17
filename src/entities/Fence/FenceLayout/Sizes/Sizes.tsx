import { memo } from 'react';

import { fenceSideChoose, sizesSupp } from '@/shared/helpers';
import { Text } from '@/shared/ui';

import grandStyles from '../../styles/GrandStyles.module.scss';

interface SizesProps {
  sideX: number;
  sideY: number;
  image: string;
  isLeft: boolean;
}

export const Sizes = memo(function Sizes(props: SizesProps) {
  const { sideX, sideY, image, isLeft } = props;

  const isReverse = sizesSupp(image);
  const className = fenceSideChoose(
    isReverse,
    isLeft,
    grandStyles.reverseX,
    grandStyles.reverse,
  );

  return isReverse ? (
    <>
      <Text className={grandStyles.top} size="vlg" Tag="span">
        {sideY}
      </Text>
      <Text className={grandStyles.left} size="vlg" Tag="span">
        {sideX}
      </Text>
      <img alt="Ограда" className={className} src={image} />
    </>
  ) : (
    <>
      <Text className={grandStyles.top} size="vlg" Tag="span">
        {sideX}
      </Text>
      <Text className={grandStyles.left} size="vlg" Tag="span">
        {sideY}
      </Text>
      <img alt="Ограда" className={className} src={image} />
    </>
  );
});
