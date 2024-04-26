import { Header } from "~/components/header/Header";
import "./explore.scss";
import { listData } from "~/lib/dummydata";
import { CardListing } from "~/components/cardListing/CardListing";
import { Map } from "~/components/map/Map";
import Filter from "~/components/filter/Filter";

const Explore = () => {
  const data = listData;

  return (
    <div className="Explore">
      <Header />
      <div className="listPage">
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            {data.map((item) => (
              <CardListing key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="mapContainer">
          <Map items={data} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
