import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  loadinga: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    // alignItems: "center",
    paddingTop: SIZES.xxLarge,
    paddingLeft: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
  },
  listItem: {
    marginHorizontal: 8, // Adjust the value as needed
  },
  separator: {
    height: 16,
  },
});

export default styles;
