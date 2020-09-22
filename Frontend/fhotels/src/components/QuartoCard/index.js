import React from 'react';
   
export default function QuartosCard({ Quarto }) {
    const id = Quarto.id
    console.log(id)
    return (
        <div className="Class_Quarto">
        <div>{"Caract_bedroom: "+Quarto.Caract_bedroom}</div>
        <div>{"type_bedroom: "+Quarto.type_bedroom}</div>
        <div>{"preco: "+Quarto.preco}</div>
        </div>
    );}
    