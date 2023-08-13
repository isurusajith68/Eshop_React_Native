import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./newRivals.style";
import { COLORS } from "../constants";
import ProductList from "../components/product/ProductList";
const NewRivals = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wraper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.white}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Products</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};
export default NewRivals;
