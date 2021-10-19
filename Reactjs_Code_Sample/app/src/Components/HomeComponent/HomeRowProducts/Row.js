import React from "react";
import { deal_Of_The_Products } from "../../Utils/deal_of_the_day";
import { home_Products } from "../../Utils/home_products";
import { top_offers_Products } from "../../Utils/top_offer_products";
import RowCarousual from "./RowCarousual";
import RowHeader from "./RowHeader";

const Row = () => {
  return (
    <div className="bg-light p-2 mt-3">
      <RowHeader headerTag="Deals of the Day" timeShow />
      <RowCarousual products={deal_Of_The_Products} time="5000" />

      <RowHeader headerTag="Top Offers On" />
      <RowCarousual products={top_offers_Products} time="4000" />

      <RowHeader headerTag="Home Furnishing Range" />
      <RowCarousual products={home_Products} time="7000" />
    </div>
  );
};

export default Row;
