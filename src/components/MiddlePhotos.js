import react from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './MiddlePhotos.css'

import PhotoCard from './PhotoCard'

import omitf from '../images/omitf.jpg'

const MiddlePhotos = (props) => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section className="middle-photos-container">
            {props.children}
        </div>
    );
}


export default MiddlePhotos;