import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "100%" };
const center = { lat: 45.856803887338216, lng: 14.809838864417836 };

export default function GoogleMapView() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY || ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
