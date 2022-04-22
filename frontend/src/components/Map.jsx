import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import listEvent from "./event";
import Green from "../assets/markers/Green.png";
import Blue from "../assets/markers/Blue.png";
import Yellow from "../assets/markers/Yellow.png";
import Red from "../assets/markers/Red.png";
import "./Map.css";

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
  const { events } = props;
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
    <div>
      <MapContainer
        class="map-cont"
        center={[43.59709218840526, 1.4307425383881127]}
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />
        {events.map((el) => (
          <Marker position={el.fields.geo_point_2d} icon={IconColor(el)}>
            <Popup class="popup">
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
