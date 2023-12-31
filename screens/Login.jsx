import { useState } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
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
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native";
import { COLORS } from "../constants";
import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Password must be at least 5 character")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }) => {
  const [lorder, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obscureText, setObscureText] = useState(true);

  const login = async (values) => {
    setLoader(true);

    try {
      const url = "http://192.168.242.112:5000/api/auth/login";
      const datauser = values;

      const response = await axios.post(url, datauser);

      if (response && response.status === 200) {
        setLoader(false);
        const responseData = response;

        await AsyncStorage.setItem(
          `User${responseData.data._id}`,
          JSON.stringify(responseData.data)
        );
        await AsyncStorage.setItem("id", responseData.data._id);
        navigation.replace("Bottom navigation");
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      Alert.alert("Error", error.response.data, [
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
          <Text style={styles.title}>Login</Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SigninSchema}
            onSubmit={(values) => login(values)}
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
                  Don't have an account ?{" "}
                  <Text
                    style={{
                      color: COLORS.primary,
                      textAlign: "center",

                      fontSize: 16,
                    }}
                    onPress={() => navigation.navigate("Register")}
                  >
                    Register
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
export default Login;
