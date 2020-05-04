//fetch actions <=> buscar ações em um serviço externo
import api from '../../service/api';
import {login} from '../ducks/auth'
//import { useHistory } from 'react-router-dom';



//const history = useHistory();

export const authLogin = (user)=>{
    return dispatch =>{
        api.post('/account/login/', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', response.data.email);
            dispatch(login()); 
            window.location.pathname='/';          
        })
        .catch(error =>{
            const {error_mensage} = error.response.data
        });
    };
};