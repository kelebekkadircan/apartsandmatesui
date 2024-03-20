import React from "react";
import "./home.scss";
import { Why, Hero, Popular, Blog } from "~/components";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Why />
      <Popular />
      <Blog />
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
