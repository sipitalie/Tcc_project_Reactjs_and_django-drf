import React from 'react';
//import {FiMapPin, FiWifi,} from 'react-icons/fi';
//import { FaBell}  from "react-icons/fa";
//import { Link } from 'react-router-dom';
import './index.css';


export default function PromCard({promo}){
    
    return(
        <div className="Promo-card">
            <div className="promo-id">
                <div>{'Hotel ID '+promo.hotel}</div>
                <div>{'ID do Quarto em promoção '+promo.quartos_em_prom}</div>
                <p>{'Preço antigo :'}</p><p>{'Novo preço: '+promo.new_preco}</p>        
            </div>
            <div className="promo-data">
                <p>Publicado a {promo.data}</p> 
                <p>valido até {promo.valid_data}</p>  
            </div>
                      
        </div> 
    );
}
