import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listItemCaption: {
    fontSize: 13,
    textAlign: "left",
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "left",
    marginVertical: 10,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 10,
    textAlign: "center",
    marginVertical: 10,
  },
});

export default styles;
