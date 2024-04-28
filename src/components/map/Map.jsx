import "./map.scss";
import Pin from "../../components/pin/Pin";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export const Map = ({ items }) => {
  return (
    <MapContainer
      center={[36.549362, 31.996994]}
      zoom={14}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item._id} />
      ))}
    </MapContainer>
  );
};
