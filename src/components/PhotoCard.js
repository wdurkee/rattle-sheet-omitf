import react from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './PhotoCard.css'

import omitf from '../images/omitf.jpg'

const PhotoCard = (props) => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll data-scroll-speed={props.speed} className="photo-card" id={props.cardID}>
            <img data-scroll src={props.itemImage} alt="img1" className="photo-card-img" />
            <h3 data-scroll className="photo-card-title">{props.title}</h3>
            <p data-scroll className="photo-card-subtitle">{props.subtitle}</p>
        </div>
    );
}


export default PhotoCard;