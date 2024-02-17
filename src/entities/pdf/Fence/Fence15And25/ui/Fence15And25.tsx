import { Text, StyleSheet, View } from '@react-pdf/renderer';

import type { Model15And25Sizes } from '@/shared/helpers';

const styles = StyleSheet.create({
  firstValues: {
    paddingRight: 10,
  },
  values: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  heading: {
    paddingBottom: 5,
    textDecoration: 'underline',
  },
});

export const Fence15And25 = (props: Model15And25Sizes) => {
  const {
    countX,
    countY,
    gate1,
    gate2,
    gateCount,
    halfYRectangle,
    halfXRectangle,
    rectangleCountX,
    rectangleCountY,
    sideX,
    sideY,
    tube,
    rectangleInsideGate1,
    rectangleInsideGate2,
    rectangleGateCount,
    rectangleSectionGate1,
    rectangleSectionGate2,
    sideXJumper,
    sideXRectangle,
    sideYJumper,
    sideYRectangle,
    tubeInside,
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
          {sideX} X {2 * (countX + gateCount)}
        </Text>
        {gate1 && <Text>{gate1} X 2</Text>}
        {gate2 && <Text>{gate2} X 2</Text>}
      </View>

      <View>
        <Text style={styles.heading}>
          {tubeInside} X {tubeInside}
        </Text>

        <Text>
          {sideYRectangle} X {rectangleCountY * 4 * countY}
        </Text>

        {halfYRectangle && <Text>{halfYRectangle} X 8</Text>}

        <Text>
          {sideYJumper} X {(rectangleCountY + 1) * countY * 2}
        </Text>
        <Text>
          {sideXRectangle} X{' '}
          {rectangleCountX * 2 * (countX + gateCount) + rectangleGateCount * 2}
        </Text>

        {halfXRectangle && (
          <Text>
            {halfXRectangle} X {4 + gateCount * 4}
          </Text>
        )}

        <Text>
          {sideXJumper} X
          {(rectangleCountX + 1) * (countX + gateCount) +
            rectangleGateCount +
            2}
        </Text>
        {rectangleSectionGate1 ? (
          <>
            <Text>{rectangleSectionGate1} X 2</Text>
            <Text>{rectangleInsideGate1} X 2</Text>
          </>
        ) : (
          <>
            <Text>{rectangleSectionGate2} X 2</Text>
            <Text>{rectangleInsideGate2} X 2</Text>
          </>
        )}
      </View>
    </View>
  );
};
