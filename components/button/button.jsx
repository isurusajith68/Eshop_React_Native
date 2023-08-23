import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";
import { ActivityIndicator } from "react-native";
const button = ({ titlebtn, onPress, color, lorder }) => {
  return (
    <TouchableOpacity style={styles.btnstyle(color)} onPress={onPress}>
      {lorder === false ? (
        <Text style={styles.btn}>{titlebtn}</Text>
      ) : (
        <ActivityIndicator color={COLORS.white} size="small" />
      )}
    </TouchableOpacity>
  );
};
export default button;
const styles = StyleSheet.create({
  btn: {
    fontFamily: "bold",
    fontSize: 18,
    color: COLORS.white,
  },
  btnstyle: (color) => ({
    backgroundColor: color,
    width: "100%",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
  }),
});
