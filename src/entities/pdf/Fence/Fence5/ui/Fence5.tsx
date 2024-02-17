import { Text, StyleSheet, View } from '@react-pdf/renderer';

import type { ModelSimpleSizes } from '@/shared/helpers';

const styles = StyleSheet.create({
  page: {},
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

export const Fence5 = (props: ModelSimpleSizes) => {
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

  return (
    <View style={styles.values}>
      <View>
        <Text style={styles.heading}>
          {tubeInside} X {tubeInside}
        </Text>
        <Text>
          {insideSideY} X {4 * countY}
        </Text>
        <Text>
          {insideSideX} X {2 * countX}
        </Text>
        <Text>{insideGate1} X 2</Text>
        {insideGate2 && <Text>{insideGate2} X 2</Text>}
      </View>
    </View>
  );
};
