import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/IconButton";
import { Theme } from "./constants/theme";
import Map from "./screens/Map";
import { IPlace } from "./models/place";

export type RootStackParamList = {
  AllPlaces: { place: IPlace };
  AddPlace: { pickedLocation: { lat: number; lng: number } };
  Map: undefined;
};

export type RoutesProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: Theme.colors.white,
            headerStyle: {
              backgroundColor: Theme.colors.primary500,
            },
            contentStyle: {
              backgroundColor: Theme.colors.gray700,
            },
            headerBackTitleVisible: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              headerTitle: "All Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor!}
                  onPress={() => {
                    navigation.navigate("AddPlace");
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              headerTitle: "Add Place",
            }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
