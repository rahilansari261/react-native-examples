import { Button, View, StyleSheet, Pressable, Text } from "react-native";

export const AppButton = (props) => {
    console.log(props)
  const handlePress = props.onPress;
  
  return (
    <Pressable style={[styles.button, props.style]} onPress={handlePress}>
      <Text style={styles.label}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",

  },
  label: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
