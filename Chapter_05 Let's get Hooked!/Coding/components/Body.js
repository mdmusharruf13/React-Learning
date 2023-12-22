import { useState } from "react";
import restaurantList from "../../Constant";
import ResturantCard from "./ResturantCard";

const Body = () => {

    function filterData(search) {
        return restaurantList.filter(item => item.data.name.includes(search));
    }
    const [inputSearch, setInputSearch] = useState("");
    const [restaurantItem, setRestaurantItem] = useState(restaurantList);

    return (
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