import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { alojamentos_details } from '../../store/fetchActions';
import { FaStar} from "react-icons/fa";
import EventosHotel from './EventosHotelPage';
import PromosHotel from './PromoçõesHotelPage';
import AvaliacoesHotel from './AvaliaçõesHotelPage';
import QuartosHotel from './QuartosHotelPage'
//import InfoCard from '../../components/InfoCard';

import ImgComp from './ImgComp';
import h2 from '../../assets/h5.jpg';
import './index.css';

export default function HotelPage(){
    let match=useRouteMatch();
    const [navMenu,SetnavMenu]=useState(false)
    const {id } =useParams();
    
    const dispatch =useDispatch();
    var dados=[]

    useEffect( () => {
        dispatch(alojamentos_details(id));  
    },[dispatch, id]);

    function onScroll(){
        //console.log(window.scrollY)
        if(window.scrollY >=200){
            SetnavMenu(true);
        }else{
            SetnavMenu(false);
        }
    };
    window.addEventListener('scroll', onScroll) ;  
    //window.removeEventListener('scroll', onScroll);
    
    const alojamentodetail= useSelector((state) =>(state.Alojamento));   
    alojamentodetail.map((alojamento, index)=>{ dados=alojamento } )
    let star = dados.Estrela
  
    return(
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
                <div className={navMenu ? 'navMenu active':'navMenu'}>
                        <ul>
                            <li><Link to={`${match.url}/eventos`}>Eventos</Link></li>
                            <li><Link to={`${match.url}/promoções`}>Promoções</Link></li>
                            <li><Link to={`${match.url}/avaliacoes`}  >Avaliações</Link></li>
                            <li><Link to={`${match.url}/quartos`} >Quartos</Link></li>
                            <li><Link to={`${match.url}/mapa`}  >Mapa</Link></li>    
                        </ul>      
                </div>
                <div className="rendering">
                        <Route path={`${match.path}/eventos`} render={()=>{
                            return(
                                <>
                                    <div>EVENTOS</div>
                                    <EventosHotel/> 
                                </>
                            )
                        }}/>
                         <Route path={`${match.path}/promoções`} render={()=>{
                            return(
                                <>
                                    <div>Promoções</div>
                                    <PromosHotel/>
                                </>
                            )
                        }}/>
                        <Route path={`${match.path}/avaliacoes`} render={()=>{
                            return(
                                <>
                                    <div>Avaliações</div>
                                    <AvaliacoesHotel/>
                                </>
                            )
                        }}/>
                        <Route path={`${match.path}/quartos`} render={()=>{
                            return(
                                <>
                                    <div>Quartos</div>
                                    <QuartosHotel/>   
                                </>
                            )
                        }}/>         
                </div>                                        
            </div>      
    );
}

