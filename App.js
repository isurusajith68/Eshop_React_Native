import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Cart, NewRivals, Productdetails, Login, SignUp } from "./screens";

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="productDetails"
          component={Productdetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="productList"
          component={NewRivals}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favorites"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orders"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "regular",
    fontSize: 20,
  },
});
