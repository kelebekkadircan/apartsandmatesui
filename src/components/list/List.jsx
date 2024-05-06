import { CardListing } from "../cardListing/CardListing";
import "./list.scss";
import { listData } from "~/lib/dummydata";

function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <CardListing key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
