import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants";
import { TouchableOpacity } from "react-native";
import styles from "./search.style";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const SearchProducts = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("productDetails", { item })}
      >
        <View style={styles.image}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: SIZES.small + 1,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: SIZES.small + 1,
              color: COLORS.gray,
            }}
          >
            {item.supplier}
          </Text>
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: SIZES.small + 1,
              color: COLORS.gray,
            }}
          >
            Rs :{item.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SearchProducts;
