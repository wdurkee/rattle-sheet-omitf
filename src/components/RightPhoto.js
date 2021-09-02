import react from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './RightPhoto.css'

import omitf from '../images/omitf.jpg'

const RightPhoto = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div data-scroll-section className="right-photo-container" id="sticky1">
            <div data-scroll data-scroll-speed="1" data-scroll-sticky data-scroll-target="#sticky1" className="text-container">
                <p className="who">
                    WHO ahsdkj ajsh asjkh asjk ad kjsh asd kjh ad kjhdsa  adskjhads kjhads kjhads kjhads  adskjhsjh qw ehjqhewqw jheq  qwjhe qwje  qw ehqwejhq  qwehqwjhe q wejhqwe jqwe wqjhqwe wqed sa
                </p>
                <p className="what">
                    WHO ahsdkj ajsh asjkh asjk ad kjsh asd kjh ad kjhdsa  adskjhads kjhads kjhads kjhads  adskjhsjh qw ehjqhewqw jheq  qwjhe qwje  qw ehqwejhq  qwehqwjhe q wejhqwe jqwe wqjhqwe wqed sa
                </p>
            </div>
            <div className="sticky-photo">
                <div data-scroll data-scroll-speed="-9" className="photo-container">
                    <img src={omitf} alt="omitf" className="photo-1" />
                </div>
            </div>
        </div >
    );
}


export default RightPhoto;