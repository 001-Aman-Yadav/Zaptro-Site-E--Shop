import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import axios from "axios";
import L from "leaflet";

// Fix marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

const LocationMarker = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return null;
};

const LocationModal = ({ setLocation, onClose }) => {
  const [position, setPosition] = useState({ lat: 26.8, lng: 82.1 });

  const handleConfirm = async () => {
    const res = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${position.lat}&lon=${position.lng}&format=json`
    );

    const address = res.data.address;

    const city =
      address.city ||
      address.town ||
      address.village ||
      address.state ||
      "Selected Location";

    setLocation(city);
    onClose();
  };

  const handleCurrent = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white w-[95%] max-w-2xl rounded-2xl shadow-2xl p-4">

        <h2 className="text-xl font-bold mb-3">📍 Choose Delivery Location</h2>

        <MapContainer
          center={position}
          zoom={13}
          className="h-[350px] w-full rounded-xl"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} />
          <LocationMarker setPosition={setPosition} />
        </MapContainer>

        <div className="flex justify-between mt-4 gap-3">
          <button
            onClick={handleCurrent}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Use Current Location
          </button>

          <button
            onClick={handleConfirm}
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Confirm Location
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-3 text-gray-500 w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LocationModal;