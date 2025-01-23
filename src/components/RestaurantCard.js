import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="res-card">
      <img
        alt="res-pic"
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <div className="res-card-info-container">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime + " minutes"}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
