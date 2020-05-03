import React from 'react';
import './NavBar.css';
import DrawerToggleButton from '../SideDrawe/DrawerToggleButton';

const NavBar =props =>(
    <header className="navbar">
        <nav className="navbar_navegation">
            <div className="navbar_toggle_button">
                <DrawerToggleButton click={props.drawerToggleButton}/>
            </div>
            
            <div className="navbar_logo"><a href ="/">THE LOGO</a></div>
            <div className="spacer"/>
            <div className="navbar_navgation_items">
                <ul>
                    <li><a href="/">Sig in</a></li>
                    <li><a href="/">logout</a></li>
                    <li><a href="/">login</a></li>
                </ul>
            </div>
        </nav>
    </header>

);

export default NavBar;