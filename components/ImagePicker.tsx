import { Alert, Button, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

const ImagePicker = () => {
  const [camaraPermission, requestPermission] = useCameraPermissions();

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

    console.log("IMAGE ====", JSON.stringify(image, null, 2));
  }

  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={handleTakeImage} />
    </View>
  );
};

export default ImagePicker;
