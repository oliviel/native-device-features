import { useState } from "react";
import { View, StyleSheet, Alert, Image, Text } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { WebView } from "react-native-webview";
import OutlineButton from "./OutlineButton";
import { Theme } from "../constants/theme";
// import { getMapPreview } from "../utils/map";
import RenderIf from "./RenderIf";

const LocationPicker = () => {
  const [locationPermission, requestPermission] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState({
    lat: 0,
    lng: 0,
  });

  async function verifyPermission() {
    if (locationPermission?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermission?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insuffiient Permissions",
        "You need to grant location permissions to use this app"
      );

      return false;
    }

    return true;
  }

  async function handleGetUserLocation() {
    try {
    } catch (error) {}
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  function handlePickOnMap() {}

  return (
    <View>
      <View style={styles.mapPreview}>
        <RenderIf condition={!pickedLocation.lng && !pickedLocation.lat}>
          <Text>No location picked yet</Text>
        </RenderIf>

        <RenderIf condition={!!pickedLocation.lng && !!pickedLocation.lat}>
          <WebView
            source={{
              html: `<iframe src="https://maps.google.com/maps?q=${pickedLocation.lat},${pickedLocation.lng}&z=15&output=embed" width="${styles.image.width}%" height="${styles.image.height}%" frameborder="0" style="border:0"></iframe>`,
            }}
          />
        </RenderIf>
      </View>
      <View style={styles.actions}>
        <OutlineButton icon="location" onPress={handleGetUserLocation}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={handlePickOnMap}>
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    height: 200,
    width: "100%",
    borderRadius: 4,
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.colors.primary100,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default LocationPicker;
