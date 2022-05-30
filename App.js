import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator, theme } from "./src/components";
import { ThemeProvider } from "@rneui/themed";
import { createServer } from "miragejs";
import { SafeAreaView } from "react-native";
import data from "./api/data";

// eslint-disable-next-line no-undef
if (window.server) server.shutdown();

// eslint-disable-next-line no-undef
window.server = createServer({
  routes() {
    this.get("/api/v1/clients", () => {
      return data;
    });
  },
});

export default function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/v1/clients");
        setData(await response.json());
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <BottomTabNavigator data={data} />
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
}
