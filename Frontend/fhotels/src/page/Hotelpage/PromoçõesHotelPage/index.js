import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {promo_hotel} from '../../../store/fetchActions';
import PromoCard from '../../../components/PromoCard';
import './index.css';

export default function PromosHotel(){ 
    const Promo= useSelector((state) =>(state.Promoçoes));
    const dispatch =useDispatch();
    const { id } =useParams();
    const hotel_owner_id =id
    useEffect( () => {
        dispatch(promo_hotel(hotel_owner_id));
    },[dispatch]);   
    return(
        <>
            <div className="EventosHotelPage">                
            {Promo.map((promos, index)=>  <PromoCard key ={index} promo={promos} />)}                
            </div>           
        </>  
    );
}