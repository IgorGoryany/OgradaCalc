import { Text, StyleSheet, View } from '@react-pdf/renderer';

import type { ModelSimpleSizes } from '@/shared/helpers';

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

export const SimpleFence = (props: ModelSimpleSizes) => {
  const {
    countX,
    countY,
    gate1,
    gate2,
    sideX,
    sideY,
    tube,
    tubeInside,
    insideGate1,
    insideGate2,
    insideSideX,
    insideSideY,
  } = props;

  return (
    <View style={styles.values}>
      <View style={styles.firstValues}>
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

      <View>
        <Text style={styles.heading}>
          {tubeInside} X {tubeInside}
        </Text>
        <Text>
          {insideSideY} X {2 * countY}
        </Text>
        <Text>
          {insideSideX} X {countX}
        </Text>
        <Text>{insideGate1} X 1</Text>
        {insideGate2 && <Text>{insideGate2} X 2</Text>}
      </View>
    </View>
  );
};
