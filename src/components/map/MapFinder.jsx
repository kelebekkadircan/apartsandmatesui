import "./map.scss";
// import Pin from "../../components/pin/Pin";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
// import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const MapFinder = ({ setGetLatlng }) => {
  //   const [mapData, setMapData] = useState(items || []);
  //   const [isLoading, setisLoading] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);

  const { pathname } = useLocation();
  const location = pathname.split("/")[1];

  const MapClickHandler = ({ setClickPosition }) => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setClickPosition({ lat, lng });
        setGetLatlng({ lat, lng });
      },
    });
    return null;
  };

  //   useEffect(() => {
  //     setisLoading(true);
  //     try {
  //       setMapData(items);
  //     } catch (e) {
  //       console.log(e);
  //     } finally {
  //       setisLoading(false);
  //     }
  //   }, [items]);

  //   console.log(clickPosition, "CLICKPOSITION");
  //   console.log(location);
  return (
    <>
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
        <MapClickHandler setClickPosition={setClickPosition} />
        {location === "list"
          ? null
          : clickPosition && (
              <Marker position={[clickPosition.lat, clickPosition.lng]} />
            )}

        {/* {items?.map((item, i) => (
            <Pin item={item} key={i} />
          ))} */}
      </MapContainer>
    </>
  );
};
