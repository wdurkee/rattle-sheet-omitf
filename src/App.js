import React, { useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import './App.css';


import Top from './components/Top'
import RightPhoto from './components/RightPhoto'
import SideText from './components/SideText'
import MiddlePhotos from './components/MiddlePhotos'



import circleLogo from './images/rattle-logo-circle.png';
import ellipse1 from './images/Ellipse1.png';
import ellipse2 from './images/Ellipse2.png';

function App() {

  const containerRef = useRef(null)


  return (
    <div className="App">
      <a className="sheet-logo" href="https://songcamp.mirror.xyz/" target="_blank" rel="noreferrer">onesheet</a>
      <img src={circleLogo} alt="Rattle" className="circle-logo fadeInCircle" />
      <img src={ellipse1} alt="e1" className="ellipse1 fadeInBlob" />
      <img src={ellipse2} alt="e2" className="ellipse2 fadeInBlob" />
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
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
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
}

export default App;