import react from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './BottomStory.css'


import omitf from '../images/omitf.jpg'

const BottomStory = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section className="bottom-story-container">
            <p data-scroll data-scroll-speed="2" data-scroll-delay="0.075" className="story-text" >Story here about why this will succeed and if you invest you're gonna make tons of money and stuff</p>
        </div >
    );
}


export default BottomStory;