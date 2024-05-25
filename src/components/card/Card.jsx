import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="cardHeroSlider">
      <Link to={`list/${item._id}`}>
        <div className="logoContainer">
          <img src={item?.avatar || "/noLogo.png"} alt="" />
        </div>
        <div className="denemeName"> {item?.name} </div>
      </Link>
    </div>
  );
};

export default Card;
