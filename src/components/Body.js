import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    console.log("Use effect executed!");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=28.6139&lng=77.2088&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline!</h1>;
  }
  // Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black m-4"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="py-2 px-4 rounded-lg bg-green-100 hover:cursor-pointer"
            onClick={() => {
              // Filter the restaurants
              const searchFilteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchFilteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="py-2 px-4 rounded-lg bg-gray-200 hover:cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
