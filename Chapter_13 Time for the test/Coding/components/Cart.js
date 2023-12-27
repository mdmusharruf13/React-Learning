import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <>
            <h1>cart Items</h1>
            <button onClick={handleClearCart}>clear cart</button>
            <div className="cart-items">

                {
                    cartItems.map(cartItem => (
                        <FoodItem key={cartItem.cloudinaryImageId} {...cartItem} />
                    ))
                }
            </div>
        </>
    )
}

export default Cart;