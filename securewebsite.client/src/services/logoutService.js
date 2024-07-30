
export const logoutService = async () => {
    try{
        const response = await fetch("/api/SecureWebsite/logout", {
            method: "GET",
            credentials: "include"
        })

        const data = await response.json()
        if(response.ok){
            return { success: true, data, message: data.message };
        }else{
            return { success: false, data, message: data.message };
        }
    }catch(error){
        console.log("Register Error: ", error);
        return { success: false, error };
    }
}