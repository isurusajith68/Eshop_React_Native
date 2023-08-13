import { View, Text, TouchableOpacity } from "react-native";
import styles from "./heading.style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Heading = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NEW ARRIVALS</Text>
        <TouchableOpacity onPress={() => navigation.navigate("productList")}>
          <Ionicons name="ios-grid" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Heading;
