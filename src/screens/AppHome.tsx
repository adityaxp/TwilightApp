import React from "react";
import { HomeBackground } from "../components/HomeBackground";
import WeatherTabBar from "../components/tabbar/WeatherTabBar";
import WeatherInfo from "../components/section/WeatherInfo";
import { currentWeather } from "../data/CurrentWeather";
import ForecastSheet from "../components/bottomsheet/ForecastSheet";
import { ForecastSheetProvider } from "../context/ForecastSheetContext";

const AppHome = () => {
  return (
    <ForecastSheetProvider>
      <HomeBackground />
      <WeatherInfo />
      <ForecastSheet />
      <WeatherTabBar />
    </ForecastSheetProvider>
  );
};

export default AppHome;
