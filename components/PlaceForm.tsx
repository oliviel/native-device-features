import { useCallback, useState } from "react";
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { Theme } from "../constants/theme";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "./Button";
import { IPlace, Place } from "../models/place";

export interface Address {
  lat: number;
  lng: number;
  address: string;
}

interface Props {
  onAddPlace: (place: IPlace) => void;
}

const PlaceForm = ({ onAddPlace }: Props) => {
  const [title, setTitle] = useState("");
  const [pickedImage, setPickedImage] = useState("");
  const [pickedLocation, setPickedLocation] = useState<Address>({
    lat: 0,
    lng: 0,
    address: "",
  });

  function handleOncChangeText(value: string) {
    setTitle(value);
  }

  function handlePickImage(imgUri: string) {
    setPickedImage(imgUri);
  }

  const handlePickLocation = useCallback((location: Address) => {
    setPickedLocation(location);
  }, []);

  async function handleSavePlace() {
    const placeData = new Place(title, pickedImage, pickedLocation.address, {
      lat: pickedLocation.lat,
      lng: pickedLocation.lng,
    });

    onAddPlace(placeData);
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
        <ImagePicker onPickImage={handlePickImage} />
        <LocationPicker onPickLocation={handlePickLocation} />
        <Button onPress={handleSavePlace}>Add Place</Button>
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
