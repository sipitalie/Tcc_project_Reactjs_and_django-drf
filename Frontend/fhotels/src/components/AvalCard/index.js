import React from 'react';
import './index.css';

export default function AvalCard({avaliacao}){
    console.log(avaliacao)
    return(
        <div className="avaliação-card">
            <div className="avaliação-id">
                <h6>{avaliacao.User}</h6>
                <p>{avaliacao.nota}</p>
            </div>
                                  
        </div> 
    );
}