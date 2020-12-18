import React, { useState } from 'react';
//import {FiMapPin, FiWifi,} from 'react-icons/fi';
import { FaBell}  from "react-icons/fa";
import { Link } from 'react-router-dom';
import './index.css';

export default function EventCard({evento}){
    const [lembrete, Setlembret]=useState(false)
    const Df_rv_lembret = () =>Setlembret(!lembrete);
    //console.log(lembrete)
    let definir_or_remover_lembrte ='Remover lembrete'
    if (lembrete===false) {
         definir_or_remover_lembrte = "Definir lembrete";
      }
    return(
        <div className="Evento-card">
            <div className="title-hotel">
                <h1>Nome do Hotel</h1>
                <h2>{evento.title}</h2>     
            </div>
            <div className="class-content-event">
                <p>{evento.content}</p>
            </div>
            <div className="event-data-detalhes"> 
                <p>dia: {evento.data_do_evento}</p>
                <p>publicado a: {evento.data}</p>
                {/*<Link to={`/eventos/${evento.id}`}><p>ver mais</p></Link>*/}
            </div>
            <div  className="lembret-class">
                <div className="definir_or_remover_lembrte" onClick ={Df_rv_lembret}>{definir_or_remover_lembrte}<span><FaBell/></span></div>
            </div>	           
        </div> 
    );
}
