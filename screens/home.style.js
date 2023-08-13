import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  text: {
    fontFamily: "bold",
    fontSize: 40,
  },
  AppBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  AppBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semibold",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: "PoppinsRegular",
    fontWeight: "600",
    marginTop:2,
    fontSize: 10,
    color: COLORS.white,
  },
});

export default styles;
