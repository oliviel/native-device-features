import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/PlacesList";
import { ScreenProps } from "../App";
import { IPlace } from "../models/place";

const AllPlaces = ({ route }: ScreenProps<"AllPlaces">) => {
  const isFocuse = useIsFocused();
  const [places, setPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    if (isFocuse && route.params) {
      const place = route.params.place;
      setPlaces([...places, place]);
    }
  }, [isFocuse, route]);

  return <PlacesList places={places} />;
};

export default AllPlaces;
