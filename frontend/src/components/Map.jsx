import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import LocationMarker from "./LocationMarker";
import Green from "../assets/markers/Green.png";
import Blue from "../assets/markers/Blue.png";
import Yellow from "../assets/markers/Yellow.png";
import Red from "../assets/markers/Red.png";
import Bluelgd from "../assets/markers/Bluelgd.png";
import Greenlgd from "../assets/markers/Greenlgd.png";
import Redlgd from "../assets/markers/Redlgd.png";
import Yellowlgd from "../assets/markers/Yellowlgd.png";
import "./Map.css";
import Mapbounds from "./mapbounds";

const GreenIcon = new L.Icon({
  iconUrl: Green,
  iconSize: [30, 30],
});
const BlueIcon = new L.Icon({
  iconUrl: Blue,
  iconSize: [30, 30],
});
const YellowIcon = new L.Icon({
  iconUrl: Yellow,
  iconSize: [30, 30],
});
const RedIcon = new L.Icon({
  iconUrl: Red,
  iconSize: [30, 30],
});

function Map(props) {
  const { events, mapLocation, setMapLocation } = props;

  const [position, setPosition] = useState([
    43.59709218840526, 1.4307425383881127,
  ]);
  function IconColor(event) {
    let CustomIcon = Marker;
    if (event.fields.thematique === "Culture") {
      CustomIcon = BlueIcon;
    } else if (event.fields.thematique === "Environnement") {
      CustomIcon = GreenIcon;
    } else if (event.fields.thematique === "Sport") {
      CustomIcon = RedIcon;
    } else {
      CustomIcon = YellowIcon;
    }
    return CustomIcon;
  }
  return (
    <div className="mapdiv">
      <MapContainer class="map-cont" center={position} zoom={12}>
        <Mapbounds mapLocation={mapLocation} setMapLocation={setMapLocation} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />
        {events.map((el) => (
          <Marker
            key={el.recordid}
            position={el.fields.geo_point_2d}
            icon={IconColor(el)}
          >
            <Popup class="popup">
              {el.fields.titre}
              <br /> {el.fields.date}
            </Popup>
          </Marker>
        ))}
        <LocationMarker setPosition={setPosition} position={position} />;
      </MapContainer>

      <div className="legend">
        <img className="markerslgd" src={Bluelgd} alt="Bleu = Culture" />
        <img className="markerslgd" src={Greenlgd} alt="Vert = Environnement" />
        <img className="markerslgd" src={Redlgd} alt="Rouge = Sport" />
        <img className="markerslgd" src={Yellowlgd} alt="Jaune = Autres" />
      </div>
    </div>
  );
}

export default Map;
