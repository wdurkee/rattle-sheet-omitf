import react from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './MiddlePhotos.css'

import PhotoCard from './PhotoCard'

import omitf from '../images/omitf.jpg'

const MiddlePhotos = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section className="middle-photos-container">
            <PhotoCard cardID="card1" speed="-1" />
            <PhotoCard cardID="card2" speed="1" />
            <PhotoCard cardID="card3" speed="3" />
            <PhotoCard cardID="card4" speed="5" />
            <PhotoCard cardID="card5" speed="8" />
        </div>
    );
}


export default MiddlePhotos;