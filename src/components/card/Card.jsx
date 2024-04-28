import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`list/${item._id}`}>
        <div className="logoContainer">
          <img src={item.logo} alt="" />
        </div>
        <div className="denemeName">OTEL ADI</div>
      </Link>
    </div>
  );
};

export default Card;
