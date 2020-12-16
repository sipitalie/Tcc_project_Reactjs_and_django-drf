import React from 'react';
import {Link } from 'react-router-dom';

import './index.css'
import Slider from '../Slideshow/Slideshow'
import ButtonUploadImg from '../Upload/Profile_Picture/buttonclikupload';
import  IsAdminHotel from '../../service/isAdmin.service';

export default function QuartosCard({ Quarto, idhotel }) {
    console.log(idhotel , typeof(idhotel ));
    
    return (
        <>  
            <div className="class_Quarto_">
                <div className="Class_column_Quarto_right_info">
                    <div><p>{"Carategoria: "+Quarto.Caract_bedroom}</p></div>
                    <div><p>{"Tipo: "+Quarto.type_bedroom}</p></div>
                    <div><p>{"preço: "+Quarto.preco}</p></div> 
                    <div>{''}</div> 
                    {IsAdminHotel(idhotel)&&(
                        <Link to={`/upload/image/gallery/quarto/${Quarto.id}/`}>
                        <ButtonUploadImg/></Link>)
                    } 
                </div>
                <div className="Class_column_Quarto_left_img">
                    <Slider quarto_id={Quarto.id}/>
                </div>   
            </div>
        </>
    )
;}
//<Link to={`${match.url}/upload/image/galllery/quarto/${Quarto.id}/`}><ButtonUploadImg/> </Link>