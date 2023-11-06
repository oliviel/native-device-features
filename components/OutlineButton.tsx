import { ReactNode } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../constants/theme";

interface Props {
  onPress: () => void;
  icon: string;
  children: ReactNode;
}

const OutlineButton = ({ onPress, icon, children }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons
        /* @ts-ignore */
        name={icon}
        style={styles.icon}
        size={18}
        color={Theme.colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 4,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: Theme.colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Theme.colors.primary500,
  },
});

export default OutlineButton;
