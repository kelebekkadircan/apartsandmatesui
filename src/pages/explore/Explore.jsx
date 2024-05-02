import { Header } from "~/components/header/Header";
import "./explore.scss";
// import { listData } from "~/lib/dummydata";
import { CardListing } from "~/components/cardListing/CardListing";
import { Map } from "~/components/map/Map";
import Filter from "~/components/filter/Filter";
import { Await, useLoaderData, useSearchParams } from "react-router-dom";
import { Suspense } from "react";

const Explore = () => {
  // const data = listData;

  const data = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();

  const headerDistrict = params.get("district");

  if (data.response) {
    console.log(data.response);
  }
  return (
    <div className="Explore">
      <Header params={headerDistrict} />
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
                    <CardListing key={item._id} item={item} />
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
          <div className="mapAltiDeneme">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
