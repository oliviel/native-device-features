import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { Theme } from "../constants/theme";
import { IPlace } from "../models/place";

interface Props {
  place: IPlace;
  onPress: () => void;
}

const PlaceItem = ({ place, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Theme.colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Theme.colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Theme.colors.gray700,
  },
});

export default PlaceItem;
