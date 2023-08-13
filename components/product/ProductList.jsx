// import { View, Text } from "react-native";
// import { useFetch } from "../../hook/useFetch";
// import styles from "./productList.style";
// const ProductList = () => {
//   const { data, loading, error } = useFetch();

//   return (
//     <View>
//       <Text>Product List</Text>
//     </View>
//   );
// };
// export default ProductList;
import { View, Text } from "react-native";
import useFetch from "../../hook/useFetch";
import styles from "./productList.style";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import { COLORS, SIZES } from "../../constants";
import ProductCartView from "./ProductCartView";

const ProductList = () => {
  const { data, error, loading } = useFetch();
  const SeparatorComponent = () => {
    return <View style={{ height: 16 }} />;
  };
  if (loading) {
    return (
      <View style={styles.loadinga}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <ProductCartView item={item} />
          </View>
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.container}
        // ItemSeparatorComponent={() => <View style={styles.separator} />}
        ItemSeparatorComponent={SeparatorComponent}
      />
    </View>
  );
};
export default ProductList;
