import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import WelCome from "../components/Home/WelCome";
import Carousel from "../components/Home/Carousel";
import Heading from "../components/Home/Heading";
import ProductRow from "../components/product/ProductRow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("id");
        if (value !== null) {
          const user = await AsyncStorage.getItem(`User${value}`);
          setUser(JSON.parse(user));
        }
      } catch (e) {}
    };
    getData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.AppBarWrapper}>
        <View style={styles.AppBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>{user.location}</Text>
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
