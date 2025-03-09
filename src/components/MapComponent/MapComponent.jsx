import React from "react";
import "./MapComponent.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapComponent() {
  const googleApi = process.env.REACT_APP_API_KEY;

  const containerStyle = {
    width: "100%", // Default 100% width
    height: "100%",
  };

  const center = {
    lat: 45.856803887338216,
    lng: 14.809838864417836,
  };

  const MapComponentMap = () => {
    return (
      <LoadScript googleMapsApiKey={googleApi}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  };

  return (
    <div className="map-wrapper">
      <MapComponentMap />
    </div>
  );
}

export default MapComponent;
