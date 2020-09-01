//import React, { Component } from 'react';
//import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
//import { useSelector } from 'react-redux';
import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Login from './page/Account/Login';
import Register from './page/Account/Register/Register';
import Home from './page/Home';
import ForgotPassword from './page/Account/ForgotPassword';
import Account from './page/Account/Configurações';
import Eventos from './page/Eventos';
import Promoções from './page/Promoções';
import Feedback from './page/EnviarFeedback';
import HotelPage from './page/Hotelpage';
import Ajuda from './page/Ajuda'
import Dashboard from './page/Dashboard'
import RegisterAlojamento from './page/RegisterAlojamento'


/*
function PrivateRoute({ component: Component, ...rest}){
    const {isAutenticated} = useSelector(state=> state.auth)
    return(
        <Route {...rest} render={(props)=>(
                isAutenticated ? ( <Component {...props}/>):(<Redirect to = {{pathname :'/', state:{from : props.location}}}/>)
                )}/>
    )
}
*/
const  Routes = () =>(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/account' component={Account}/>
        <Route path='/ForgotPassword' component={ForgotPassword}/>
        <Route path='/eventos' component={Eventos}/>
        <Route path='/promoções' component={Promoções}/>
        <Route path='/sendfeedback' component={Feedback}/>
        <Route path='/register_alojamento' component={RegisterAlojamento}/>
        <Route path='/ajuda' component={Ajuda}/>
        <Route path='/Dashboard' component={Dashboard}/>
        <Route path='/hotelpage/:id' component={HotelPage}/>          
    </Switch> 
);
export default Routes;
