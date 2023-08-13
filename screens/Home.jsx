import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import WelCome from "../components/Home/WelCome";
import Carousel from "../components/Home/Carousel";
import Heading from "../components/Home/Heading";
import ProductRow from "../components/product/ProductRow";
const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.AppBarWrapper}>
        <View style={styles.AppBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>SriLanka Colombo</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <WelCome />
        <Carousel />
        <Heading />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
