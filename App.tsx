import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomeBackground } from "./src/components/HomeBackground";
import WeatherTabBar from "./src/components/tabbar/WeatherTabBar";

export default function App() {
  return (
    <>
      <HomeBackground />
      <WeatherTabBar />
      <StatusBar style="light" />
    </>
  );
}
