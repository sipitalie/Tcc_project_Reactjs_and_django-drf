//fetch actions <=> buscar ações em um serviço externo
import api from '../../service/api';
import {login, register,forgotpassword} from '../ducks/auth'
import {get_alojamento} from '../ducks/hotel'

export const authLogin = (user)=>{
    return dispatch =>{
        api.post('api/account/login/', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', response.data.email);
            dispatch(login()); 
            window.location.pathname='/';          
        })
        .catch(error =>{
            const {error_mensage} = error.response.data;
            console.log(error_mensage);
        });
    };
};

export const authRegister = (user)=>{
    return dispatch =>{
        api.post('api/account/register/', user)
        .then(response => {
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('token', response.data.token);
            dispatch(register()); 
            window.location.pathname='/';          
        })
        .catch(error =>{
            const {error_mensage} = error.response.data;
            console.log(error_mensage);
        });
    };
};

export const authForgotPassword = (user)=>{
    return dispatch =>{
        api.post('api/account/Reset_Password/', user)
        .then(response => {
            console.log(response.data);
            dispatch(forgotpassword()); 
            window.location.pathname='/';          
        })
        .catch(error =>{
            const {error_message} = error.response.data;
            console.log(error_message);
        });
    };
};

export const get_all_alojamentos =()=>{
    return (dispatch) =>{
        api.get("api.v1/alojamentos/")
            .then((res)=>{
                dispatch(get_alojamento(res.data));
            })   
            .catch(console.log)
    };
};
