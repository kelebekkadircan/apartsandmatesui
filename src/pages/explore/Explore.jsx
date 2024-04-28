import { Header } from "~/components/header/Header";
import "./explore.scss";
// import { listData } from "~/lib/dummydata";
import { CardListing } from "~/components/cardListing/CardListing";
import { Map } from "~/components/map/Map";
import Filter from "~/components/filter/Filter";
import { useLoaderData, useSearchParams } from "react-router-dom";

const Explore = () => {
  // const data = listData;

  const deneme = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();

  const headerDistrict = params.get("district");

  console.log(deneme);

  return (
    <div className="Explore">
      <Header params={headerDistrict} />
      <div className="listPage">
        <div className="listContainer">
          <div className="wrapper">
            {deneme.map((item) => (
              <CardListing key={item._id} item={item} />
            ))}
          </div>
        </div>
        <div className="mapContainer">
          <div className="mapAltiDeneme">
            <Filter />
          </div>
          <Map items={deneme} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
