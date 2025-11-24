import { ScrollView, StyleSheet, View } from "react-native";
import ProjectCard from "../components/ProjectCard";


export default function ProjectsScreen() {
  const projects = [
    { id: 1, title: "Weather App", description: "Shows weather using API" },
    { id: 2, title: "ToDo List", description: "Task manager with local storage" },
    { id: 3, title: "Portfolio Website", description: "Personal website with React" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {projects.map((p, index) => (
        <View key={p.id} style={{ marginBottom: 20 }}>
          <ProjectCard title={p.title} description={p.description} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
});
