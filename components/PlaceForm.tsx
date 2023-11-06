import { useState } from "react";
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { Theme } from "../constants/theme";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

const PlaceForm = () => {
  const [title, setTitle] = useState("");

  function handleOncChangeText(value: string) {
    setTitle(value);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={handleOncChangeText}
        />
        <ImagePicker />
        <LocationPicker />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    marginBottom: 4,
    fontWeight: "bold",
    color: Theme.colors.primary500,
  },
  input: {
    fontSize: 16,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderBottomWidth: 2,
    backgroundColor: Theme.colors.primary100,
    borderBottomColor: Theme.colors.primary700,
  },
});

export default PlaceForm;
