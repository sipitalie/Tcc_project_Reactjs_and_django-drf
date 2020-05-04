import React from 'react';
import './NavBar.css';
import DrawerToggleButton from '../../Header/SideDrawe/DrawerToggleButton';
import {useSelector, useDispatch} from 'react-redux'

import LogoutService from '../../../service/logout.service';
import { NavLink} from 'react-router-dom';
import { FaUserCircle, FaUserAlt} from "react-icons/fa";

//'../../../components/SideDrawe/DrawerToggleButton';

export default function NavBar(props){

    const {isAuthenticated}= useSelector(state => state.auth);
    const dispacth = useDispatch();
    function authLoginButton(){
        isAuthenticated && dispacth(LogoutService());
        
    }
    return(
        <header className="navbar">
        <nav className="navbar_navegation">
            <div className="navbar_toggle_button">
                <DrawerToggleButton click={props.drawerToggleButton}/>
            </div>
            <div className="navbar_logo"><a href ="/">THE LOGO</a></div>
            <div className="spacer"/>
            <div className="navbar_navgation_items">
                <ul> 
                    <li>
                        { !isAuthenticated && <a href="/login">login</a>} 
                    </li>
                    <li>
                        { !isAuthenticated && <a href="/register">Sig in</a>} 
                    </li>
                    <li>
                        { isAuthenticated && <a onClick={authLoginButton} href="/logout">logout</a>} 
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)   
};
                    
                    
                    
                    

