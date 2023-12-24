import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/">
        <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx76pUGIu1KXqWiqRHteqox-vTDYnsMp6PQ&usqp=CAU"
            alt="logo"
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
                    {/* <Link to="/cart">
                    <li>Cart</li>
                    </Link> */}
                </ul>
            </div>
            <button onClick={handleLoggin}>{logValue}</button>
        </div>
    )
};

export default Header;