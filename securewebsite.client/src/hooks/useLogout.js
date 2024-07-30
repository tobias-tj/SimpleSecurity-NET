import { useState } from "react"
import { logoutService } from "../services/logoutService";


const useLogout = () => {
    const [logoutMessage, setLogoutMessage ] = useState('');

    const logout = async () => {
        const result = await logoutService();
        //console.log(result)
        if(result.success){
            localStorage.removeItem("user");
            setLogoutMessage(result.message);
            alert(result.message);
            document.location = "/login";
        }else{
            console.log("Logout Failed: ", result.message);
            setLogoutMessage(result.message);
        }
    };


    return {
        logout,
        logoutMessage
    };
};

export default useLogout;