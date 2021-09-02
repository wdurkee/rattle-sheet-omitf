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
            <PhotoCard cardID="card3" speed="4" />
            <PhotoCard cardID="card4" speed="2" />
            <PhotoCard cardID="card5" speed="6" />
        </div>
    );
}


export default MiddlePhotos;