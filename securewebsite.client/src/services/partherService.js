
export const fetchPartners = async () => {
    try {
        const response = await fetch("api/SecureWebsite/dashBoard", {
            method: "GET",
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        //console.log(data)
        return data.result || [];
    } catch (error) {
        console.error("Error fetching partners:", error.message);
        return [];
    }
};