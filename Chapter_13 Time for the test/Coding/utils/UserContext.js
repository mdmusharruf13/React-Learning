import { createContext } from "react";

const UserContext = createContext({
    user : {
        name: "Musharruf",
        email: "musharruf@gmail.com",
    },
});

UserContext.displayName = "UserContext";

export default UserContext;