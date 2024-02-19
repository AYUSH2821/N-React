import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let [state, setState] = useState(resList);

  const eventHandler = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4.4);

    setState(filteredList);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-bar"
          type="search"
          placeholder="🔎 Search Bar"
        />

        <button onClick={eventHandler} className="filter-btn">
          ⭐ Top Rated Restaurants ⭐
        </button>
      </div>

      <div className="res-container">
        {state.map((item) => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
