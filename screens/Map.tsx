import { useLayoutEffect, useState, useCallback } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { MapPressEvent, Marker, Region } from "react-native-maps";
import RenderIf from "../components/RenderIf";
import { ScreenProps } from "../App";
import IconButton from "../components/IconButton";

const region: Region = {
  latitude: 37.78,
  longitude: -122.43,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map = ({ navigation }: ScreenProps<"Map">) => {
  const [pickedLocation, setPickedLocation] = useState({
    lat: 0,
    lng: 0,
  });

  function handleSelectLocation(event: MapPressEvent) {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setPickedLocation({
      lat: latitude,
      lng: longitude,
    });
  }

  function handleSavePickedLocation() {
    if (!pickedLocation.lat && !pickedLocation.lng) {
      Alert.alert(
        "No location picked",
        "You have to pick a location (by tapping on the map) first"
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLocation,
    });
  }

  const callbackPickedLocation = useCallback(handleSavePickedLocation, [
    navigation,
    pickedLocation,
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={22}
          color={tintColor!}
          onPress={callbackPickedLocation}
        />
      ),
    });
  }, [navigation, callbackPickedLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={handleSelectLocation}
    >
      <RenderIf condition={!!pickedLocation.lat && !!pickedLocation.lng}>
        <Marker
          title="Picked location"
          coordinate={{
            latitude: pickedLocation.lat,
            longitude: pickedLocation.lng,
          }}
        />
      </RenderIf>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;
