import { Text, StyleSheet, View } from '@react-pdf/renderer';

import type { Model35Sizes } from '@/shared/helpers';

const styles = StyleSheet.create({
  page: {},
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

export const Fence35 = (props: Model35Sizes) => {
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
    insideSideXCount,
    insideSideY,
    insideSideYCount,
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
        {gate2 && <Text> {gate2} X 2</Text>}
      </View>

      <View>
        <View style={styles.heading}>
          {tubeInside} X {tubeInside}
        </View>
        <Text>
          {insideSideY} X {4 * countY * insideSideYCount}
        </Text>
        <Text>
          {insideSideX} X {2 * countX * insideSideXCount}
        </Text>
        <Text>{insideGate1} X 2</Text>
        {insideGate2 && <Text>{insideGate2} X 2</Text>}
      </View>
    </View>
  );
};
