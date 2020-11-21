import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {get_all_alojamentos, a_Seguirhotel} from '../../store/fetchActions';
import './Home.scss';
import Card from "../../components/Card/Card";
//import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';


export default function Home() {

    const alojamento= useSelector(state =>state.Alojamento);
    const {isAuthenticated}= useSelector(state => state.auth); 
    const dispatch =useDispatch();
     
    isAuthenticated && dispatch(a_Seguirhotel(localStorage.getItem('id')));
    
    useEffect( () => { 
        dispatch(get_all_alojamentos());
    },[dispatch]);
    
	return (
        
		<div className="container">
                {alojamento.map((alojamentos, index)=>  <Card key ={index} alojamento={alojamentos}/>)} 
		</div>

    );
}
