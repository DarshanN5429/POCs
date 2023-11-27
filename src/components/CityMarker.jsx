
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Card, Typography, Box } from '@mui/material';

const CityMarker = ({ city, count, position, onCitySelect }) => {
  const handleCardClick = () => {
    onCitySelect(city);
  };

  return (
    <Marker position={position}>
      <Popup>
        <Card
          sx={{
            overflow: 'hidden',
            borderRadius: '10px',
            minWidth: '150px',
            textAlign: 'center',
            boxShadow: 3,
            cursor: 'pointer' 
          }}
          onClick={handleCardClick} 
        >
          <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText'}}>
            <Typography variant="subtitle1" component="div">
              {city}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Stores Count: <strong>{count}</strong>
            </Typography>
          </Box>
        </Card>
      </Popup>
    </Marker>
  );
};

export default CityMarker;
