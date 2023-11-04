import { FlatList, Text, View, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";
import { Theme } from "../constants/theme";

interface Props {
  places: IPlace[];
}

const PlacesList = ({ places }: Props) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onPress={() => {}} />}
    />
  );
};

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Theme.colors.primary200,
  },
});

export default PlacesList;
