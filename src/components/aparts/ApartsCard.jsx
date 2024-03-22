import "./apartsCard.scss";

export const ApartsCard = () => {
  return (
    <div className="apartsCard">
      <img
        src="https://images.pexels.com/photos/8065685/pexels-photo-8065685.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="cardOverlay">
        <div className="title">Kestel</div>
        <div className="subTitle">Kayıtlı Öğrenci Apartı</div>
        <div className="apartNumber">12</div>
      </div>
      <div className="cardContent">
        <button className="btn">Apartları Görüntüle</button>
      </div>
    </div>
  );
};
