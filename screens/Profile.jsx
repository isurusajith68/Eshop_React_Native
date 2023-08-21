import { View, Text } from "react-native";
import styles from "./profile.style";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Sagar",
    email: "isuru@gmail.com",
  });
  const [userLogin, setUserLogin] = useState(false);

  const navigation = useNavigation();

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
              ? userData.name
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
        </View>
      </View>
    </View>
  );
};
export default Profile;
