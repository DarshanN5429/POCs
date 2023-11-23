import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapViewUpdater = ({
  selectedCity,
  cityCoordinates,
  defaultCenterCoordinates,
  defaultZoom,
}) => {
  const map = useMap();

  useEffect(() => {
    if (selectedCity && cityCoordinates[selectedCity]) {
      map.setView(cityCoordinates[selectedCity], 11);
    } else {
      map.setView(defaultCenterCoordinates, defaultZoom);
    }
  }, [
    selectedCity,
    cityCoordinates,
    defaultCenterCoordinates,
    defaultZoom,
    map,
  ]);

  return null;
};

export default MapViewUpdater;
