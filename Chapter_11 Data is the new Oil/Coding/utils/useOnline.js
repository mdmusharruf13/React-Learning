import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(false);
    
    useEffect(() => {

        const handleOnline = ()=>{
            setIsOnline(true);
        };
        const handleOffline = ()=>{
            setIsOnline(false);
        };

        Window.addEventListener("online", handleOnline);
        Window.addEventListener("online", handleOffline);

        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
    }, [])

    return isOnline;
}

export default useOnline;