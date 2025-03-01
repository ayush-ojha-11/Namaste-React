import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-white rounded-lg shadow-lg text-center">
      <img
        alt="res-pic"
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <div className="res-card-info-container space-y-2">
        <h3 className="font-bold text-lg line-clamp-1 mt-2">{name}</h3>
        <h4 className="line-clamp-1">{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime + " minutes"}</h4>
      </div>
    </div>
  );
};

//Higher order component- A function that takes a component and gives an enhanced version of it as output
//input - RestaurantCard => output- RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
