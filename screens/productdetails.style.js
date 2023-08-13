import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  uperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  productDetails: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  productName: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWraper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  Price: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontFamily: "semibold",
    fontSize: SIZES.large,
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
    marginRight: 5,
  },
  countText: {
    color: COLORS.gray,
    fontFamily: "medium",
    marginRight: 10,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },

  dispriptionWraper: {
    marginTop: SIZES.large + 2,
    marginHorizontal: SIZES.large,
  },
  discription: {
    fontFamily: "medium",
    fontSize: SIZES.large - 2,
  },
  discriptionText: {
    fontFamily: "PoppinsRegular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.large,
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
  },
  cartBtn: {
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.black,
    padding: SIZES.small,
    borderRadius: SIZES.large,
    marginLeft: 12,
    height: 40,
  },
  addCart: {
    width: 40,
    height: 40,
    borderRadius: 50,
    margin: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
  },
  cartBtnText: {
    color: COLORS.white,
    fontFamily: "medium",
    textAlign: "center",
  },
});

export default styles;
