import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../themes";
import ArcComponent from "./elements/ArcComponent";
import TabBarItems from "./elements/TabBarItems";

const WeatherTabBar = () => {
  const tabBarHeight: any = 100;

  return (
    <View
      style={{
        height: tabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: SIZES.height - tabBarHeight,
      }}
    >
      <ArcComponent height={tabBarHeight} width={SIZES.width} />
      <TabBarItems />
    </View>
  );
};

export default WeatherTabBar;

const styles = StyleSheet.create({});
