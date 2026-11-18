import React, { useState, useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const center = [32.6669, -16.9241]; // Madeira

const customIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MarkerPopup({ position, removeMarker }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      L.DomEvent.disableClickPropagation(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ textAlign: "center" }}>
      <strong>Selected Location</strong>

      <p>
        {position.lat.toFixed(5)}, {position.lng.toFixed(5)}
      </p>

      <button
        type="button"
        onClick={() => removeMarker(position.id)}
        style={{
          background: "#e74c3c",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Remove Location
      </button>
    </div>
  );
}

function LocationPicker({ positions, setPositions }) {
  useMapEvents({
    click(e) {
      const newPosition = {
        id: crypto.randomUUID(),
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      };

      setPositions((prev) => [...prev, newPosition]);
    },
  });

  const removeMarker = (id) => {
    setPositions((prev) => prev.filter((position) => position.id !== id));
  };

  <button
    onClick={(e) => {
      e.stopPropagation();
      removeMarker(position.id);
    }}
    style={{
      background: "#e74c3c",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "6px",
      cursor: "pointer",
      width: "100%",
    }}
  >
    Remove Location
  </button>;

  return (
    <>
      {positions.map((position) => (
        <Marker
          key={position.id}
          position={[position.lat, position.lng]}
          icon={customIcon}
        >
          <Popup>
            <MarkerPopup position={position} removeMarker={removeMarker} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}

function MapComponent() {
  const [positions, setPositions] = useState([]);

  return (
    <MapContainer
      center={center}
      zoom={11}
      scrollWheelZoom={true}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "12px",
        zIndex: 0,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationPicker positions={positions} setPositions={setPositions} />
    </MapContainer>
  );
}

export default MapComponent;
