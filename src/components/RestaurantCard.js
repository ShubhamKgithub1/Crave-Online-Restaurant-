import { swiggyUrl } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="res-card w-[230px] p-3 rounded-lg border overflow-hidden transition-all hover:shadow-2xl transform hover:scale-[1.02] duration-300 min-h-[500px] sm:w-[280px] md:w-[240px] lg:w-[240px] xl:w-[250px]">
      <img
        className="res-logo rounded-lg h-[250px] min-w-full"
        src={swiggyUrl + cloudinaryImageId}
      />
      <h3 className="font-medium text-lg py-4">{name}</h3>
      <h4 className="text-pretty pb-3">{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black font-semibold text-white px-2 py-1 mt-3 ml-2 rounded-md absolute z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
