import "./blogCard.scss";

export const BlogCard = () => {
  return (
    <div className="BlogCard">
      <div className="container">
        <div className="top">
          <img
            // src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=400"
            // src="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=400"
            src="https://images.pexels.com/photos/11566568/pexels-photo-11566568.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="blogImage"
          />
          <div className="popularCardOverlay">
            <p className="overlayButton">Yazıyı Oku</p>
          </div>
        </div>
        <div className="bottom">
          <h1 className="date">20.03.2024</h1>
          <h3 className="title">Alanya Kalesi Hakkında Bilgiler</h3>
          <div className="infos">
            <span>
              Aparts<span className="color-blue">&</span>Mates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
