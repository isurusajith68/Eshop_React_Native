import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  image: {
    width: "100%",
    height: 290,
    resizeMode: "cover",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignSelf: "center",
    marginTop: -75,
  },
  name: {
    fontFamily: "bold",
    marginVertical: 5,
    color: COLORS.primary,
  },
  button: {
    minWidth: 250,
    height: 40,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "bold",
    color: COLORS.primary,
  },
  menuWrapper: {
    marginTop: SIZES.large,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 10,
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: COLORS.gray,
  }),
  menuItemText: {
    fontFamily: "PoppinsRegular",
    color: COLORS.gray,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 26,
    marginTop: 2,
  },
});

export default styles;
