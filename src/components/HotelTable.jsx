import {
  Chip,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HotelTable = ({ hotels }) => {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#83A2FF" }}>
            {" "}
            <TableCell
              sx={{
                fontWeight: "bold",
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              Hotel Name
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              Rating
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              Facilities
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              City
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              Address
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              }}
            >
              Website
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotels.map((hotel) => (
            <TableRow
              key={hotel.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              hover
              onClick={() => navigate(`/hotel/${hotel.id}`)}
              style={{ cursor: "pointer" }}
            >
              <TableCell component="th" scope="row">
                {hotel.name}
              </TableCell>
              <TableCell align="right">{hotel.rating}</TableCell>
              <TableCell align="right">
                {hotel.facilities.map((facility, index) => (
                  <Chip
                    key={index}
                    label={facility}
                    variant="outlined"
                    sx={{ mr: 0.5, mb: 0.5 }}
                  />
                ))}
              </TableCell>
              <TableCell align="right">{hotel.city}</TableCell>
              <TableCell align="right">{hotel.address}</TableCell>
              <TableCell align="right">
                <Link
                  href={hotel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HotelTable;
