import react from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './MiddlePhotos.css'

import omitf from '../images/omitf.jpg'

const MiddlePhotos = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section className="middle-photos-container">
            <div data-scroll data-scroll-speed="2">1</div>
            <div data-scroll data-scroll-speed="1">2</div>
            <div data-scroll data-scroll-speed="3">3</div>
            <div data-scroll data-scroll-speed="2">4</div>
            <div data-scroll data-scroll-speed="1">5</div>
            <div data-scroll data-scroll-speed="2">6</div>
            <div data-scroll data-scroll-speed="1">7</div>
            <div data-scroll data-scroll-speed="3">8</div>
        </div>
    );
}


export default MiddlePhotos;