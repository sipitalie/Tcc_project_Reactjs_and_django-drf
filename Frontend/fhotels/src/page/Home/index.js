import React,{useEffect} from 'react';
import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';
import './Home.scss';
import {useSelector, useDispatch} from 'react-redux';
import {get_all_alojamentos} from '../../store/fetchActions';

import Card from "../../components/Card/Card";
export default function Cards() {

    const alojamento= useSelector((state) =>(state.Alojamento));
    const dispatch =useDispatch();
   
    useEffect( () => {
        dispatch(get_all_alojamentos());
    },[dispatch]);

	return (
        
		<div className="container">
                {alojamento.map((alojamentos, index)=>  <Card key ={index} alojamento={alojamentos} />)} 
		</div>

    );
}
