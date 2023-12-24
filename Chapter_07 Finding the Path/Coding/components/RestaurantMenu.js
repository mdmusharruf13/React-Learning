import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const params = useParams();
    const { id } = params;
    console.log(id);

    return (
        <>
            <h2>this is restaurnat menu</h2>
        </>
    )
};

export default RestaurantMenu;