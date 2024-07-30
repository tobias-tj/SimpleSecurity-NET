import { Building, Code, Monitor } from "lucide-react";
import PartherCard from "./PartherCard";
import PropTypes from 'prop-types';


const Parthers = ({parthers}) => {
    const icons = {
        Microsoft : Building,
        Oracle :  Code,
        Apple : Monitor
    };

    return(
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Aquí están nuestros Parthers</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {parthers.map((partner, index) => {
                    const Icon = icons[partner] || Building;
                    return <PartherCard key={index} name={partner} Icon={Icon} />
                })}
            </div>
        </div>
    )
}

Parthers.propTypes = {
    parthers: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Parthers