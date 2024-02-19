import React from "react";
import { RES_IMG } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="image"
        src={RES_IMG + resData.info.cloudinaryImageId}
        alt="Food-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h6>
        {costForTwo} .<span> Delivery in 30 mins</span>
      </h6>
      <h6>{avgRating}⭐ Ratings</h6>
      <div className="btn">
        <button className="btn1"> Order Now! </button>
      </div>
    </div>
  );
};
export default RestaurantCard;
