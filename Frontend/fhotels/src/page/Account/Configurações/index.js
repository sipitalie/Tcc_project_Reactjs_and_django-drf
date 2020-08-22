import React, { useState} from 'react';
import {useDispatch} from 'react-redux'
import {authRegister} from '../../../store/fetchActions';
//import { Link } from 'react-router-dom';
//import { Link, useHistory} from 'react-router-dom';



import './index.css';
export default function Account(){ 

    /*/const [token, setToken] = useState('');
    //const [email, setEmail] = useState('');
    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');
   // const [password2, setPassword2] = useState('');
    //const history = useHistory();
    //const dispatch = useDispatch();

    function handleRegister(e){
        e.preventDefault();
        const data = {
            email,
            username,
            password,
            password2,    
        };
        setEmail('');
        setUsername('');
        setPassword('');
        setPassword2('');
        dispatch(authRegister(data));  
    }*/
    
    return(
        <section>
            <div className="class-PerfilUser"> 
                <h1>Perfil</h1> 
                <div>Foto de perfil</div>
                <div>Nome</div>
                <div>email</div>
                <div>Aleterar palavra pass</div>
            </div>           
        </section>  
    );
}

/*
try {
    const response = await api.post('/account/login/', data);
    console.log(response.data.key);
    console.log(response.status);
    localStorage.setItem('token', response.data.key);
    history.push('/');

} catch (err){
    console.log("Falha no login, tente novamente. ",err);
}*/