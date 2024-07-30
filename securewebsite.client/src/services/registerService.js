
export const registerService = async (userData) => {
    try{
        const response = await fetch("/api/SecureWebsite/register", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        const data = await response.json();
        //console.log(data);
        if(response.ok){
            return { success: true, data };
        }else{
            return { success: false, data };
        }
    }catch(error){
        console.log("Register Error: ", error);
        return { success: false, error };
    }
}