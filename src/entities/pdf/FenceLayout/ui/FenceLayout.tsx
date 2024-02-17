import { StyleSheet, View } from '@react-pdf/renderer';

import type { FenceLayoutProps } from '@/shared/types/types';

import { Sizes } from '../Sizes/Sizes';

type FenceLayoutPdfProps = Omit<
  FenceLayoutProps,
  'onDelete' | 'id' | 'number' | 'isMobile'
>;

const styles = StyleSheet.create({
  fenceLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sep: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginTop: 5,
  },
});

export const FenceLayoutPdf = (props: FenceLayoutPdfProps) => {
  const { children, image, lengthX, lengthY, model } = props;

  return (
    <View>
      <View style={styles.fenceLayout} wrap={false}>
        <Sizes image={image} model={model} sideX={lengthX} sideY={lengthY} />
        {children}
      </View>
      <View style={styles.sep} />
    </View>
  );
};
