import { IMG_CDN_URL } from "../confige";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const FoodItem = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
  avgRating,
}) => {
  const {user}=useContext(UserContext);
  return (
    <div className="card">
      {/* <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/8c78040597b866bf87bf6c154ab4c919 "></img> */}
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{lastMileTravelString}</h3>
      <h4>{avgRating} stars</h4>
      <h5>{user.name}-{user.email}</h5>

    </div>
  );
};
export default FoodItem;