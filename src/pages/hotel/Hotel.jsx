// import { Map } from "~/components/map/Map";
// import { singlePostData, userData } from "~/lib/dummydata";
// import Slider from "../../components/singlePageSlider/SinglePageSlider";
// import { useLoaderData } from "react-router-dom";
import HotelFeatures from "./HotelFeatures";
import "./singlePage.scss";
import HotelDetail from "./HotelDetail";
import { useEffect, useState } from "react";
import { newRequest } from "~/utils/newRequest";
import { useParams } from "react-router-dom";

const Hotel = () => {
  // const data = useLoaderData();
  // console.log(data);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchSingleHotel = async () => {
      setLoading(true);
      try {
        const response = await newRequest(`/hotels/single/${id}`);
        setData(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleHotel();
  }, [id]);

  if (error) {
    return <div>Error</div>;
  }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  console.log(data);

  return (
    <div className="denemeSinglePage">
      <div className="singlePage">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <HotelDetail
              singlePostData={data}
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
            <HotelFeatures
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
              singlePostData={data}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Hotel;
