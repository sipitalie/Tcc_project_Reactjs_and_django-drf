import React from 'react';
import './index.css'
import Slider from '../Slideshow/Slideshow'
   
export default function QuartosCard({ Quarto }) {
        
    return (
        <>  
            <div className="class_Quarto_">
                
                <div className="Class_column_Quarto_right_info">
                    <div><p>{"Carategoria: "+Quarto.Caract_bedroom}</p></div>
                    <div><p>{"Tipo: "+Quarto.type_bedroom}</p></div>
                    <div><p>{"preço: "+Quarto.preco}</p></div>
                </div>
                <div className="Class_column_Quarto_left_img">
                    <Slider/>
                </div>
            </div>
            
        </>
        
    );}
    