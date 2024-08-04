import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { swiggyUrl } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [ShowIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards, title } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="menu w-10/12 mx-auto">
      <div className="clicked-item my-20 text-center w-8/12 mx-auto border border-black rounded-2xl flex flex-col items-center gap-4 py-6 text-xl">
        <div>
          <img
            src={swiggyUrl + cloudinaryImageId}
            className="h-32 w-36 rounded-xl"
          />
        </div>
        <div>
          <h1 className=" font-bold m-3">{name}</h1>
          <h3 className="font-semibold">
            {cuisines} = {costForTwoMessage}
          </h3>
        </div>
        <button className="text-white font-bold bg-black px-7 py-1 rounded-md hover:shadow-md transition-all transform hover:scale-[0.95] duration-200">
          Add
        </button>
      </div>
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === ShowIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
