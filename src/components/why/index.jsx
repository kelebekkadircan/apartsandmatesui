import { Link } from "react-router-dom";
import "./why.scss";
import More from "/img/more.svg";

export const Why = () => {
  return (
    <div className="why">
      <div className="customContainer">
        <div className="whyWrapper">
          <div className="whyContent">
            <div className="title">
              Neden ve Nasıl <span style={{ color: "#4a5aa3" }}>Aparts</span> &{" "}
              <span style={{ color: "#0097B2" }}>Mates</span>
            </div>
            <p className="text">
              Alanyanın ilk Apart Otel tanıtım rehberi apartsandmates.com 2024
              yılından bu yana apart arayan üniversite öğrencileriyle apart
              sahiplerini bir araya getiriyor. Kriterlerinize uygun apartı
              bulamazsanız, arayın sizin için en uygun yurdu bulalım!
            </p>
            <Link to={"/aboutUs"} className="buttonMore">
              <span>Devamını Oku</span>
              <img src={More} alt="" />
            </Link>
          </div>
          <div className="whyImages">
            <img
              // src="https://www.yurtlarburada.com/img/popular-cities.png"
              src="/micoFour.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
