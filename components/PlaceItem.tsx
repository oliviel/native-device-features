import { Image, Pressable, Text, View, StyleSheet } from "react-native";

interface Props {
  place: IPlace;
  onPress: () => void;
}

const PlaceItem = ({ place, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlaceItem;
