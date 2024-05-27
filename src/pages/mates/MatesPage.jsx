// // import { useEffect, useRef, useState } from "react";
// // import "./matesPage.scss";
// // // import { useNavigate } from "react-router-dom";
// // import { newRequest } from "~/utils/newRequest";
// // // import { CardListing } from "~/components/cardListing/CardListing";
// // import { MatesCardListing } from "~/components/cardListing/MatesCardListing";
// // import { Header } from "~/components/header/Header";
// // import Filter from "~/components/filter/Filter";
// // import { Map } from "~/components/map/Map";

// // const MatesPage = () => {
// //   const [matesData, setMatesData] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState();

// //   // const navigate = useNavigate();
// //   const abortControllerRef = useRef(null);

// //   useEffect(() => {
// //     const fetchPopularHotels = async () => {
// //       abortControllerRef.current?.abort();
// //       abortControllerRef.current = new AbortController();

// //       setIsLoading(true);

// //       try {
// //         const response = await newRequest.get(`posts`, {
// //           signal: abortControllerRef.current?.signal,
// //         });
// //         const data = response.data;
// //         setMatesData(data);
// //       } catch (e) {
// //         if (e.name == "AbortError") {
// //           console.log("Request was aborted");
// //           return;
// //         }
// //         setError(e);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
// //     fetchPopularHotels();
// //   }, []);

// //   const headerDistrict = "Oda Arkadaşını Bul!";

// //   console.log(matesData);

// //   return isLoading ? (
// //     <div>Loading...</div>
// //   ) : error ? (
// //     <div>error</div>
// //   ) : (
// //     <div className="ExploreMates">
// //       <Header params={headerDistrict} />
// //       <div className="listPage">
// //         <div className="listContainer">
// //           <div className="wrapper">
// //             {matesData.map((item) => (
// //               <MatesCardListing key={item._id} item={item} />
// //             ))}
// //           </div>
// //         </div>
// //         <div className="mapContainer">
// //           <div className="mapInsideContainer">
// //             <Map items={matesData} />
// //           </div>
// //           <div className="mapAltiDeneme">
// //             <Filter />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MatesPage;

// import { useEffect, useRef, useState } from "react";
// import "./matesPage.scss";
// // import { useNavigate } from "react-router-dom";
// import { newRequest } from "~/utils/newRequest";
// // import { CardListing } from "~/components/cardListing/CardListing";
// import { MatesCardListing } from "~/components/cardListing/MatesCardListing";
// import { Header } from "~/components/header/Header";
// // import Filter from "~/components/filter/Filter";
// import { Map } from "~/components/map/Map";
// import FilterMates from "~/components/filter/FilterMates";
// import { useSearchParams } from "react-router-dom";

// const MatesPage = () => {
//   const [matesData, setMatesData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null); // Initialize with null

//   // const navigate = useNavigate();
//   const abortControllerRef = useRef(null);
//   const [params] = useSearchParams();
//   console.log(params.get("district"));

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
//         if (e.name === "AbortError") {
//           console.log("Request was aborted");
//           return;
//         }
//         setError(e);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchPopularHotels();

//     return () => {
//       abortControllerRef.current?.abort();
//     };
//   }, [params]);

//   const headerDistrict = "Oda Arkadaşını Bul!";

//   console.log(matesData);

//   return isLoading ? (
//     <div>Loading...</div>
//   ) : error ? (
//     <div>Error: {error.message}</div>
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
//             <FilterMates />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatesPage;

import { Header } from "~/components/header/Header";
import "./matesPage.scss";
// import { listData } from "~/lib/dummydata";
// import { CardListing } from "~/components/cardListing/CardListing";
import { Map } from "~/components/map/Map";
// import Filter from "~/components/filter/Filter";
import { Await, useLoaderData, useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import { MatesCardListing } from "~/components/cardListing/MatesCardListing";
import FilterMates from "~/components/filter/FilterMates";

const Explore = () => {
  // const data = listData;

  const data = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();

  const headerDistrict = params.get("district");

  if (data.response) {
    console.log(data.response);
  }

  console.log(data.postResponse.data);
  return (
    <div className="ExploreMates">
      <Header params={headerDistrict + "Oda Arkadaşlarını Bul "} />
      <div className="listPage">
        <div className="listContainer">
          <div className="wrapper">
            <Suspense fallback={<div>Loading...</div>}>
              <Await
                resolve={data.postResponse}
                errorElement={<div>Error</div>}
              >
                {(postResponse) =>
                  postResponse.data.map((item) => (
                    <MatesCardListing key={item._id} item={item} />
                  ))
                }
              </Await>
            </Suspense>
            {/* {data.map((item) => (
              <CardListing key={item._id} item={item} />
            ))} */}
          </div>
        </div>
        <div className="mapContainer">
          <div className="mapInsideContainer">
            {/* <Map items={data} /> */}
            <Suspense fallback={<div>Loading...</div>}>
              <Await
                resolve={data.postResponse}
                errorElement={<div>Error</div>}
              >
                {(postResponse) => <Map items={postResponse.data} />}
              </Await>
            </Suspense>
          </div>
          <div className="mapAltiFilterOtel">
            <FilterMates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
