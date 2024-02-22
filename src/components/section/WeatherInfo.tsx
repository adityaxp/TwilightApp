import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Weather } from "../../models/Weather";
import { DEGREE_SYMBOL } from "../../utils/Constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../../themes";

interface WeatherInfoProps {
  weather: Weather;
}

const WeatherInfo = ({ weather }: WeatherInfoProps) => {
  const { city, temperature, condition, high, low } = weather;
  const { top } = useSafeAreaInsets();
  const weatherInfoMargin = top + 51;

  return (
    <View style={{ alignItems: "center", marginTop: weatherInfoMargin }}>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.temperature}>
        {temperature}
        {DEGREE_SYMBOL}
      </Text>
      <Text style={styles.conditionText}>{condition}</Text>
      <Text style={styles.minMaxText}>
        H: {high}
        {DEGREE_SYMBOL}
        {"  "}
        L:{low}
        {DEGREE_SYMBOL}
      </Text>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  cityText: {
    fontFamily: "SF-Regular",
    color: COLORS.white,
    fontSize: 34,
    lineHeight: 41,
  },
  temperature: {
    fontFamily: "SF-Thin",
    fontSize: 96,
    color: COLORS.white,
    lineHeight: 96,
    marginTop: 10,
  },
  conditionText: {
    fontFamily: "SF-Semibold",
    fontSize: 20,
    color: COLORS.offwhite,
    lineHeight: 20,
  },
  minMaxText: {
    fontFamily: "SF-Semibold",
    fontSize: 20,
    color: COLORS.white,
    lineHeight: 20,
    marginTop: 10,
  },
});
