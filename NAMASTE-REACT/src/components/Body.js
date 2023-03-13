import { useEffect, useState, useContext } from "react";
import { restaurantList } from "../confige";
import RestaturantCard from "./RestaturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  // const searchVar=useState();
  // const [searchInput, setSearchInput]=searchVar;
  const [allRestaturants, setAllRestaturants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  const {user,setUser}=useContext(UserContext);
  useEffect(() => {
    getResturants();
  }, []);
  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0257475&lng=72.8696944&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaturants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const isOnline=useOnline();
  if(!isOnline){
    return(
      <h1>🔴 Offline,please check your internet connection</h1>
    )
  }
  // Not rendered componenet early return
  if (!allRestaturants) return null;
  return allRestaturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 m-2">
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 text-white bg-purple-900 hover:bg-gray-50  0 rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaturants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={e=>setUser({...user,name:e.target.value})}></input>
        {/* </input>
        <input value={user.name} onChange={e=>setUser({email:e.target.value})}>
        </input> */}
      </div>
      <div className="flex flex-wrap">
        {filteredrestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id}>
              <RestaturantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
