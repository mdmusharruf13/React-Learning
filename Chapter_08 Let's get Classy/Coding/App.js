import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./components/Profile";
import ProfileClassComponrnt from "./components/ProfileClass";
import About from "./components/About";

const App = () => {
    return (
        <>
            <h2>this is app component</h2> 
            <About />
            <Profile name={"musharruf"} />
            <ProfileClassComponrnt name=" musharrufClass 1" lang="js" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);