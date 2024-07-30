
const getUserInfo = async (user) => {
    const response = await fetch(`api/SecureWebsite/home/${user}`, {
        method: "GET",
        credentials: "include"
    });

    if(!response.ok){
        throw new Error("Network Response was not ok");
    }

    const data = await response.json();
    //console.log(data);
    return data.result;
}

export {getUserInfo}