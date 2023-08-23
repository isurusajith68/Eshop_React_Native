import { View, Text } from "react-native";
import styles from "./profile.style";
import { useState } from "react";
import { COLORS } from "../constants";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Alert } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const value = await AsyncStorage.getItem("id");
      const user = await AsyncStorage.getItem(`User${value}`);
      try {
        if (user !== null) {
          setUserData(JSON.parse(user));
          setUserLogin(true);
        } else {
          setUserLogin(false);
          navigation.navigate("Login");
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  const logoutuser = async () => {
    const value = await AsyncStorage.getItem("id");
    await AsyncStorage.removeItem(`User${value}`);
    await AsyncStorage.removeItem("id");
    setUserLogin(false);
    navigation.replace("Bottom navigation");
  };

  const logout = () => {
    "Logout";
    Alert.alert("Logout", "Are you sure? You want to logout?", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Cancel Pressed");
        },
      },
      {
        text: "OK",
        onPress: () => {
          logoutuser();
        },
      },
    ]);
  };
  const deleteAcoount = () => {
    "Delete Acoount";
    Alert.alert("Logout", "Are you sure? You want to delete Acoount?", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Cancel Pressed");
        },
      },
      {
        text: "OK",
      },
    ]);
  };
  const clearCache = () => {
    "Clear cache";
    Alert.alert("Logout", "Are you sure? You want to clear Cache?", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Cancel Pressed");
        },
      },
      {
        text: "OK",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={COLORS.gray} /> */}

        <View style={{ width: "100%" }}>
          <Image
            source={require("../assets/images/space.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin === true
              ? userData.username
              : "Pleace Login into your account"}
          </Text>
          {userLogin === false ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.button}>
              <Text style={styles.buttonText}>{userData.email}</Text>
            </View>
          )}
          {userLogin === false ? (
            <View style={styles.buttonContainer}></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
              >
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuItemText}>Favorites</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuItemText}>Orders</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <View style={styles.menuItem(0.2)}>
                  <SimpleLineIcons
                    name="bag"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuItemText}>Cart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={clearCache}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="cached"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuItemText}>Clear cache</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={deleteAcoount}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign
                    name="deleteuser"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuItemText}>Delete Acount</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={logout}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="logout" size={24} color={COLORS.primary} />
                  <Text style={styles.menuItemText}>Log out</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default Profile;
