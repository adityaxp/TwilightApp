import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { SIZES, COLORS } from "../themes";
import { useForecastSheetPosition } from "../context/ForecastSheetContext";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

export const HomeBackground = () => {
  const smokeHeight = SIZES.height * 0.6;
  const smokeOffsetY = SIZES.height * 0.4;
  const animatedPosition = useForecastSheetPosition();
  const AnimatedImgBkg = Animated.createAnimatedComponent(ImageBackground);
  const AnimatedCanvas = Animated.createAnimatedComponent(Canvas);
  const leftBkgColor = useSharedValue("#2E335A");
  const rightBkgColor = useSharedValue("#1C1B33");
  const bkgColors = useDerivedValue(() => {
    if (Platform.OS === "ios") {
      leftBkgColor.value = interpolateColor(
        animatedPosition.value,
        [0, 1],
        ["#2E335A", "#422E5A"]
      );
    } else {
      leftBkgColor.value = animatedPosition.value > 0.5 ? "#422E5A" : "#2E335A";
    }

    return [leftBkgColor.value, rightBkgColor.value];
  });
  const animatedImgBkgStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, -SIZES.height],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });
  const animatedCanvasSmokeStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedPosition.value,
        [0, 0.1],
        [1, 0],
        Extrapolation.CLAMP
      ),
    };
  });
  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={SIZES.width} height={SIZES.height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(SIZES.width, SIZES.height)}
            colors={[COLORS.primaryColor, COLORS.secondaryColor]}
          />
        </Rect>
      </Canvas>
      <AnimatedImgBkg
        source={require("../../assets/home/Background.png")}
        resizeMode="cover"
        style={[{ height: "100%" }, animatedImgBkgStyles]}
      ></AnimatedImgBkg>
    </View>
  );
};

const styles = StyleSheet.create({
  houseImage: {
    width: SIZES.width,
    height: SIZES.width,
    ...StyleSheet.absoluteFillObject,
    top: "36%",
  },
});

{
  /* <AnimatedCanvas
          style={[
            {
              height: smokeHeight,
              ...StyleSheet.absoluteFillObject,
              top: smokeOffsetY,
            },
            animatedCanvasSmokeStyles,
          ]}
        >
          <Rect x={0} y={0} width={SIZES.width} height={smokeHeight}>
            <LinearGradient
              start={vec(SIZES.width / 2, 0)}
              end={vec(SIZES.width / 2, smokeHeight)}
              colors={["rgba(58,63,84,0)", "rgba(58,63,84,1)"]}
              positions={[-0.02, 0.54]}
            />
          </Rect>
        </AnimatedCanvas> */
}
{
  /* <Image
          source={require("../../assets/home/House.png")}
          resizeMode="cover"
          style={styles.houseImage}
        /> */
}
