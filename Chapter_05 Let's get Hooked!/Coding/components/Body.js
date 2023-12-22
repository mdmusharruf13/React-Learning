import restaurantList from "../../Constant";
import ResturantCard from "./ResturantCard";

const Body = () => {
    return (
        <div className="restaurant-list">
            {restaurantList.map((item) => {
                return (<ResturantCard key={item.data.id} {...item.data}/>)
            })}
        </div>
    )
};

export default Body;