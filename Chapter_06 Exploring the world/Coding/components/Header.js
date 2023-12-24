import { useState } from "react";

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            <button onClick={handleLoggin}>{logValue}</button>
        </div>
    )
};

export default Header;