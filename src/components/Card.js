import Star from "../img/Star 1.png"

const Card = (props) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props)
    return ( 
        <div className="container-card">
            <div className="container-photo">
                <img src={`../images/${props.coverImg}`} alt="cover" className="card-photo" />
                {badgeText && <p className="status">{badgeText}</p>}
            </div>
            <div className="main-info">
                <img src={Star} alt="star" className="star"/>
                <span className="number-star"> {props.stats.rating}</span>
                <span className="additional-info"> ({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <p className="type-course">{props.title}</p>
            <p className="prices"> <b>From ${props.price} </b>/ person</p>
        </div>
     );
}
 
export default Card;