import { useContext } from "react";
import UserContext from "../utils/UserContext";

const FoodItem = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString
}) => {

    return (
        <>
            <div className="fooditem">

                <div >
                    <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
                    <h2>{name}</h2>
                    <h3>{cuisines}</h3>
                    <h4>{lastMileTravelString} </h4>
                </div>
            </div>
        </>
    )
}

export default FoodItem;