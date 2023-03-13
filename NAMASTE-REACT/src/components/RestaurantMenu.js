import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../confige";
import Shimmer from "./Shimmer";
import useRestaturant from "../utils/useRestaturant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const restaturant=useRestaturant(resId);
  const dispatch=useDispatch();
  const addFoodItem=(item)=>{
    dispatch(addItem(item));
  };
  
  return !restaturant ?<Shimmer/>: (
    <>
      <div className="flex">
        <div>
          <h1>Restaurant is:{resId}</h1>
          <h2>{restaturant?.name}</h2>
          <img src={IMG_CDN_URL + restaturant?.cloudinaryImageId}></img>
          <h3>{restaturant?.area}</h3>
          <h3>{restaturant?.city}</h3>
          <h3>{restaturant?.avgRating} stars</h3>
          <h3>{restaturant?.costForTwoMsg}</h3>
        </div>
        <div className="p-5">
          <h1>Menu</h1>
          <ul>
          {restaturant?.menu?.items && Object.values(restaturant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}-<button className="p-1 bg-green-50" onClick={()=>{addFoodItem(item)}}>Add Item</button></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
