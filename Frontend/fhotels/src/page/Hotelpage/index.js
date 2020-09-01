import { Link, useParams, useHistory} from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {alojamentos_details} from '../../store/fetchActions';
import { FaStar} from "react-icons/fa";
import ImgComp from './ImgComp';
import h2 from '../../components/Card/assets/h5.jpg';
import './index.css';

export default function HotelPage({match}){ 
    const {id } =useParams();
    const dispatch =useDispatch();
    var dados=[]
    useEffect( () => {
        dispatch(alojamentos_details(id));     
    },[dispatch, id]);
    const alojamentodetail= useSelector((state) =>(state.Alojamento));   
    alojamentodetail.map((alojamento, index)=>{ dados=alojamento } )
    let star = dados.Estrela
  
    return(
        <section>
            <div className="class-PageHotel">
                <header className="header-perfil">
                    <div className="class-foto"><ImgComp src={h2}/></div>
                    <div className="class-content">
                        <div><h1>{dados.nome }</h1></div>
					    <div className="class-star-5">
                            { star ===5 && <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>}
                            { star ===4 && <div><FaStar/><FaStar/><FaStar/><FaStar/></div>}
                            { star ===3 && <div><FaStar/><FaStar/><FaStar/></div>}
                            { star ===2 && <div><FaStar/><FaStar/></div>}
                            { star ===1 && <div><FaStar/></div>}                            
					    </div>
                        <div>Tipo: {dados.Type_Alojamento}</div>
                        <h4 className="class-cidade">{dados.pais}, {dados.Provincia}, {dados.cidade}</h4>
                        <div className="dercricão"><p className="dercricão-info">{dados.linha}</p></div>
                    </div>
                    
                </header> 
                <div className="Menu-perfil">
                        <ul>
                            <li><a href="eventos">Eventos</a></li>
                            <li><a href="promocoes">Promoções</a></li>
                            <li><a href="avaliacoes">Avaliações</a></li>
                            <li><a href="quartos">Quartos</a></li>
                            <li><a href="mapa">Mapa</a></li>    
                        </ul>      
                </div>  
                <div className="wMenu-perfil">
                        <ul>
                            <li><a href="quartos">Informações e fotos dos quartos</a></li>
                            <li><a href="reclamacoes">Reclamações e notificações de problemas</a></li>
                            <li><a href="contactos">Contacto e horário da recepção</a></li>
                        </ul>
                </div>        
            </div>           
        </section>  
    );
}
