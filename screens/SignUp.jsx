import { useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import BackBtn from "../components/backBtn/backBtn";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./login.style";
import Button from "../components/button/button";
import { Image } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Formik, formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
import { COLORS, SIZES } from "../constants";
import { Alert } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 character")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  location: Yup.string().min(3, "Provide valid location").required("Required"),
  username: Yup.string().min(3, "Provide valid username").required("Required"),
});

const SignUp = () => {
  const [lorder, setLoader] = useState(false);
  // const [response, setResponse] = useState(null);
  const [obscureText, setObscureText] = useState(true);
  const navigation = useNavigation();
  const register = async (values) => {
    setLoader(true);

    try {
      const url = "http://192.168.242.112:5000/api/auth/register";
      const datauser = values;

      const response = await axios.post(url, datauser);

      if (response && response.status === 401) {
        setLoader(false);
        Alert.alert("Error", response.data.message, [
          {
            text: "OK",
          },
        ]);
      }
      if (response && response.status === 201) {
        setLoader(false);
        Alert.alert("Success", response.data.message, [
          {
            text: "OK",
            onPress: () => navigation.replace("Login"),
          },
        ]);
      }
    } catch (error) {
      setLoader(false);

      Alert.alert("Error", error.response.data.message, [
        {
          text: "OK",
        },
      ]);
    } finally {
      setLoader(false);
    }
  };
  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../assets/images/bk.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Register</Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
              location: "",
              username: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => register(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
              values,
              errors,
              isValid,
              setFieldTouched,
            }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.lable}>User Name</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.username ? "blue" : COLORS.black
                    )}
                  >
                    <MaterialCommunityIcons
                      name="account-outline"
                      size={24}
                      color="black"
                      style={{ marginRight: 10 }}
                    />
                    <TextInput
                      placeholder="Enter your username"
                      onFocus={() => setFieldTouched("username")}
                      onBlur={() => setFieldTouched("username", "")}
                      autoCapitalize="none"
                      value={values.username}
                      onChangeText={handleChange("username")}
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <Text
                      style={{
                        color: "red",
                        fontSize: 12,
                        marginTop: 5,
                        marginLeft: 10,
                      }}
                    >
                      {errors.username}
                    </Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.lable}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? "blue" : COLORS.black
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={24}
                      color="black"
                      style={{ marginRight: 10 }}
                    />
                    <TextInput
                      placeholder="Enter your email"
                      onFocus={() => setFieldTouched("email")}
                      onBlur={() => setFieldTouched("email", "")}
                      autoCapitalize="none"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text
                      style={{
                        color: "red",
                        fontSize: 12,
                        marginTop: 5,
                        marginLeft: 10,
                      }}
                    >
                      {errors.email}
                    </Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.lable}>Location</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.location ? "blue" : COLORS.black
                    )}
                  >
                    <MaterialCommunityIcons
                      name="map-marker-outline"
                      size={24}
                      color="black"
                      style={{ marginRight: 10 }}
                    />
                    <TextInput
                      placeholder="Enter your location"
                      onFocus={() => setFieldTouched("location")}
                      onBlur={() => setFieldTouched("location", "")}
                      autoCapitalize="none"
                      value={values.location}
                      onChangeText={handleChange("location")}
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.location && errors.location && (
                    <Text
                      style={{
                        color: "red",
                        fontSize: 12,
                        marginTop: 5,
                        marginLeft: 10,
                      }}
                    >
                      {errors.location}
                    </Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.lable}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? "blue" : COLORS.black
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={24}
                      color="black"
                      style={{ marginRight: 10 }}
                    />
                    <TextInput
                      placeholder="Enter your password"
                      onFocus={() => setFieldTouched("password")}
                      onBlur={() => setFieldTouched("password", "")}
                      autoCapitalize="none"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      secureTextEntry={obscureText}
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                    <AntDesign
                      name={obscureText ? "eye" : "eyeo"}
                      size={24}
                      color="black"
                      onPress={() => setObscureText(!obscureText)}
                    />
                  </View>
                  {touched.password && errors.password && (
                    <Text
                      style={{
                        color: "red",
                        fontSize: 12,
                        marginTop: 5,
                        marginLeft: 10,
                      }}
                    >
                      {errors.password}
                    </Text>
                  )}
                </View>
                <Button
                  lorder={lorder}
                  onPress={isValid ? handleSubmit : null}
                  titlebtn={"Sign In"}
                  color={isValid === false ? COLORS.gray : COLORS.primary}
                />
                <Text
                  style={{
                    color: COLORS.black,
                    textAlign: "center",
                    fontSize: 15,
                  }}
                >
                  Already have an account ?{" "}
                  <Text
                    style={{
                      color: COLORS.primary,
                      textAlign: "center",

                      fontSize: 16,
                    }}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Login
                  </Text>
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default SignUp;
