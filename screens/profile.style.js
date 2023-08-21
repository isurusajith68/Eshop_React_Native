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
    minWidth: 150,
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
});

export default styles;
