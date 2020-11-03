//fetch actions <=> buscar ações em um serviço externo
import api from '../../service/api';
import {get_avaliaçoes_hotel} from '../ducks/Avaliaçoes';
import {sendfeedback} from '../ducks/feedback';

import {login,
    register,
    forgotpassword} from '../ducks/auth';
import {get_alojamento,
    detail_alojamento,
    post_alojamento,
    seguir_hotel,
    remover_seguir} from '../ducks/Alojamentos';

import {get_eventos,
    post_eventos,
    detail_eventos,
    get_eventos_hotel} from '../ducks/Eventos';

import {detail_promo,
    get_promo,
    post_promo,
    get_promo_hotel} from '../ducks/Promoções';



export const authLogin = (user)=>{
    return dispatch =>{
        api.post('api/account/login/', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('id', response.data.id);
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
            localStorage.setItem('id', response.data.id);
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
export const alojamento_register =(data)=>{
    return (dispatch) =>{
        api.post("api.v1/alojamentos/register", data)
            .then((res)=>{
                dispatch(post_alojamento(res.data));
                window.location.pathname='/';  
            })   
            .catch(console.log)
    };
};

export const alojamentos_details =(id)=>{
    return (dispatch) =>{
        api.get(`api.v1/alojamentos/${id}`)
            .then((res)=>{
                dispatch(detail_alojamento(res.data));   
            })   
            .catch(console.log)
    };
};



export const send_feedback =()=>{
    return (dispatch) =>{
        api.post("api.v1/feedback/")
            .then((res)=>{
                dispatch(sendfeedback(res.data));
            })   
            .catch(console.log)
    };
};

export const evento_get =()=>{
    return (dispatch) =>{
        api.get("api.v1/evento/")
            .then((res)=>{
                dispatch(get_eventos(res.data));
            })   
            .catch(console.log)
    };
};

export const evento_post =(data)=>{
    return (dispatch) =>{
        api.post("api.v1/evento/", data)
            .then((res)=>{
                dispatch(post_eventos(res.status));
            })   
            .catch(console.log)
    };
};

export const evento_details =(id)=>{
    return (dispatch) =>{
        api.get(`api.v1/evento/${id}`)
            .then((res)=>{
                dispatch(detail_eventos(res.status));
            }) 
            .catch(console.log)
    };
};
export const eventos_hotel =(hotel_owner_id)=>{
    return (dispatch) =>{
        api.get(`api.v1/evento/hotelpage/${hotel_owner_id}`)
            .then((res)=>{
                dispatch(get_eventos_hotel(res.data));
            }) 
            .catch(console.log)
    };
};

export const promo_post =(data)=>{
    return (dispatch) =>{
        api.post("api.v1/promoçao/", data)
            .then((res)=>{
                dispatch(post_promo(res.status));
            })   
            .catch(console.log)
    };
};



export const promo_get =()=>{
    return (dispatch) =>{
        api.get(`api.v1/promoçao/`)
            .then((res)=>{
                dispatch(get_promo(res.data));
            }) 
            .catch(console.log)
    };
};

export const promo_details =(id)=>{
    return (dispatch) =>{
        api.get(`api.v1/promoçao/${id}`)
            .then((res)=>{
                dispatch(detail_promo(res.data));
            }) 
            .catch(console.log)
    };
};

export const promo_hotel =(hotel_owner_id)=>{
    return (dispatch) =>{
        api.get(`api.v1/promoçao/hotelpage/${hotel_owner_id}`)
            .then((res)=>{
                dispatch(get_promo_hotel(res.data));
            }) 
            .catch(console.log)
    };
};


export const avaliaçoes_hotel =(hotel_owner_id)=>{
    return (dispatch) =>{
        api.get(`api.v1/avaliacao/hotelpage/${hotel_owner_id}`)
            .then((res)=>{
                dispatch(get_avaliaçoes_hotel(res.data));
            }) 
            .catch(console.log)
    };
};




export const quartos_hotel =(hotel_owner_id)=>{
    return (dispatch) =>{
        api.get(`api.v1/quarto/hotelpage/${hotel_owner_id}`)
            .then((res)=>{
                dispatch(get_avaliaçoes_hotel(res.data));
            }) 
            .catch(console.log)
    };
};

export const Seguirhotel=(hotel_id, user_id)=>{
    return(dispatch)=>{
        api.post(`api.v1/seguir/${hotel_id}/${user_id}`)
        .then((res)=>{
            dispatch(seguir_hotel(res.data));
        })
        .catch(console.log)
    };
};