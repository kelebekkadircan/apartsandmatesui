// import { Marker, Popup } from "react-leaflet";
// import "./pin.scss";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Pin({ item }) {
//   const [itemData, setItemData] = useState(item || []);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [coverImage, setCoverImage] = useState(
//     item?.images?.[0] || "noLogo.png"
//   );

//   useEffect(() => {
//     setLoading(true);
//     setCoverImage(item?.images[0]);
//     try {
//       setItemData(item);
//     } catch (e) {
//       console.log(e);
//       setError(e);
//     } finally {
//       setLoading(false);
//     }
//   }, [item, coverImage]);

//   console.log(itemData, "ITEM");
//   // console.log(itemData?.latitude, itemData?.longitude, "LATLONG");

//   return loading ? (
//     <div>Loading</div>
//   ) : error ? (
//     <div>Error</div>
//   ) : (
//     <Marker
//       position={[
//         itemData.latitude ? itemData?.latitude : 36.549362,
//         itemData.longitude ? itemData?.longitude : 31.996994,
//       ]}
//     >
//       <Popup>
//         <div className="popupContainer">
//           <img src={coverImage || "/noLogo.png"} alt="" />
//           <div className="textContainer">
//             <Link to={`/list/${itemData._id}`}>{itemData.title}</Link>

//             <b>$ {itemData.min}</b>
//           </div>
//         </div>
//       </Popup>
//     </Marker>
//   );
// }

// export default Pin;

import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Pin({ item }) {
  const [itemData, setItemData] = useState(item || {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [coverImage, setCoverImage] = useState(
    item?.images?.[0] || "/noLogo.png"
  );

  useEffect(() => {
    setLoading(true);
    try {
      setItemData(item || {});
      setCoverImage(item?.images?.[0] || "/noLogo.png");
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [item]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Marker
      position={[
        itemData.latitude ? itemData.latitude : 36.549362,
        itemData.longitude ? itemData.longitude : 31.996994,
      ]}
    >
      <Popup>
        <div className="popupContainer">
          <img src={coverImage} alt="Cover" />
          <div className="textContainer">
            <Link to={`/list/${itemData._id}`}>{itemData.title}</Link>
            <b>$ {itemData.min}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
