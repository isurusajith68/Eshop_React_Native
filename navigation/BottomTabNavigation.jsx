import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, Profile } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
const Tab = createBottomTabNavigator();

const screenOption = {
  tabBarShowLable: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    hegiht: 70,
  },
  tabBarActiveTintColor: "#f5610a",
  tabBarInactiveTintColor: "#555",
  tabBarLabelStyle: {
    fontSize: 10,
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray2}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name={"search"}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray2}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray2}
                />
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
