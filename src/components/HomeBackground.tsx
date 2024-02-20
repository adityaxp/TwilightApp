import { ImageBackground, View, StyleSheet } from "react-native";
import React from "react";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { SIZES, COLORS } from "../themes";

export const HomeBackground = () => {
  const smokeHeight = SIZES.height * 0.6;
  const smokeOffsetY = SIZES.height * 0.4;
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
      <ImageBackground
        source={require("../../assets/home/Background.png")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <Canvas
          style={{
            height: smokeHeight,
            ...StyleSheet.absoluteFillObject,
            top: smokeOffsetY,
          }}
        >
          <Rect x={0} y={0} width={SIZES.width} height={smokeHeight}>
            <LinearGradient
              start={vec(SIZES.width / 2, 0)}
              end={vec(SIZES.width / 2, smokeHeight)}
              colors={["rgba(58, 63, 84, 0)", "rgba(58, 63, 81, 1)"]}
              positions={[-0.02, 0.54]}
            />
          </Rect>
        </Canvas>
      </ImageBackground>
    </View>
  );
};
