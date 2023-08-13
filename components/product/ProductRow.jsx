import { FlatList } from "react-native";
import { Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import ProductCartView from "./ProductCartView";
import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";
import { ActivityIndicator } from "react-native";

const ProductRow = () => {
  const { data, error, loading } = useFetch();
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={data}
          key={(item) => item._id}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <ProductCartView item={item} />;
          }}
          horizontal
          style={{ marginBottom: 100 }}
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};
export default ProductRow;
