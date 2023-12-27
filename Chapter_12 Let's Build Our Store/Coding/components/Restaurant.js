import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

// Config Driven UI
const ResturantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {

    const item = {name, cuisines, cloudinaryImageId, lastMileTravelString};

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    const { user } = useContext(UserContext);
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt=" burger" />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{lastMileTravelString} {user.name}</h4>
            <button onClick={() => handleAddItem(item)}>Add Item</button>
        </div>
    )
};

export default ResturantCard;