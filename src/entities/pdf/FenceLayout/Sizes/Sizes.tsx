import { Text, StyleSheet, Image, View } from '@react-pdf/renderer';

import type { FenceModels } from '@/shared/helpers';
import { isSquareImage, sizesSupp } from '@/shared/helpers';

const styles = StyleSheet.create({
  reverse: {
    transform: 'rotate3d(0, 1, 0,180deg)',
    width: 120,
    height: 90,
  },
  reverseX: {
    transform: 'rotateX(180deg)',
    width: 120,
    height: 90,
  },
  squareImage: {
    width: 120,
    height: 120,
  },
  image: {
    width: 120,
    height: 90,
  },
  rotatedText: {
    transform: 'rotate(-90deg)',
  },
  sizesSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sizes: {},
  topNumber: {},
  leftNumber: {},
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

interface SizesProps {
  sideX: number;
  sideY: number;
  image: string;
  model: FenceModels;
}

export const Sizes = (props: SizesProps) => {
  const { sideX, sideY, image, model } = props;

  const isReverse = sizesSupp(image);
  let imageStyle = styles.image;

  if (isSquareImage(image)) imageStyle = styles.squareImage;

  return isReverse ? (
    <View style={styles.sizesSection}>
      <Text style={styles.rotatedText}>{sideY}</Text>
      <View style={styles.imageWrapper}>
        <Text>{sideX}</Text>
        <Image src={image} style={imageStyle} />
      </View>
      <Text>N_{model}</Text>
    </View>
  ) : (
    <View style={styles.sizesSection}>
      <Text style={styles.rotatedText}>{sideX}</Text>
      <View style={styles.imageWrapper}>
        <Text>{sideY}</Text>
        <Image src={image} style={imageStyle} />
      </View>
      <Text>N_{model}</Text>
    </View>
  );
};
/* <View style={styles.sizesSection}>
      <Text style={styles.rotatedText}>2000</Text>
      <View>
        <Text>2500</Text>
        <Image src={img} style={styles.image} />
      </View>
    </View> */
