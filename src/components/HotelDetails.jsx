import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Link,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/hotels/${id}`)
      .then((response) => {
        setHotel(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hotel details:", error);
      });
  }, [id]);

  if (!hotel) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </Box>
    );
  }

  return (
    <Card
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          color="primary.main"
        >
          {hotel.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Rating
            name="read-only"
            value={hotel.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {hotel.rating.toFixed(1)}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {hotel.facilities.map((facility, index) => (
            <Chip
              key={index}
              label={facility}
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
        <Typography variant="body1" gutterBottom>
          Address: {hotel.address}
        </Typography>
        <Link
          href={hotel.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <Button variant="contained" color="primary" sx={{ mt: 1 }}>
            Visit Website
          </Button>
        </Link>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
          bgcolor: "grey.100",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Card>
  );
};

export default HotelDetails;
