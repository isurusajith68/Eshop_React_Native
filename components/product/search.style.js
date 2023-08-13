import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
    marginBottom: SIZES.small,
    flexDirection: "row",
    borderRadius: SIZES.small,
    backgroundColor: "#fff",
    ...SHADOWS.medium,
    shadowColor: COLORS.tertiary,
    marginHorizontal: 12,
    padding: 8,
    borderColor: COLORS.black,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    width: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    alignContent: "center",
  },
});

export default styles;
