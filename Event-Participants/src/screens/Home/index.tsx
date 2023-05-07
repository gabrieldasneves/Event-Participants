import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "gabriel",
    "rafael",
    "Yasmim",
    "karla",
    "francisco",
    "cora",
    "sol",
    "lua",
    "kiwi",
    "zuzu",
  ];

  function handleParticipantAdd() {
    if (participants.includes("gabriel")) {
      return Alert.alert("Participant already exists", "");
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remove", `Do you really want to remove ${name}`, [
      { text: "Yes", onPress: () => Alert.alert("Deleted!") },
      { text: "No", style: "cancel" },
    ]);
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>No participants</Text>
        )}
      />
    </View>
  );
}
