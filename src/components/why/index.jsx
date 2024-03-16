import { Link } from "react-router-dom";
import "./why.scss";
import More from "../../../public/img/more.svg";

export const Why = () => {
  return (
    <div className="why">
      <div className="customContainer">
        <div className="whyWrapper">
          <div className="whyContent">
            <div className="title">
              <span className="colorGreen">Neden ve Nasıl</span> <br />
              Aparts&Mates
              <span className="colorGreen">.com?</span>
            </div>
            <p className="text">
              Alanyanın ilk Apart Otel tanıtım rehberi apartsandmates.com 2024
              yılından bu yana apart arayan üniversite öğrencileriyle apart
              sahiplerini bir araya getiriyor. Kriterlerinize uygun apartı
              bulamazsanız, arayın sizin için en uygun yurdu bulalım!
            </p>
            <Link className="buttonMore">
              <span>Devamını Oku</span>
              <img src={More} alt="" />
            </Link>
          </div>
          <div className="whyImages">
            <img
              src="https://www.yurtlarburada.com/img/popular-cities.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
