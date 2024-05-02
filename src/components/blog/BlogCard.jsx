import { Link } from "react-router-dom";
import "./blogCard.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { format } from "date-fns";

export const BlogCard = ({ data }) => {
  var denemeDate = new Date(data.createdAt);

  return (
    <div className="BlogCard">
      <div className="container">
        <div className="top">
          <img src={data.images[0]} alt="blogImage" />
          <div className="popularCardOverlay">
            <Link>
              <p className="overlayButton">Yazıyı Oku</p>
            </Link>
          </div>
        </div>
        <div className="bottom">
          <h1 className="date">{format(denemeDate, "MM/dd/yyyy")}</h1>
          <h3 className="title"> {data.title} </h3>
          <div className="infos">
            <div className="iconContainer">
              <FaRegUserCircle />
            </div>
            <span>
              Aparts<span className="color-blue">&</span>Mates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
