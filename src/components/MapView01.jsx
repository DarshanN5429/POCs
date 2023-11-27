import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import HotelMarker from "./HotelMarker01";
import MapViewUpdater from "./MapViewUpdater";
import CityMarker from "./CityMarker";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const cityCoordinates = {
  "New Delhi": [28.6139, 77.209],
  Mumbai: [19.076, 72.8777],
  Bangalore: [12.9716, 77.5946],
  Chennai: [13.0827, 80.2707],
  Kolkata: [22.5726, 88.3639],
  Hyderabad: [17.385, 78.4867],
  Pune: [18.5204, 73.8567],
  Jaipur: [26.9124, 75.7873],
  Lucknow: [26.8467, 80.9462],
  Kanpur: [26.4499, 80.3319],
  Nagpur: [21.1458, 79.0882],
  Indore: [22.7196, 75.8577],
  Thiruvananthapuram: [8.5241, 76.9366],
  Bhopal: [23.2599, 77.4126],
  Visakhapatnam: [17.6868, 83.2185],
  Patna: [25.5941, 85.1376],
  Vadodara: [22.3072, 73.1812],
  Agra: [27.1767, 78.0081],
  Varanasi: [25.3176, 82.9739],
  Amritsar: [31.634, 74.8723],
  Jodhpur: [26.238947, 73.024307],
  Udaipur: [24.585445, 73.712479],
  Kochi: [9.94, 76.209023],
};

const defaultCenterCoordinates = [20.5937, 78.9629]; // Center of India
const defaultZoom = 5; // Default zoom for showing all of India

const MapView = ({ hotels, selectedCity, hotelCountsByCity,onCitySelect }) => {
  const renderMarkers = () => {
    if (selectedCity) {
      return hotels
        .filter(hotel => hotel.lat && hotel.lng) 
        .map((hotel) => (
          <HotelMarker key={hotel.id} hotel={hotel} />
        ));
    } else {
      return Object.keys(cityCoordinates).map((city) => {
        const position = cityCoordinates[city];
        const count = hotelCountsByCity && hotelCountsByCity[city];
        if (position && count !== undefined) { 
          return <CityMarker key={city} city={city} count={count} position={position} 
          onCitySelect={onCitySelect}/>;
        }
        return null;
      }).filter(Boolean);
    }
  };

  return (
    <div className="map-container" style={{ height: "75vh", width: "100%" }}>
      <MapContainer
        center={selectedCity ? cityCoordinates[selectedCity] : defaultCenterCoordinates}
        zoom={selectedCity ? 11 : defaultZoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {renderMarkers()}
        <MapViewUpdater
          selectedCity={selectedCity}
          cityCoordinates={cityCoordinates}
          defaultCenterCoordinates={defaultCenterCoordinates}
          defaultZoom={defaultZoom}
        />
      </MapContainer>
    </div>
  );
};

export default MapView;
