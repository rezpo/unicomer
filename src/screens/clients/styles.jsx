import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  clientsListContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  clientListItem: {
    alignItems: "flex-start",
    marginBottom: 10,
    borderRadius: 10,
  },
  clientName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  clientInfo: {
    fontSize: 12,
    marginBottom: 2,
    color: "#666",
  },
  searchboxContainer: {
    backgroundColor: "#FFF",
    paddingTop: 10,
  },
  searchboxInputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default styles;
