import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

const COLORS = {
  primaryColor: "#2E335A",
  secondaryColor: "#1C1B33",
  tertiary: "#FF7754",
  link: "#0000FF",
  gray: "#83829A",
  gray2: "#C1C0C8",

  offwhite: "rgba(235,235,245,0.6)",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e81e4d",
  green: " #00C135",
  lightWhite: "#FAFAFC",
};

const SIZES = {
  xxSmall: 0,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  large: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7.84,
    elevation: 8,
  },
};

export { COLORS, SIZES, SHADOWS };
