
export const loginService = async (userData) => {
    try{
        const response = await fetch("api/SecureWebsite/login", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(userData),
            headers: {
                "content-type" : "Application/json",
                "Accept": "application/json"
            }
        });

        const data = await response.json();

        if(response.ok){
            return { success: true, data};
        }else{
            return { success: false, data};
        }
    }catch(error){
        console.log("Login Error: ", error);
        return { success: false, error };
    }
}