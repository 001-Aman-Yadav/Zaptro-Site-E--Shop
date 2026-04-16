import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";

const App = () => {
  const [location, setLocation] = useState("Fetching location...");
  const [opendropdown, setopendropdown] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

          const res = await axios.get(url, {
            headers: {
              "User-Agent": "my-react-app",
            },
          });

          const address = res.data.address;

          const cityName =
            address.city ||
            address.town ||
            address.village ||
            address.state ||
            "Unknown Location";

          setLocation(cityName);
          setopendropdown(false);
        } catch (error) {
          console.log("API Error:", error);
          setLocation("Error fetching location");
        }
      },
      (error) => {
        console.log("Permission Error:", error);
        setLocation("Permission Denied");
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        opendropdown={opendropdown}
        setopendropdown={setopendropdown}
      />

      <div className="text-center mt-4 font-semibold">
         Your Location: {location}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;