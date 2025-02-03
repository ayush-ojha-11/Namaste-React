import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-r-lg shadow-lg">
      <img
        alt="res-pic"
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <div className="res-card-info-container">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="res-card-cuisines">{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
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
