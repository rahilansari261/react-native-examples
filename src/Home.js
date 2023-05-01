import { Button, View, StyleSheet, Pressable, Text } from "react-native";
import { AppButton } from "./AppButton";
export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Rahil ji"
        onPress={() => navigation.navigate("Profile", { name: "Rahil" })}
      />
      <AppButton
        style={{ alignSelf: "flex-start" }}
        title="Farheen"
        onPress={() => navigation.navigate("Profile", { name: "Farheen" })}
      />
      <Button
        title="Safiyyah"
        onPress={() => navigation.navigate("Profile", { name: "Safiyyah" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
