// import { useEffect, useRef, useState } from "react";
// import "./matesPage.scss";
// // import { useNavigate } from "react-router-dom";
// import { newRequest } from "~/utils/newRequest";
// // import { CardListing } from "~/components/cardListing/CardListing";
// import { MatesCardListing } from "~/components/cardListing/MatesCardListing";
// import { Header } from "~/components/header/Header";
// import Filter from "~/components/filter/Filter";
// import { Map } from "~/components/map/Map";

// const MatesPage = () => {
//   const [matesData, setMatesData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();

//   // const navigate = useNavigate();
//   const abortControllerRef = useRef(null);

//   useEffect(() => {
//     const fetchPopularHotels = async () => {
//       abortControllerRef.current?.abort();
//       abortControllerRef.current = new AbortController();

//       setIsLoading(true);

//       try {
//         const response = await newRequest.get(`posts`, {
//           signal: abortControllerRef.current?.signal,
//         });
//         const data = response.data;
//         setMatesData(data);
//       } catch (e) {
//         if (e.name == "AbortError") {
//           console.log("Request was aborted");
//           return;
//         }
//         setError(e);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchPopularHotels();
//   }, []);

//   const headerDistrict = "Oda Arkadaşını Bul!";

//   console.log(matesData);

//   return isLoading ? (
//     <div>Loading...</div>
//   ) : error ? (
//     <div>error</div>
//   ) : (
//     <div className="ExploreMates">
//       <Header params={headerDistrict} />
//       <div className="listPage">
//         <div className="listContainer">
//           <div className="wrapper">
//             {matesData.map((item) => (
//               <MatesCardListing key={item._id} item={item} />
//             ))}
//           </div>
//         </div>
//         <div className="mapContainer">
//           <div className="mapInsideContainer">
//             <Map items={matesData} />
//           </div>
//           <div className="mapAltiDeneme">
//             <Filter />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatesPage;

import { useEffect, useRef, useState } from "react";
import "./matesPage.scss";
// import { useNavigate } from "react-router-dom";
import { newRequest } from "~/utils/newRequest";
// import { CardListing } from "~/components/cardListing/CardListing";
import { MatesCardListing } from "~/components/cardListing/MatesCardListing";
import { Header } from "~/components/header/Header";
import Filter from "~/components/filter/Filter";
import { Map } from "~/components/map/Map";

const MatesPage = () => {
  const [matesData, setMatesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Initialize with null

  // const navigate = useNavigate();
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchPopularHotels = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await newRequest.get(`posts`, {
          signal: abortControllerRef.current?.signal,
        });
        const data = response.data;
        setMatesData(data);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Request was aborted");
          return;
        }
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPopularHotels();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const headerDistrict = "Oda Arkadaşını Bul!";

  console.log(matesData);

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error.message}</div>
  ) : (
    <div className="ExploreMates">
      <Header params={headerDistrict} />
      <div className="listPage">
        <div className="listContainer">
          <div className="wrapper">
            {matesData.map((item) => (
              <MatesCardListing key={item._id} item={item} />
            ))}
          </div>
        </div>
        <div className="mapContainer">
          <div className="mapInsideContainer">
            <Map items={matesData} />
          </div>
          <div className="mapAltiDeneme">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatesPage;
