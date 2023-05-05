import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName} key="1">
        Event Name
      </Text>
      <Text style={styles.eventDate} key="1">
        Event date
      </Text>
    </View>
  );
}
