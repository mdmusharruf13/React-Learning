import { useContext, useState } from "react";
import restaurantList from "../Constants";
import ResturantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Body = () => {

    function filterData(search) {
        return restaurantList.filter(item => item.data.name?.toLowerCase().includes(search.toLowerCase()));
    }
    const [inputSearch, setInputSearch] = useState("");
    const [restaurantItem, setRestaurantItem] = useState(restaurantList);

    const { user, setUser } = useContext(UserContext);

    // useEffect(() => {
    //     getRestaurants();
    // });

    async function getRestaurants() {
        const data = await fetch(link);
        const json = await data.json();
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    // let isOnline = useOnline();
    // // let offline = false;
    // if(isOnline) {
    //     return <h1>You're offline now. Please check your internet connection</h1>
    // }

    if(!restaurantItem) return null;

    if(restaurantItem?.length === 0) {
        return <Shimmer />
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
            <input value={user.name} onChange={(e) => setUser({
                ...user,    
                name: e.target.value, 
            })} />
            <input value={user.email} onChange={(e) => setUser({
                ...user,    
                email: e.target.value, 
            })} />
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