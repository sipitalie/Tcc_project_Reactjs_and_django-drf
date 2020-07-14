//fetch actions <=> buscar ações em um serviço externo
import api from '../../service/api';
import {login} from '../ducks/auth'
import {addAlojamentoList} from '../ducks/hotel'

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
            const {error_mensage} = error.response.data
        });
    };
};

export const getAllAlojamentos =()=>{
    return (dispatch) =>{
        api.get("api.v1/alojamentos/")
            .then((res)=>{
                dispatch(addAlojamentoList(res.data));
            })   
            .catch(console.log)
    };
};
//http://127.0.0.1:8000/api.v1/alojamentos/
//export const createArticle= (article) =>{
//    return (dispatch) =>{
//        api.post("api/create/", article)
//            .then((res) => dispatch(addObject(res.data)))   
//            .catch(console.log);
//        console.log(article);
//    };
//};