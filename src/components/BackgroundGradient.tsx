import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AnimatedProp,
  Canvas,
  Color,
  LinearGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";
import { SIZES } from "../themes";
interface BackgroundGradientProps {
  colors?: AnimatedProp<Color[]>;
}
const BackgroundGradient = ({
  colors = ["#2E335A", "#1C1B33"],
}: BackgroundGradientProps) => {
  return (
    <Canvas style={{ ...StyleSheet.absoluteFillObject }}>
      <Rect x={0} y={0} width={SIZES.width} height={SIZES.height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(SIZES.width, SIZES.height)}
          colors={colors}
        />
      </Rect>
    </Canvas>
  );
};

export default BackgroundGradient;

const styles = StyleSheet.create({});
