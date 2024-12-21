import { StyleSheet, Text, View } from "react-native";
import Style from "./components/style";

export default function App() {
  return (
    <View style={styles.container}>
      <Style />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
