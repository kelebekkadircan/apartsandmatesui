import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Pin({ item }) {
  const [itemData, setItemData] = useState(item || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      setItemData(item);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [item]);

  //  console.log(itemData, "ITEM");
  // console.log(itemData?.latitude, itemData?.longitude, "LATLONG");
  if (loading) return <div>Loading...</div>;

  if (!loading) {
    return (
      <Marker
        position={[
          itemData.latitude ? itemData?.latitude : 36.549362,
          itemData.longitude ? itemData?.longitude : 31.996994,
        ]}
      >
        <Popup>
          <div className="popupContainer">
            {/* <img src={itemData && itemData?.images[0]} alt="" /> */}
            <div className="textContainer">
              <Link to={`/list/${itemData._id}`}>{itemData.title}</Link>

              <b>$ {itemData.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    );
  }
}

export default Pin;
