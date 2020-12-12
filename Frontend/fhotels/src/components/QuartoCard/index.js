import React,{useState}from 'react';
import './index.css'
import Slider from '../Slideshow/Slideshow'
import ButtonUploadImg from '../Upload/Profile_Picture/buttonclikupload';
import SendPhotosToTheBedroomGallery from '../Upload/Bedroom_Photo_Gallery/index';

export default function QuartosCard({ Quarto }) {
    const[uploadOpen, SetuploadOpen]=useState(false);
    const uploadonclick= () => SetuploadOpen(!uploadOpen);
    return (
        <>  
            <div className="class_Quarto_">
            <SendPhotosToTheBedroomGallery show={uploadOpen}/> 
                <div className="Class_column_Quarto_right_info">
                    <div><p>{"Carategoria: "+Quarto.Caract_bedroom}</p></div>
                    <div><p>{"Tipo: "+Quarto.type_bedroom}</p></div>
                    <div><p>{"preço: "+Quarto.preco}</p></div> 
                    <div>{''}</div> 
                    <ButtonUploadImg click={uploadonclick}/>    
                </div>
                <div className="Class_column_Quarto_left_img">
                    <Slider/>
                </div>
            </div>
            
        </>
        
    );}
    