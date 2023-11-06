import { useState } from "react";
import { Alert, Image, View, Text, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import RenderIf from "./RenderIf";
import { Theme } from "../constants/theme";
import OutlineButton from "./OutlineButton";

const ImagePicker = () => {
  const [camaraPermission, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState("");

  async function verifyPermission() {
    if (camaraPermission?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (camaraPermission?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insuffiient Permissions",
        "You need to grant camara permissions to use this app"
      );

      return false;
    }

    return true;
  }

  async function handleTakeImage() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    const currentImage = image.assets ? image.assets[0].uri : "";
    setPickedImage(currentImage);
  }

  return (
    <View>
      <View style={styles.imagePreview}>
        <RenderIf condition={!pickedImage}>
          <Text>No image taken yet.</Text>
        </RenderIf>
        <RenderIf condition={!!pickedImage}>
          <Image source={{ uri: pickedImage }} style={styles.image} />
        </RenderIf>
      </View>
      <OutlineButton icon="camera" onPress={handleTakeImage}>
        Take Image
      </OutlineButton>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePreview: {
    height: 200,
    width: "100%",
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagePicker;
