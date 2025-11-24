import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>

      <View style={styles.row}>
        <TouchableOpacity><Text style={styles.link}>LinkedIn</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.link}>GitHub</Text></TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.email}>Email: singhishmeet396@gmail.com</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 30 },
  row: { flexDirection: "row", marginBottom: 20 },
  link: { fontSize: 18, color: "#007AFF", marginHorizontal: 15 },
  email: { fontSize: 18, color: "#444" },
});
