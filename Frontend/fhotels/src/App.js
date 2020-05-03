import React, { useState } from 'react';
import './index.css';

import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/SideDrawe/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'


function App() {
  const[SideDraweOpen, SetsideDraweOpen]=useState(false);
  
  const drawerToggleClickHamdler = () =>SetsideDraweOpen(!SideDraweOpen);
  
  const backdropClickHandler =()=>SetsideDraweOpen(!SideDraweOpen);
  console.log(SideDraweOpen)

  return (
    <div style={{height:'100%'}}>
     <NavBar drawerToggleButton={drawerToggleClickHamdler}/>
     <SideDrawer show={SideDraweOpen} />
     {SideDraweOpen && <Backdrop click={backdropClickHandler} />}
       
      <main style={{marginTop:"60px"}}>
        <p> ola!!!!!</p>
     
      </main>
      
      
    </div>
  );
}

export default App;


//
//
//<p>{SideDraweOpen}</p>
//
//{sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
