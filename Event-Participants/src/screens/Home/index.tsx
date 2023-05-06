import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("adding participant");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>
      <Text style={styles.eventDate}>Event date</Text>
      <View style={styles.form}>
        <TextInput
          placeholderTextColor="#6b6b6b"
          placeholder="Participant"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant name="Gabriel" />
      <Participant name="Mariana" />
    </View>
  );
}
