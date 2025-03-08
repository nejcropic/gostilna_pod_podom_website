import React from "react";
import "./MapComponent.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapComponent() {
  const googleMapsApiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: 45.856803887338216,
    lng: 14.809838864417836,
  };

  const MapComponentMap = () => {
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_WEATHER_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  };

  return (
    <div>
      <MapComponentMap />
    </div>
  );
}

export default MapComponent;
