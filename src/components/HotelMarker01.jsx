import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";

const HotelMarker01 = ({ hotel }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/hotel/${hotel.id}`);
  };

  return (
    <Marker
      position={[hotel.lat, hotel.lng]}
      eventHandlers={{ click: () => {} }}
    >
      <Popup closeButton={false} minWidth={240} maxWidth={240}>
        <Card sx={{ maxWidth: 240, boxShadow: 3, "&:last-child": { pb: 0 } }}>
          <CardActionArea onClick={handleNavigate}>
            <CardContent>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                noWrap
              >
                {hotel.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                Rating: {hotel.rating}
              </Typography>
              <Button
                size="small"
                color="primary"
                sx={{ fontWeight: "bold" }}
                onClick={handleNavigate}
              >
                View Details
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Popup>
    </Marker>
  );
};

export default HotelMarker01;
