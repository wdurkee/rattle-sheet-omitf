import React, { useRef, useEffect } from "react";

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Top from '../components/Top'
import RightPhoto from '../components/RightPhoto'
import LeftPhoto from '../components/LeftPhoto'
import SideText from '../components/SideText'
import MiddlePhotos from '../components/MiddlePhotos'
import BottomStory from '../components/BottomStory'
import PhotoCard from '../components/PhotoCard'

import omitf from '../images/omitf.jpg'
import omitf1 from '../images/omitf1.jpeg'
import omitf2 from '../images/omitf2.jpeg'
import omitf4 from '../images/omitf4.jpeg'
import omitf5 from '../images/omitf5.jpeg'
import omitf6 from '../images/omitf6.jpeg'
import omitf7 from '../images/omitf7.jpeg'
import omitf8 from '../images/omitf8.jpeg'
import omitf9 from '../images/omitf9.jpeg'
import omitf10 from '../images/omitf10.jpeg'

import rootsy from '../images/rootsy.jpeg'




const OMITF = () => {

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
                <Top data-aos="fade-up" />
                <RightPhoto
                    text1="Our Man In The Field was founded by Alex Ellis. A traveling journalist who captures intimate moments of connection in captivating songs which grab the heart and move the soul. It is our mission to prove that it is possible to have a major label career without ever signing up with a major label and be among the best contemporary Americana songwriters, backed by music industry influencers and thought leaders."
                    sticky="sticky1"
                    stickyID="#sticky1"
                    imageName={omitf1}
                />
                <LeftPhoto
                    text1="Alex first applied for The Rattle to seek guidance on his project. 'I've met with some independent labels, but I'm getting mixed messages about how to move forward.' He needed suggestions on taking his music career forward with Sony Music Poland, UMG Publishing."
                    sticky="sticky2"
                    imageName={omitf2}
                />
                <RightPhoto
                    text1="His experience at The Rattle enabled him to develop a founder mindset. He leveraged The Rattle network to build his team and band. A Rattle Entrepreneur in Residence introduced Alex to the idea of approaching private investors and assisted him in making a successful pitch deck, while he also recorded his album at The Rattle, which was partially produced and mixed in house."
                    sticky="sticky3"
                    imageName={omitf4}
                />
                <LeftPhoto
                    text1="Since the release of “The Company of Strangers” (2020), Our Man in the Field has amassed multiple accolades, winning ‘Emerging Act of the Year’ at Americana-UK and garnering multiple nominations including ‘Song of the Year’ from The Americana Music Association UK and ‘Album of the Year’ and ‘Act of the Year’ at Americana-UK. Perhaps it's no surprise that Our Man in the Field rose to the third spot on the European Americana Chart."
                    sticky="sticky4"
                    imageName={omitf5}
                />

                <SideText />
                <MiddlePhotos>
                    <PhotoCard cardID="card1" speed="-1" itemImage={rootsy} title="Signing a deal with Rootsy - One of the biggest Americana labels around, with Tom from Loose Records as their Executive A&R for his second record" />
                    <PhotoCard cardID="card2" speed="3" itemImage={omitf7} title="Raised c.£150k in investment, gathering a lot of interest. For example Rattle investor Raul Biancardi told Alex 'Whatever space is left in your round, I want it'" />
                    <PhotoCard cardID="card3" speed="5" itemImage={omitf9} title="Developed a company that he now lives off" />
                    <PhotoCard cardID="card4" speed="1" itemImage={omitf6} title="12,000 monthly plays on Spotify" />
                    <PhotoCard cardID="card5" speed="4" itemImage={omitf10} title="Top 10 iTunes album" />
                </MiddlePhotos>
                <BottomStory />
            </main>
        </LocomotiveScrollProvider>
    );
}

export default OMITF;