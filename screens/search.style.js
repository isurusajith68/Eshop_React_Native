import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.small,
    height: 50,
  },
  searchIcon: {
    marginLeft: 15,
    color: COLORS.gray,
    marginTop: SIZES.medium,
  },
  searchWraper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "semibold",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  seachBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.medium,
  },
  container: {
    // alignItems: "center",
    // paddingTop: SIZES.xxLarge,
    paddingLeft: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
  },
  listItem: {
    marginHorizontal: 8, // Adjust the value as needed
  },
  separator: {
    height: 16,
  },
  searchImage: {
    marginTop: SIZES.xxLarge,
    marginLeft: -SIZES.xLarge,
    width: 380,
    height: 500,
  },
});
export default styles;
