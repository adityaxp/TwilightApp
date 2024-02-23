import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { COLORS, SIZES } from "../../themes";
import ForecastSheetBackground from "./ForecastSheetBackground";
import ForecastControl from "./elements/ForecastControl";
import Seperator from "./elements/Seperator";
import ForecastCapsule from "../forecast/ForecastCapsule";
import { hourly, weekly } from "../../../mocks/ForecastData";
import ForecastScroll from "../forecast/ForecastScroll";
import { ForecastType } from "../../models/Weather";
import AirQualityWidget from "../forecast/widgets/AirQualityWidget";
import RainFallWidget from "../forecast/widgets/RainFallWidget";
import FeelsLikeWidget from "../forecast/widgets/FeelsLikeWidget";
import HumidityWidget from "../forecast/widgets/HumidityWidget";
import VisibilityWidget from "../forecast/widgets/VisibilityWidget";
import PressureWidget from "../forecast/widgets/PressureWidget";
import UvIndexWidget from "../forecast/widgets/UvIndexWidget";
import WindWidget from "../forecast/widgets/WindWidget";
import SunriseWidget from "../forecast/widgets/SunriseWidget";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useForecastSheetPosition } from "../../context/ForecastSheetContext";
import { useWeatherData } from "../../context/WeatherDataContext";

const ForecastSheet = () => {
  const {
    weatherData: { hourlyForecast, weeklyForecast },
  } = useWeatherData();
  const snapPoints = ["38.5%", "83%"];
  const snapPointOne = SIZES.height * (parseFloat(snapPoints[0]) / 100);
  const snapPointTwo = SIZES.height * (parseFloat(snapPoints[1]) / 100);
  const minY = SIZES.height - snapPointTwo;
  const maxY = SIZES.width - snapPointOne;
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = SIZES.height * 0.17;
  const capsulWidth = SIZES.width * 0.15;
  const widgetSize = SIZES.width / 2 - 20;
  const [selectedForecastType, setSelectedForecastType] =
    useState<ForecastType>(ForecastType.Hourly);
  const currentPosition = useSharedValue(0);
  const animatedPosition = useForecastSheetPosition();
  const translateXHourly = useSharedValue(0);
  const translateXWeekly = useSharedValue(SIZES.width);
  const animatedHourlyStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXHourly.value }],
    };
  });
  const animatedWeeklyStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateXWeekly.value }],
    };
  });
  useEffect(() => {
    if (selectedForecastType === ForecastType.Weekly) {
      translateXHourly.value = withTiming(-SIZES.width);
      translateXWeekly.value = withTiming(-SIZES.width);
    } else {
      translateXHourly.value = withTiming(0);
      translateXWeekly.value = withTiming(SIZES.width);
    }
  }, [selectedForecastType]);
  const normalizePosition = (position: number) => {
    "worklet";
    return ((position - maxY) / (maxY - minY)) * -1;
  };

  return (
    <BottomSheet
      snapPoints={snapPoints}
      handleIndicatorStyle={{
        width: 48,
        height: 5,
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={SIZES.width}
          height={snapPointOne}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <>
        <ForecastControl onPress={(type) => setSelectedForecastType(type)} />
        <Seperator width={SIZES.width} height={3} />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View style={{ flexDirection: "row" }}>
            <Animated.View style={[animatedHourlyStyles]}>
              <ForecastScroll
                capsuleWidth={capsulWidth}
                capsuleHeight={capsuleHeight}
                capsuleRadius={capsuleRadius}
                forecasts={hourlyForecast}
              />
            </Animated.View>

            <Animated.View style={[animatedWeeklyStyles]}>
              <ForecastScroll
                capsuleWidth={capsulWidth}
                capsuleHeight={capsuleHeight}
                capsuleRadius={capsuleRadius}
                forecasts={weeklyForecast}
              />
            </Animated.View>
          </View>
          <View style={{ flex: 1, paddingTop: 30, paddingBottom: widgetSize }}>
            <AirQualityWidget width={SIZES.width - 30} height={150} />

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: 15,
                gap: 10,
              }}
            >
              <UvIndexWidget width={widgetSize} height={widgetSize} />
              <WindWidget width={widgetSize} height={widgetSize} />
              <SunriseWidget width={widgetSize} height={widgetSize} />
              <RainFallWidget width={widgetSize} height={widgetSize} />
              <FeelsLikeWidget width={widgetSize} height={widgetSize} />
              <HumidityWidget width={widgetSize} height={widgetSize} />
              <VisibilityWidget width={widgetSize} height={widgetSize} />
              <PressureWidget width={widgetSize} height={widgetSize} />
            </View>
          </View>
        </ScrollView>
      </>
    </BottomSheet>
  );
};

export default ForecastSheet;

const styles = StyleSheet.create({});
