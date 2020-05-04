import React, { Component } from 'react';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './page/Account/Login';

function PrivateRoute({ component: Component, ...rest}){
    const {isAutenticated} = useSelector(state=> state.auth)
    return(
        <Route {...rest} render={(props)=>(
                isAutenticated ? ( <Component {...props}/>):(<Redirect to = {{pathname :'/', state:{from : props.location}}}/>)
                )}/>
    )
}

const  Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;
