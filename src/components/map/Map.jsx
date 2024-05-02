import "./map.scss";
import Pin from "../../components/pin/Pin";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

export const Map = ({ items }) => {
  const [mapData, setMapData] = useState(items || []);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    try {
      setMapData(items);
    } catch (e) {
      console.log(e);
    } finally {
      setisLoading(false);
    }
  }, [items]);

  // console.log(mapData[0], "MAPDATA");
  return (
    !isLoading && (
      <MapContainer
        center={
          mapData.length > 1
            ? [36.549362, 31.996994]
            : [
                mapData[0].latitude ? mapData[0]?.latitude : 36.549362,
                mapData[0].longitude ? mapData[0]?.longitude : 31.996994,
              ]
        }
        zoom={mapData.length > 1 ? 14 : 16}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items?.map((item, i) => (
          <Pin item={item} key={i} />
        ))}
      </MapContainer>
    )
  );
};
