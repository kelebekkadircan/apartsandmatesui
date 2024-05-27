// import "./map.scss";
// import Pin from "../../components/pin/Pin";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer } from "react-leaflet";
// import { useEffect, useState } from "react";
// // import { useLocation } from "react-router-dom";

// export const Map = ({ items }) => {
//   const [mapData, setMapData] = useState(items || []);
//   const [isLoading, setisLoading] = useState(false);
//   // const [clickPosition, setClickPosition] = useState(null);

//   // const { pathname } = useLocation();
//   // const location = pathname.split("/")[1];

//   // const MapClickHandler = ({ setClickPosition }) => {
//   //   useMapEvents({
//   //     click: (event) => {
//   //       const { lat, lng } = event.latlng;
//   //       setClickPosition({ lat, lng });
//   //     },
//   //   });
//   //   return null;
//   // };

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

//   console.log(mapData[0], "MAPDATA");
//   // console.log(clickPosition, "CLICKPOSITION");
//   // console.log(location);
//   return (
//     !isLoading && (
//       <>
//         <MapContainer
//           // center={
//           //   mapData?.length > 1
//           //     ? [36.549362, 31.996994]
//           //     : [
//           //         mapData[0]?.latitude ? mapData[0]?.latitude : 36.549362,
//           //         mapData[0]?.longitude ? mapData[0]?.longitude : 31.996994,
//           //       ]
//           // }
//           // zoom={mapData?.length > 1 ? 14 : 16}
//           center={[36.549362, 31.996994]}
//           zoom={14}
//           scrollWheelZoom={true}
//           className="map"
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           {/* <MapClickHandler setClickPosition={setClickPosition} />
//           {location === "list"
//             ? null
//             : clickPosition && (
//                 <Marker position={[clickPosition.lat, clickPosition.lng]} />
//               )} */}

//           {items?.map((item, i) => (
//             <Pin item={item} key={i} />
//           ))}
//         </MapContainer>
//       </>
//     )
//   );
// };

import "./map.scss";
import Pin from "../../components/pin/Pin";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

export const Map = ({ items }) => {
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
      zoom={items.length === 1 ? 15 : 13}
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
