import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../themes";
import ArcComponent from "./elements/ArcComponent";
import TabBarItems from "./elements/TabBarItems";
import { BlurView } from "expo-blur";
import { useForecastSheetPosition } from "../../context/ForecastSheetContext";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const WeatherTabBar = () => {
  const tabBarHeight: any = 100;
  const animatedPosition = useForecastSheetPosition();
  const animatedViewStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, tabBarHeight + 20]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        { ...StyleSheet.absoluteFillObject, top: SIZES.height - tabBarHeight },
        animatedViewStyles,
      ]}
    >
      <BlurView
        intensity={0}
        tint="dark"
        style={{
          ...StyleSheet.absoluteFillObject,
          height: tabBarHeight,
        }}
      >
        <ArcComponent height={tabBarHeight} width={SIZES.width} />
        <TabBarItems />
      </BlurView>
    </Animated.View>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
