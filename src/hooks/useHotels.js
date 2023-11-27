import axios from "axios";
import { useEffect, useState } from "react";

const useHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [cities, setCities] = useState([]);
  const [hotelCountsByCity, setHotelCountsByCity] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/hotels")
      .then((response) => {
        setHotels(response.data);
        const cityNames = Array.from(
          new Set(response.data.map((hotel) => hotel.city))
        );
        setCities(cityNames);
        // Calculate hotel counts per city
        const counts = response.data.reduce((acc, curr) => {
          acc[curr.city] = (acc[curr.city] || 0) + 1;
          return acc;
        }, {});
        setHotelCountsByCity(counts);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const filteredHotels = hotels.filter((hotel) => {
    const matchesCity = selectedCity === "" || hotel.city === selectedCity;
    let matchesRating = true;
    if (ratingFilter) {
      const rating = parseFloat(hotel.rating);
      switch (ratingFilter) {
        case "4.5":
          matchesRating = rating >= 4.5;
          break;
        case "4-4.4":
          matchesRating = rating >= 4 && rating <= 4.4;
          break;
        case "3.5-3.9":
          matchesRating = rating >= 3.5 && rating <= 3.9;
          break;
        case "3-3.4":
          matchesRating = rating >= 3 && rating <= 3.4;
          break;
        case "below3":
          matchesRating = rating < 3;
          break;
        default:
          matchesRating = true;
      }
    }
    return matchesCity && matchesRating;
  });

  return {
    filteredHotels,
    cities,
    handleCityChange,
    handleRatingChange,
    selectedCity,
    ratingFilter,
    hotelCountsByCity
  };
};

export default useHotels;
