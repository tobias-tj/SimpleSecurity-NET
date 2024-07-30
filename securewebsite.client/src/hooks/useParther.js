import { useEffect, useState } from "react";
import { fetchPartners } from "../services/partherService";


const useParther = () => {
    const [parthers, setParthers] = useState([]);

    useEffect(() => {
        const getParthers = async () => {
            const data = await fetchPartners();
            setParthers(data);
        };

        getParthers();
    }, []);

    return parthers;
}

export default useParther;