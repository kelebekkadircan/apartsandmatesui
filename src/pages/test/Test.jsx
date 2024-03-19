import React from "react";
import "./Test.scss";
import { PopularCard } from "~/components/popular/PopularCard";

export const Test = () => {
  return (
    <div className="test">
      <div className="testCardSection">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </div>
  );
};
