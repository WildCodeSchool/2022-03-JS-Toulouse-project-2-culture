import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

function Map() {
  const [arrayOfCoords, setArrayOfCoords] = useState([]);
  useEffect(() => {
    fetch(
      "https://data.laregion.fr/api/records/1.0/search/?dataset=agendas-participatif-des-sorties-en-occitanie&q=&rows=400&facet=type&facet=thematique&facet=date_debut&facet=commune"
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setArrayOfCoords(result.records.map((el) => el.geometry.coordinates));
      });
  }, []);
  return (
    <div>
      <MapContainer
        class="map-cont"
        center={[43.59709218840526, 1.4307425383881127]}
        zoom={11}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {arrayOfCoords.length > 0
          ? arrayOfCoords.map((coord) => (
              <Marker position={[coord[1], coord[0]]}>
                <Popup class="popup">
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            ))
          : ""}
      </MapContainer>
    </div>
  );
}

export default Map;
