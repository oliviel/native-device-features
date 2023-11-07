import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../constants/theme";

interface Props {
  onPress: () => void;
  children: ReactNode;
  style?: object;
}

function Button({ children, onPress, style }: Props) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    margin: 4,
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Theme.colors.primary800,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: Theme.colors.primary50,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
    // backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
