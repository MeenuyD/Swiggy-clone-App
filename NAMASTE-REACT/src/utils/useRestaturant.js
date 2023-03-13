import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../confige";
import { useParams } from "react-router-dom";

const useRestaturant = () => {
  const [restaturant, setRestaurant] = useState(null);
  const params = useParams();
  const { resId } = params;
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
       FETCH_MENU_URL+resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }
  return restaturant;
};
export default useRestaturant;
