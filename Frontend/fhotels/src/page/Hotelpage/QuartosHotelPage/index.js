import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {quartos_hotel} from '../../../store/fetchActions';
import QuartosCard from '../../../components/QuartoCard';
import './index.css'


export default function QuartosHotel(){ 
    const Quartos= useSelector((state) =>(state.Quartos));
    const dispatch =useDispatch();
    const { id } =useParams();
    const hotel_owner_id= id
    useEffect( () => {
        dispatch(quartos_hotel(hotel_owner_id));
    },[dispatch]);   
    return(
        <>
            <div className="QuartosHotelPage">                
            {Quartos.map((quartos, index)=>  <QuartosCard key ={index} Quarto={quartos} />)}                
            </div>           
        </>  
    );
}