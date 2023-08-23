import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/index";
import { Image } from "react-native";

const backBtn = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        position: "absolute",
        zIndex: 999,
        top: SIZES.large - 10,
      }}
    >
      <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
    </TouchableOpacity>
  );
};
export default backBtn;
