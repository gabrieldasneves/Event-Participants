import { View, StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: "#141416" }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Home />
    </View>
  );
}
