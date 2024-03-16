import { HeroSlider } from "../heroSlider";
import { SearchBar } from "../search";
import "./hero.scss";

export const Hero = () => {
  return (
    <div className="heroSection">
      <h1 className="title">Alanyada Aradığın Apartlar Burada</h1>
      <p className="description">
        Alanyanın ilk oda arkadaşı bulma uygulaması apartsandmates.com ile apart
        bulma sıkıntısı sona eriyor !
      </p>
      <SearchBar />

      <HeroSlider />
    </div>
  );
};
