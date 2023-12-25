import { useState } from "react";


const Profile = (props) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>this is profile functional component</h2> 
            <h2>Name : {props.name}</h2>
            <h2>count : {count}</h2>
            <button onClick={() => setCount(count+1)}>increase</button>
        </>
    )
}

export default Profile;