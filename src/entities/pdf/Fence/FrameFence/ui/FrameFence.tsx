import { Text, StyleSheet, View } from '@react-pdf/renderer';

import type { ModelFrameSizes } from '@/shared/helpers';

const styles = StyleSheet.create({
  firstValues: {
    paddingRight: 10,
  },
  values: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    paddingBottom: 5,
    textDecoration: 'underline',
  },
});

type FrameFenceProps = ModelFrameSizes;

export const FrameFence = (props: FrameFenceProps) => {
  const { countX, countY, sideX, sideY, tube, gate1, gate2 } = props;

  return (
    <View style={styles.values}>
      <View>
        <Text style={styles.heading}>
          {tube} X {tube}
        </Text>
        <Text>
          {sideY} X {4 * countY}
        </Text>
        <Text>
          {sideX} X {2 * countX}
        </Text>
        <Text>{gate1} X 2</Text>
        {gate2 && <Text>{gate2} X 2</Text>}
      </View>
    </View>
  );
};
