import "./map.scss";
import Pin from "../../components/pin/Pin";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

export const MapSingle = ({ items }) => {
  const [mapData, setMapData] = useState(items || []);
  const [isLoading, setIsLoading] = useState(true);
  const [initialPosition, setInitialPosition] = useState([
    36.549362, 31.996994,
  ]);

  useEffect(() => {
    setIsLoading(true);
    try {
      setMapData(items);
      if (items.length > 0) {
        const { latitude, longitude } = items[0];
        setInitialPosition([latitude, longitude]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [items]);

  useEffect(() => {
    if (items.length === 1) {
      const { latitude, longitude } = items[0];
      setInitialPosition([latitude, longitude]);
    } else if (items.length > 1) {
      setInitialPosition([items[0].latitude, items[0].longitude]);
    }
  }, [items]);

  console.log(mapData[0], "MAPDATA");

  if (isLoading || !initialPosition[0] || !initialPosition[1]) {
    return <div>Loading...</div>;
  }

  return (
    <MapContainer
      center={initialPosition}
      zoom={items.length === 1 ? 15 : 8}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapData?.map((item, i) => (
        <Pin item={item} key={i} />
      ))}
    </MapContainer>
  );
};
