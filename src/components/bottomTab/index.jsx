import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Home, Clients } from "../../screens";
import PropTypes from "prop-types";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  const { data } = props;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "planet-outline";
          } else if (route.name === "Clients") {
            iconName = "people-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#f33984",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home">{(props) => <Home {...props} data={data} />}</Tab.Screen>
      <Tab.Screen name="Clients">{(props) => <Clients {...props} data={data} />}</Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

BottomTabNavigator.propTypes = {
  data: PropTypes.array,
};
