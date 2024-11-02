// Map.tsx
import React, { useState } from "react";
import { MapContainer, Popup, TileLayer, useMapEvents } from "react-leaflet";
import CustomMarker from "./CustomMarker";

export default function Map() {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e: any) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <CustomMarker position={position}>
        <Popup>You clicked here</Popup>
      </CustomMarker>
    );
  }

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
