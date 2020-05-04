import React, { useState } from 'react';
//import './index.css';

import NavBar from './NavBar/NavBar';
import SideDrawer from './SideDrawe/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

const Header = (props) => {
  const[SideDraweOpen, SetsideDraweOpen]=useState(false);
  
  const drawerToggleClickHamdler = () =>SetsideDraweOpen(!SideDraweOpen);
  
  const backdropClickHandler =()=>SetsideDraweOpen(!SideDraweOpen);
  console.log(SideDraweOpen)

  return (
    <div style={{height:'100%'}}>
     <NavBar drawerToggleButton={drawerToggleClickHamdler}/>
     <SideDrawer show={SideDraweOpen} />
     {SideDraweOpen && <Backdrop click={backdropClickHandler} />}
      
      
    </div>
  );
}

export default Header;
