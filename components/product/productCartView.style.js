import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    width: 172,
    height: 252,
    // marginEnd: 22,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  iamgeContainer: {
    flex: 1,
    width: 160,
    overflow: "hidden",
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  productDetails: {
    padding: SIZES.small,
  },
  productName: {
    fontFamily: "semibold",
    fontSize: SIZES.large,
  },
  suplier: {
    fontFamily: "semibold",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    marginBottom: 2,
  },
  btn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
