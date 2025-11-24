import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/300" }}
        style={styles.profile}
      />

      <Text style={styles.name}>Ishmeet Singh</Text>
      <Text style={styles.bio}>
        React Native Developer | Cybersecurity Student
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/projects")}
      >
        <Text style={styles.buttonText}>View Projects</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.contactBtn]}
        onPress={() => router.push("/contact")}
      >
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  profile: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  bio: { fontSize: 16, textAlign: "center", marginBottom: 30 },
  button: { backgroundColor: "#007AFF", padding: 15, borderRadius: 10, marginTop: 10, width: "80%" },
  contactBtn: { backgroundColor: "#34C759" },
  buttonText: { color: "white", textAlign: "center", fontSize: 18 },
});
