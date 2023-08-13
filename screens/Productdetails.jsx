import { StyleSheet, Text, View } from "react-native";
import styles from "./productdetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants";
import { Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

export default function Productdetails({ navigation }) {
  const [count, setCount] = useState(1);
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.uperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.red} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.productDetails}>
        <View style={styles.titleRow}>
          <Text style={styles.productName}>
            {item.title.length > 14 ? (
              <Text>{item.title.slice(0, 15)} ... </Text>
            ) : (
              item.title
            )}
          </Text>
          <View style={styles.priceWraper}>
            <Text style={styles.Price}>Rs {item.price}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Ionicons
                key={i}
                name="star"
                size={24}
                color="gold"
                style={{ marginRight: 3 }}
              />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity>
              <Text
                style={styles.ratingText}
                onPress={() => setCount(count + 1)}
              >
                <Ionicons name="add-circle" size={32} color="black" />
              </Text>
            </TouchableOpacity>
            <Text style={styles.countText}>{count}</Text>
            <Text
              style={styles.ratingText}
              onPress={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              <Ionicons name="remove-circle" size={32} color="black" />
            </Text>
          </View>
        </View>
        <View style={styles.dispriptionWraper}>
          <Text style={styles.discription}>Description</Text>
          <Text style={styles.discriptionText}>
            {item.title} {"\n"}
            {item.description}
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={24} />
              <Text
                style={{
                  padding: 5,
                  color: COLORS.gray,
                  fontFamily: "medium",
                }}
              >
                {item.productLocation}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons name="truck-delivery-outline" size={24} />
              <Text
                style={{
                  padding: 5,
                  color: COLORS.gray,
                  fontFamily: "medium",
                }}
              >
                Free Delivery
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartBtnText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
