import PropTypes from 'prop-types';

const PartherCard = ({name, Icon}) => {
    return(
        <div className="max-w-xs w-full bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <Icon className="w-12 h-12 text-indigo-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        </div>
    )
}

PartherCard.propTypes = {
    name: PropTypes.string,
    Icon: PropTypes.object
}

export default PartherCard;