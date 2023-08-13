import { View, Text, TouchableOpacity } from "react-native";
import styles from "./productCartView.style";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCartView = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("productDetails", { item })}
    >
      <View style={styles.container}>
        <View style={styles.iamgeContainer}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productName} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.suplier} numberOfLines={2}>
            {item.supplier}
          </Text>
          <Text style={styles.price}>Rs {item.price}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCartView;
