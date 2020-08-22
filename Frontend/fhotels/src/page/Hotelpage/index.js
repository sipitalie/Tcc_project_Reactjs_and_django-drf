import React, { useState} from 'react';
//import {useDispatch} from 'react-redux'
//import {authRegister} from '../../../store/fetchActions';
//import { Link } from 'react-router-dom';
//import { Link, useHistory} from 'react-router-dom';



import './index.css';

export default function HotelPage(){ 
   
    return(
        <section>
            <div className="class-PageHotel">  
                <div>Eventos</div>
                <div>Informações e fotos dos quartos</div>
                <div>Avaliações</div>
                <div>Promoções</div>
                <div>Reclamações e notificações de problemas</div>
                <div>Mapa</div>
                <div>Contacto e horário da recepção</div>    
            </div>           
        </section>  
    );
}

