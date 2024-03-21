import React from "react";
import "./home.scss";
import { Why, Hero, Popular, Blog, Aparts } from "~/components";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Why />
      <Popular />
      <Blog />
      <Aparts />
    </div>
  );
};

export default Home;

{
  /* <Search /> */
}
{
  /* <About /> */
}
{
  /* <Slide /> */
}
