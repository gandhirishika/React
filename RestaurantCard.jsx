import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString
  }) =>{
  return (
    
    <div className="card">
    <img   alt="loading"
    src = {IMG_CDN_URL
     +cloudinaryImageId
     }
    />
    <h2>{name}</h2>
    <h6>{cuisines.join(",")}</h6>
    <h4>{lastMileTravelString}Minutes</h4>
    </div>

  );
};

export default RestaurantCard;