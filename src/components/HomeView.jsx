import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import useHotels from "../hooks/useHotels";
import CityFilter from "./CityFilter";
import HotelTable from "./HotelTable";
import MapView from "./MapView01";
import RatingFilter from "./RatingFilter";

const HomeView = () => {
  const [tableView, setTableView] = useState(false);
  const {
    filteredHotels,
    cities,
    handleCityChange,
    handleRatingChange,
    selectedCity,
    ratingFilter,
  } = useHotels();

  const toggleView = () => {
    setTableView(!tableView);
  };

  return (
    <Box sx={{ bgcolor: "grey.100", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Stores View
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 2, md: 4 },
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: { md: "calc(50% - 16px)" },
              mb: { xs: 2, md: 0 },
            }}
          >
            {" "}
            <CityFilter
              cities={cities}
              selectedCity={selectedCity}
              handleCityChange={handleCityChange}
            />
          </Box>
          <Box
            sx={{
              width: { md: "calc(50% - 16px)" },
              mb: { xs: 2, md: 0 },
            }}
          >
            {" "}
            <RatingFilter
              ratingFilter={ratingFilter}
              handleRatingChange={handleRatingChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: { md: "auto" },
              flexGrow: { md: 0 },
            }}
          >
            {" "}
            <Button variant="contained" color="primary" onClick={toggleView}>
              {tableView ? "Map View" : "Table View"}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            border: 2,
            borderColor: "grey.300",
            boxShadow: 3,
            borderRadius: 2,
            mx: "auto",
            overflow: "hidden",
          }}
        >
          {tableView ? (
            <HotelTable hotels={filteredHotels} />
          ) : (
            <MapView
              selectedCity={selectedCity}
              ratingFilter={ratingFilter}
              hotels={filteredHotels}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HomeView;
