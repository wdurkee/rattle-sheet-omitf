import React, { useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import './App.css';


import Top from './components/Top'
import RightPhoto from './components/RightPhoto'
import SideText from './components/SideText'
import MiddlePhotos from './components/MiddlePhotos'
import BottomStory from './components/BottomStory'



import circleLogo from './images/rattle-logo-circle.png';
import ellipse1 from './images/Ellipse1.png';
import ellipse2 from './images/Ellipse2.png';

function App() {

  const containerRef = useRef(null)


  return (
    <div className="App">
      <a className="sheet-logo" href="https://songcamp.mirror.xyz/" target="_blank" rel="noreferrer">funsheet</a>
      <img src={circleLogo} alt="Rattle" className="circle-logo fadeInCircle" />
      <img src={ellipse1} alt="e1" className="ellipse1 fadeInBlob" />
      <img src={ellipse2} alt="e2" className="ellipse2 fadeInBlob" />
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
          <Top />
          <RightPhoto />
          <SideText />
          <MiddlePhotos />
          <BottomStory />
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;