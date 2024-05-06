import SearchBarMobil from "~/pages/test/SearchBarMobil";
import { HeroSlider } from "../heroSlider";
import "./hero.scss";

export const Hero = () => {
  return (
    <div className="heroSection">
      <div className="heroWrapper">
        <h1 className="title">Alanyada Aradığın Apartlar Burada</h1>
        <p className="description">
          Alanyanın ilk oda arkadaşı bulma uygulaması apartsandmates.com ile
          apart bulma sıkıntısı sona eriyor !
        </p>

        <SearchBarMobil />

        <HeroSlider />
      </div>
    </div>
  );
};
