import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../themes";
import ArcComponent from "./elements/ArcComponent";

const WeatherTabBar = () => {
  const tabBarHeight: any = 88;

  return (
    <View
      style={{
        height: tabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: SIZES.height - tabBarHeight,
      }}
    >
      <ArcComponent height={tabBarHeight} width={SIZES.width} />
    </View>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
