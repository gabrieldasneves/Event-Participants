import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#141416",
  },
  eventName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    color: "#f8f8f8",
  },
  eventDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6b6b6b",
  },
  input: {
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    height: 56,
    color: "#fdfcfe",
    fontSize: 16,
    padding: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
});
