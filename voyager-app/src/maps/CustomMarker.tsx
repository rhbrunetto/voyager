import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MakrerUrl from "../../src/assets/mapMarker.svg";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode; // Content to display inside the marker
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, children }) => {
  const map = useMap();

  const customIcon = L.icon({
    iconUrl: MakrerUrl,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  return (
    <Marker position={position} icon={customIcon}>
      {children}
    </Marker>
  );
};

export default CustomMarker;
