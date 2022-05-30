import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useTheme } from "@rneui/themed";
import ListItem from "./listItem";
import styles from "./styles";

const Home = () => {
  const theme = useTheme().theme;

  const renderListItems = (list) =>
    list.map((item, index) => {
      return <ListItem caption={item} key={index} />;
    });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.white }]}>
      <Text style={styles.title}>Welcome to Unicomer React Native Test</Text>
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>Instructions</Text>
        {renderListItems([
          "1. Go to Clients tab",
          "2. Perform a search by first name, last name, or profession",
        ])}
        <Text style={styles.subtitle}>Stack</Text>
        {renderListItems([
          "React Native Project",
          "Created with Expo",
          "UI from React Native Elements",
          "Navigation from React Navigation",
        ])}
      </View>
      <Text style={styles.footerText}>Created by Daniel Rebolledo</Text>
    </SafeAreaView>
  );
};

export default Home;
