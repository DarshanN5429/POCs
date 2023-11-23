// Utility function to calculate the centroid of given coordinates
export const calculateAccurateGeographicCenter = (coords) => {
  let x = 0.0;
  let y = 0.0;
  let z = 0.0;

  coords.forEach(([lat, lon]) => {
    const latitude = (lat * Math.PI) / 180;
    const longitude = (lon * Math.PI) / 180;
    x += Math.cos(latitude) * Math.cos(longitude);
    y += Math.cos(latitude) * Math.sin(longitude);
    z += Math.sin(latitude);
  });

  x /= coords.length;
  y /= coords.length;
  z /= coords.length;

  const centralLongitude = Math.atan2(y, x);
  const centralSquareRoot = Math.sqrt(x * x + y * y);
  const centralLatitude = Math.atan2(z, centralSquareRoot);

  return [
    (centralLatitude * 180) / Math.PI,
    (centralLongitude * 180) / Math.PI,
  ];
};
