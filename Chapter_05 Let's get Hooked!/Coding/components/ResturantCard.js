// Config Driven UI
const ResturantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt=" burger" />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
};

export default ResturantCard;