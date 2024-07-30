import { useEffect, useState } from "react";
import { getUserInfo } from "../services/userService";

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("user");

        if(user){
            getUserInfo(user)
                .then(data => {
                    setUserInfo(data);
                })
                .catch(error => {
                    console.log("Error home page: ", error);
                    setError(error);
                });
        }
    }, []);

    return {userInfo, error};
};

export default useUserInfo;