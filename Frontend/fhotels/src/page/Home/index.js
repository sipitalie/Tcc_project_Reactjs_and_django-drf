import React,{useEffect} from 'react';
import Alojamento from '../../components/Hotel';

import {useSelector, useDispatch} from 'react-redux';

import {getAllAlojamentos} from '../../store/fetchActions';
import './Home.css';


export default function List() {
    const alojamento= useSelector((state) =>(state.Alojamento));
    const dispatch =useDispatch();
    
    useEffect( () => {
        dispatch(getAllAlojamentos());

    },[dispatch]);

	return (
		<div className="container">
            {alojamento.map((alojamentos, index)=> <Alojamento key ={index} alojamento={alojamentos} />)}
		</div>
	);
}
