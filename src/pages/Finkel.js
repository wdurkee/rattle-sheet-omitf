import React, { useRef, useEffect } from "react";

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Top from '../components/Top'
import RightPhoto from '../components/RightPhoto'
import SideText from '../components/SideText'
import MiddlePhotos from '../components/MiddlePhotos'
import BottomStory from '../components/BottomStory'


const Finkel = () => {

    const containerRef = useRef(null)

    return (
        <LocomotiveScrollProvider
            options={
                {
                    smooth: true,
                    lerp: 0.04, // Linear Interpolation, 0 > 1 // Try 0.01
                    multiplier: 1.4, // Effect Multiplier
                    reloadOnContextChange: true,
                    touchMultiplier: 2,
                    smoothMobile: 0,
                    smartphone: {
                        smooth: !0,
                        multiplier: 2,
                        lerp: 0.2,
                        breakpoint: 767
                    },
                    tablet: {
                        smooth: !1,
                        multiplier: 2,
                        lerp: 0.2,
                        breakpoint: 1024
                    },

                    // ... all available Locomotive Scroll instance options 
                }
            }
            watch={
                [
                    //...all the dependencies you want to watch to update the scroll
                ]
            }
            containerRef={containerRef}
        >
            <main data-scroll-container ref={containerRef} role="main">
                <h1>FINKEL</h1>
            </main>
        </LocomotiveScrollProvider>
    );
}

export default Finkel;