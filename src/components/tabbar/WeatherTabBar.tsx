import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../themes";
import ArcComponent from "./elements/ArcComponent";
import TabBarItems from "./elements/TabBarItems";
import { BlurView } from "expo-blur";

const WeatherTabBar = () => {
  const tabBarHeight: any = 100;

  return (
    <BlurView
      intensity={50}
      tint="dark"
      style={{
        height: tabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: SIZES.height - tabBarHeight,
      }}
    >
      <ArcComponent height={tabBarHeight} width={SIZES.width} />
      <TabBarItems />
    </BlurView>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
