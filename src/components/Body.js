import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedCard } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);
  const [searchText, setsearchText] = useState([]);
  const PromotedRes = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=26.87560&lng=80.91150"
    );
    const json = await data.json();
    setlistOfRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRes(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline,please check your internet connection</h1>
    );

  return (
    <div className="body  lg:w-10/12  lg:mx-auto">
      <div className="filter flex flex-col gap-4 p-4 sm:flex-row sm:justify-between">
        <div className="search">
          <input
            type="text"
            className="search-box border border-solid border-black rounded-md w-[200px] outline-none px-1 py-1"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn border border-solid rounded-md px-3 mx-3 lg:px-5 lg:mx-4 bg-gray-600 text-sky-50 py-1 hover:shadow-xl  transition-all transform hover:scale-[0.96] duration-200"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRes(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn w-[200px] sm:w-auto p-2 border border-solid rounded-md sm:px-2 md:px-3 lg:px-5 bg-violet-500 hover:bg-violet-600 text-sky-50 hover:shadow-xl transition-all transform hover:scale-[0.96] duration-200	"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-row flex-wrap gap-1 sm:flex-row sm:flex-wrap sm:gap-3 lg:gap-4 xl:gap-3">
        {filteredRes.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurant/" + restaurants.info.id}
          >
            {restaurants.info.promoted ? (
              <PromotedRes resData={restaurants} />
            ) : (
              <RestaurantCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
