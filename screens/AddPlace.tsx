import { ScreenProps } from "../App";
import PlaceForm from "../components/PlaceForm";
import { IPlace } from "../models/place";

const AddPlace = ({ navigation }: ScreenProps<"AddPlace">) => {
  function handleAddPlace(place: IPlace) {
    navigation.navigate("AllPlaces", {
      place,
    });
  }

  return <PlaceForm onAddPlace={handleAddPlace} />;
};

export default AddPlace;
