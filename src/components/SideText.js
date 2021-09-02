import react from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './SideText.css'

import omitf from '../images/omitf.jpg'

const SideText = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section className="side-text-container">
            <h2 data-scroll data-scroll-speed="6" data-scroll-direction="horizontal" className="side-text">Side Scrolling Text - Side Scrolling Text</h2>
            <div className="bottom-border"></div>
            <h2 data-scroll data-scroll-speed="-6" data-scroll-direction="horizontal" className="side-text">Side Scrolling Text - Side Scrolling Text</h2>
            <div className="bottom-border"></div>
        </div >
    );
}


export default SideText;