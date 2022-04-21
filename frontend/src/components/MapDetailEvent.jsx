import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapDetailEvent.css";

function MapDetailEvent(props) {
  const { coordinates, titrepopup } = props;

  return (
    <div id="mapDetailEventContainer">
      <MapContainer
        className="mapcontainer"
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
            {titrepopup} <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapDetailEvent;
