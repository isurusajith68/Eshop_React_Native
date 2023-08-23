import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  image: {
    height: SIZES.height / 3,
    width: SIZES.width - 60,
    resizeMode: "contain",
    marginBottom: SIZES.xxLarge,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.xLarge + 5,
    marginBottom: SIZES.small,
    textAlign: "center",
    color: COLORS.primary,
  },
  wrapper: {
    marginBottom: 20,
  },
  lable: {
    fontFamily: "PoppinsRegular",
    fontSize: SIZES.regular,
    marginBottom: 5,
    textAlign: "left",
    marginEnd: 5,
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    borderWidth: 1,
    borderRadius: 12,
    height: 50,
    backgroundColor: COLORS.lightWhite,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  }),
});

export default styles;
