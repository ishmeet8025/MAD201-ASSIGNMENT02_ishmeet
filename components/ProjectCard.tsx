import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 12,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  description: { marginBottom: 12 },
  button: { backgroundColor: "#007AFF", padding: 12, borderRadius: 8 },
  buttonText: { color: "white", textAlign: "center" },
});
