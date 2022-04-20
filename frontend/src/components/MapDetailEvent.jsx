import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapDetailEvent.css";

function MapDetailEvent(props) {
  const { coordinates } = props;
  console.log(coordinates);
  return (
    <div id="mapDetailEventContainer">
      <MapContainer
        center={[coordinates[1], coordinates[0]]}
        zoom={13}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates[1], coordinates[0]]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapDetailEvent;
