import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useMapEvents } from "react-leaflet/esm/hooks";

function LocationMarker(props) {
  const { setPosition, position } = props;

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
