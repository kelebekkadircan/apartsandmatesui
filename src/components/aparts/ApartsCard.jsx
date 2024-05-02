import { Link } from "react-router-dom";
import "./apartsCard.scss";

export const ApartsCard = ({ data }) => {
  return (
    <div className="apartsCard">
      <img
        src="https://images.pexels.com/photos/8065685/pexels-photo-8065685.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="cardOverlay">
        <div className="title">{data.district}</div>
        <div className="subTitle">Kayıtlı Öğrenci Apartı</div>
        <div className="apartNumber">{data.hotelCount}</div>
      </div>
      <div className="cardContent">
        <Link to={`/list?district=${data.district}`}>
          <button className="btn">Apartları Görüntüle</button>
        </Link>
      </div>
    </div>
  );
};
