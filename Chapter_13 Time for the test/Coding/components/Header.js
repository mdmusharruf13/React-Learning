import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">
        <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx76pUGIu1KXqWiqRHteqox-vTDYnsMp6PQ&usqp=CAU"
            alt="logo" 
            data-testid="logo"
        />
    </a>
);

const Header = () => {
    const [log, setLog] = useState(true);
    const [logValue, setLogValue] = useState("login");
    const handleLoggin = () => {
        res = log ? setLogValue("logout") : setLogValue("login");
        log ? setLog(false) : setLog(true);

    }

    const { user } = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/instamart">
                    <li>instamart</li>
                    </Link>
                    <Link to="/cart">
                        <li data-testid="cart">Cart {cartItems.length}</li>
                    </Link>
                </ul>
            </div>
            <h2 className="logging-name">{user.name}</h2>
            <button className="logging-btn" onClick={handleLoggin}>{logValue}</button>
        </div>
    )
};

export default Header;