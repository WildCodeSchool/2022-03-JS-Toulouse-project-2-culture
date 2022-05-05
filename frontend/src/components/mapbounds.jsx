import { useCallback, useEffect } from "react";
import { useMap } from "react-leaflet";

function Mapbounds({ setMapLocation }) {
  const map = useMap();

  const onMove = useCallback(() => {
    setMapLocation(map.getBounds());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);
  return <div />;
}

export default Mapbounds;
