import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  const { setUserName, loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return (<h1>Looks like your internet connection is disconnected!please check</h1>);


  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
          }}>search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button data-testid="topRatedButton" className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating === 4);
            setFilteredRestaurant(filteredList);
          }}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName:</label>
          <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e) => { setUserName(e.target.value) }} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {
          filteredRestaurant?.map((restaurant) => <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {
              restaurant?.info?.isOpen ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />
            }




          </Link>)
        }
      </div>
    </div>
  )
}
export default Body;