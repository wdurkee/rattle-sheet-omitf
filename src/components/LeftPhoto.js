import react from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import './SidePhoto.css'

import omitf from '../images/omitf.jpg'

const LeftPhoto = (props) => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section className="outer-photo-container" id={props.sticky}>
            <div className="sticky-photo photo-left">
                <div data-scroll data-scroll-speed="-9" className="photo-container">
                    <img src={props.imageName} alt="omitf" className="photo-1" />
                </div>
            </div>

            <div data-scroll data-scroll-speed="1" data-scroll-sticky data-scroll-target={"#" + props.sticky} className="text-container right-text">
                <p className="who">
                    {props.text1}
                </p>
                <p className="what">
                    {props.text2}
                </p>
            </div>
        </div >
    );
}


export default LeftPhoto;