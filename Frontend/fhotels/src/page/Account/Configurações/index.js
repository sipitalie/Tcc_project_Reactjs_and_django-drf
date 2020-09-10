import React, { useState} from 'react';
import {useDispatch} from 'react-redux'
import {authRegister} from '../../../store/fetchActions';
//import { Link } from 'react-router-dom';
//import { Link, useHistory} from 'react-router-dom';



import './index.css';
export default function Account(){ 
   
    return(
        <section>
            <div className="class-PerfilUser"> 
                <div className="account-perfil">
                    <h1>Perfil</h1>
                </div> 
                <div>Nome</div>
                <div>email</div>
                <div>Aleterar palavra pass</div>
                <div className="Dark-light<">
                    <div>Dark/light</div>
                    <label> 
                        <input className="check-imput" type="checkbox"></input>
                        <span className="check"> </span>
                    </label>
                </div>	    
            </div>           
        </section>  
    );
}

