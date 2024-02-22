import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { COLORS, SIZES } from "../../themes";
import ForecastSheetBackground from "./ForecastSheetBackground";
import ForecastControl from "./elements/ForecastControl";
import Seperator from "./elements/Seperator";
import ForecastCapsule from "../forecast/ForecastCapsule";
import { hourly } from "../../../mocks/ForecastData";

const ForecastSheet = () => {
  const snapPoints = ["38.5%", "83%"];
  const snapPointOne = SIZES.height * (parseFloat(snapPoints[0]) / 100);
  const cornerRadius = 44;
  const capsuleRadius = 30;
  const capsuleHeight = SIZES.height * 0.17;
  const capsulWidth = SIZES.width * 0.15;
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
      <ForecastControl />
      <Seperator width={SIZES.width} height={3} />
      <ForecastCapsule
        width={capsulWidth}
        height={capsuleHeight}
        radius={capsuleRadius}
        forecast={hourly[0]}
      />
    </BottomSheet>
  );
};

export default ForecastSheet;

const styles = StyleSheet.create({});
