import React, { useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Aos from 'aos'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import 'aos/dist/aos.css'
import './App.css';


import Top from './components/Top'
import RightPhoto from './components/RightPhoto'
import SideText from './components/SideText'
import MiddlePhotos from './components/MiddlePhotos'
import BottomStory from './components/BottomStory'
import Nav from "./components/Nav";
import OMITF from "./pages/omitf";


import circleLogo from './images/rattle-logo-circle.png';
import ellipse1 from './images/Ellipse1.png';
import ellipse2 from './images/Ellipse2.png';

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const containerRef = useRef(null)

  return (
    <Router>
      <div className="App">
        <Nav />
        <img data-aos="fade-up" src={circleLogo} alt="Rattle" className="circle-logo fadeInCircle" />
        <img data-aos="fade-left" src={ellipse1} alt="e1" className="ellipse1 fadeInBlob" />
        <img data-aos="fade-right" src={ellipse2} alt="e2" className="ellipse2 fadeInBlob" />
        <OMITF />
      </div>
    </Router>
  );
}

export default App;