import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: string;
  size: number;
  color: string;
  onPress: () => void;
}

function IconButton({ icon, size, color, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        {/* @ts-ignore */}
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
