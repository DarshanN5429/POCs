import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeView from "./components/HomeView";
import HotelDetails from "./components/HotelDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
