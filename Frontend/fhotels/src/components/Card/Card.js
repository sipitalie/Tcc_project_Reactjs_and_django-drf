import React from 'react';
//import Slider from './Slideshow/Slideshow'
import {FiMapPin, FiWifi,} from 'react-icons/fi';
import { IoMdRestaurant,IoMdFitness } from "react-icons/io";
import { Link, useHistory } from 'react-router-dom';
import { FaStar} from "react-icons/fa";
import './Card.css';
import ImgComp from './Slideshow/ImgComp';
import h2 from './assets/h5.jpg';
//import {useDispatch} from 'react-redux';
//import {alojamentos_details} from './../../store/fetchActions';




export default function Card({alojamento}){

    //const dispatch = useDispatch();
    const description = alojamento
    //let amount_of_stars=description.Estrela
    let star = description.Estrela
    //console.log(description);
    const followers = 12234
    const follow =()=>{
        //create action follow  
    }
    //const godetails=()=>{
    //    const id  =description.id
    //    dispatch(alojamentos_details(id));
        //window.location.pathname=`/hotelpage/${id}`;
        //criar uma requisição nos detalhes    
    //}
    const goMap=()=>{
        //criar uma requisição ao google map 
        //let latitude=description.latitude
        //let longitude=description.longitude
    }
    return(
        <div className="product-card">

            <div className ="left-column-img">
                <ImgComp src={h2}/>
            </div>

            <div className ="right-column-inf0">
                <div className="nome" >
                    <div>
                        <Link to={`/hotelpage/${description.id}`}><h1 className ="big" >{description.nome}</h1></Link>
                    </div>
                </div>

                <div className="class-tipo">
                    <p className="tipo">Tipo: {description.Type_Alojamento}</p>
                </div>

                <div className ="localizado" >
					<div className="FiMapPin" >
                        <button id ="goMap" onClick={goMap}>
                            <div><FiMapPin/></div>  
                        </button>
                    </div>  
                
                    <h4 className="class-cidade">
                        {description.cidade}, {description.Provincia}, {description.pais}
                    </h4>

                </div>

                <div className="dercricão">
                    <p className="dercricão-info">{description.linha}</p>
                </div>
				
                <div className="class-follow-Followers-star">
                
                    <div className="class-star">
					    <div className="class-star-5">
                            { star ===5 && <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>}
                            { star ===4 && <div><FaStar/><FaStar/><FaStar/><FaStar/></div>}
                            { star ===3 && <div><FaStar/><FaStar/><FaStar/></div>}
                            { star ===2 && <div><FaStar/><FaStar/></div>}
                            { star ===1 && <div><FaStar/></div>}                            
					    </div>
                    </div>
                    <button id ="follow" onClick={follow}>
                        <div>Seguir</div> 
                    </button>
                    <div className="followers">
                        <div>{followers} k</div> 
                    </div>
                </div>

                <div className="class-wifi-restaurant-gym">
                    <div className="free-Wi-fi">
                        <div><FiWifi/></div> 
                    </div>
                    <div className="restaurant">
                        <div><IoMdRestaurant/></div> 
                    </div>
                    <div className="gym">
                        <div><IoMdFitness/></div>
                    </div> 
                </div>
            
            </div> 
        </div> 
    );
}