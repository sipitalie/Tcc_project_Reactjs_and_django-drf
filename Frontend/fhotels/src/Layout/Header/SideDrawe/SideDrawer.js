import React from 'react';
import './SideDrawer.css';

const sideDrawer = props =>{
    let drawerclasses ='side-drawer';
    if(props.show){
        drawerclasses ='side-drawer open';
    }
    return(
        <nav className={drawerclasses}>
        <ul>
            <li><a href="/">Sig in</a></li>
            <li><a href="/">logout</a></li>
            
        </ul>

    </nav>

    )
};
export default sideDrawer;
//<li><a href="/">login</a></li>
