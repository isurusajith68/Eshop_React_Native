import { View, Text } from "react-native";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Carousel from "./Carousel";

const welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welComeTxt(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welComeTxt(COLORS.primary, -5)}>
          Luxurious Funrniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWraper}>
          <TextInput
            style={styles.searchInput}
            // value=""
            placeholder="what are you lokking for"
            onPressIn={() => navigation.navigate("Search")}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.seachBtn}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default welcome;
