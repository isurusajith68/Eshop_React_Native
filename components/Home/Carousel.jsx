import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const carousel = () => {
  const sliderImages = [
    "https://media.istockphoto.com/id/1253073019/photo/blue-camera-surrounded-by-colorful-balls-on-a-pink-background-3d-render.jpg?s=612x612&w=0&k=20&c=3ryQF7WMiQRwGHUQeUHZEXGUVOf-wj-ehtdgQbHKujE=",
    "https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1",
    "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg",
  ];
  return (
    <View style={styles.carouselSLider}>
      <SliderBox
        images={sliderImages}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 10 }}
        autoplay
        circleLoop
      />
    </View>
  );
};
export default carousel;

const styles = StyleSheet.create({
  carouselSLider: {
    flex: 1,
    alignItems: "center",
  },
});
