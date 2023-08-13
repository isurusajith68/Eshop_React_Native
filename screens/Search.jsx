import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import ProductCartView from "../components/product/ProductCartView";
import { Image } from "react-native";
import SearchProducts from "../components/product/SearchProducts";
import { useEffect } from "react";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.8.146:5000/api/products/search/${searchKey}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data);
      });
    // };
  }, [searchKey]);
  // const search = () => {
  const SeparatorComponent = () => {
    return <View style={{ height: 16 }} />;
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="camera" size={15} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWraper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={(text) => setSearchKey(text)}
            placeholder="what are you lokking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.seachBtn} onPress={() => {}}>
            <Ionicons
              name="search"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      {!searchResult.length > 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchProducts item={item} />}
          // ItemSeparatorComponent={SeparatorComponent}
        />
      )}
    </SafeAreaView>
  );
};
export default Search;
