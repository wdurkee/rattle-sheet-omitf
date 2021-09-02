import react from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './Top.css'

import circleLogo from '../images/rattle-logo-circle.png';
import cutout from '../images/cutout.png';

const Top = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section className="top-container">
            <h1 data-scroll data-scroll-position="top" data-scroll-speed="2" className="title-text animated fadeInUp">Our Man In The Field</h1>
            {/* <img data-scroll data-scroll-speed="2" src={cutout} alt="cutout" className="cutout" /> */}
            <div className="letters animated fadeInUp">
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="1" data-scroll-delay="0.075">R</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="4" data-scroll-delay="0.075">A</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="2" data-scroll-delay="0.075">T</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="7" data-scroll-delay="0.075">T</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="2" data-scroll-delay="0.075">L</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="8" data-scroll-delay="0.075">E</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="5" data-scroll-delay="0.075">&nbsp;V</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="1" data-scroll-delay="0.075">E</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="3" data-scroll-delay="0.075">N</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="6" data-scroll-delay="0.075">T</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="2" data-scroll-delay="0.075">U</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="9" data-scroll-delay="0.075">R</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="5" data-scroll-delay="0.075">E</h3>
                <h3 data-scroll data-scroll-repeat data-scroll-position="top" data-scroll-speed="3" data-scroll-delay="0.075">S</h3>
            </div>
        </div >
    );
}


export default Top;