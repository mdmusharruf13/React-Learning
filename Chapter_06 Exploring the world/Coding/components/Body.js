import { useEffect, useState } from "react";
import restaurantList, { jsonData, swiggy_api_URL } from "../Constants";
import ResturantCard from "./Restaurant";
import Shimmer from "./Shimmer";


const Body = () => {

    function filterData(search) {
        return restaurantList.filter(item => item.data.name?.toLowerCase().includes(search.toLowerCase()));
    }
    const [inputSearch, setInputSearch] = useState("");
    const [restaurantItem, setRestaurantItem] = useState(restaurantList);

    // useEffect(() => {
    //     // getRestaurants();
    // }, []);

    // async function getRestaurants() {
    //     const json_data = await fetch(swiggy_api_URL);
    //     const json = await json_data.json();
    //     console.log(json?.data?.cards[2]?.card?.card);
    // }

    if(!restaurantItem) return null;

    if(restaurantItem?.length === 0) {
        return <h1>No restaurant match your Filter!!</h1>
    }

    return (restaurantItem?.length === 0) ? ( <Shimmer /> ) : (
        <>
        <div>
            <input 
                type="text" 
                className="search-box" 
                placeholder="Search"  
                onChange={(e) => setInputSearch(e.target.value)} 
                value={inputSearch}
            />
            <button onClick={() => setRestaurantItem(filterData(inputSearch))}>Search</button>
        </div>
        <div className="restaurant-list">
            {restaurantItem.map((item) => {
                return (<ResturantCard key={item.data.id} {...item.data}/>)
            })}
        </div>
        </>
    )
};

export default Body;