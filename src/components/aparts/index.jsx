import { FaArrowRightLong } from "react-icons/fa6";
import "./aparts.scss";
import { ApartsCard } from "./ApartsCard";
export const Aparts = () => {
  return (
    <div className="ApartSection">
      <div className="apartContainer">
        <div className="apartWrapper">
          <div className="apartContent">
            <img src="https://www.yurtlarburada.com/img/building.svg" alt="" />
            <div className="apartContentTitle">
              <span className="color-blue d-block">Bölgelere Göre</span>
              Apart Listeleri
            </div>
            <div className="contentText">
              Üniversiteyi kazandınız kalacak yer mi arıyorsunuz? Şehrindeki kız
              ve erkek öğrenci yurtlarını bir araya getiren Yurtlarburada.com
              aracılığıyla yurtların iletişim bilgilerini öğrenebilir, en uygun
              oda fiyatlarına kolayca ulaşabilir, rezervasyon yaptırabilirsin!
            </div>
            <div className="contentInfo">
              <div className="infoTitle">
                <strong>124</strong>
                Aktif Apart
              </div>
              <div className="apartNav">
                <div className="navTitle">
                  Tümünü Gör
                  <div className="navIcon">
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="apartCard">
            <ApartsCard />
            <ApartsCard />
            <ApartsCard />
            <ApartsCard />
          </div>
        </div>
      </div>
    </div>
  );
};
